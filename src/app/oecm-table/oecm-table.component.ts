import { ITableSettingsModalInitData, TableSettingsModalComponent } from '../modal/table-settings-modal/table-settings-modal.component';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { TableLocalSettingsService } from '../services/table-local-settings.service';
import { IKendoColumn, IKendoTableLocalConfig } from './types';
import { GridComponent } from '@progress/kendo-angular-grid';
import { ITableLocalSettings } from '../types/table-types';
import { ModalService } from '../modal/modal.service';
import { process } from "@progress/kendo-data-query";
import { getColumnFilterOperator } from './helpers';
import { OecmGridData } from './oecm-grid-data';
import { KendoColumn } from './kendo-column';

@Component({
    selector: 'app-oecm-table',
    templateUrl: './oecm-table.component.html',
    styleUrls: ['./oecm-table.component.scss']
})
export class OecmTableComponent<T> {
    public originalData: OecmGridData = new OecmGridData(this.localSettingsService.DEFAULT_PAGE_SIZE)
    @ViewChild('gridContainer', {static: true}) gridContainerElement: ElementRef<HTMLDivElement>
    @ViewChild('gridFooter', {static: true}) gridFooterElement: ElementRef<HTMLDivElement>
    @ViewChild('pager', {static: true}) pagerElement: ElementRef<HTMLDivElement>
    @ViewChild(GridComponent, {static: true}) gridComponent: GridComponent
    @Output('doubleclick') doubleClickEvent = new EventEmitter<T | null>()
    public pageSize: number = this.localSettingsService.DEFAULT_PAGE_SIZE
    public settingsModalFields: {name: string, value: boolean}[] = [ ]
    private localConfig: IKendoTableLocalConfig = { }
    public settingsModalIsVisible: boolean = false
    @Input('tablename') tableName: string = ''
    public grigColumns: KendoColumn[] = [ ]
    public kendoGridSelectBy: string = 'id'
    public dataIsLoading: boolean = false
    public filterable: boolean = false
    public gridHeight: number = 500
    private tableId: string = ''
    public skip: number = 0

    constructor(
        private localSettingsService: TableLocalSettingsService,
        private hostElement: ElementRef<HTMLElement>,
        private modalService: ModalService
    ) { }

    ngOnDestroy(): void {
        this.onAppUnload()
    }

    ngAfterViewInit(): void {
        this.setGridHeight()
    }


    @Input('disableheightcalculate') public disableHeightCalculate: boolean | 'modal'
    @Input('hideheader') public hideHeader: boolean
    @Input('hidepager') public hidePager: boolean

    @Input('tableheight')
    public set tableHeight(value: number) {
        this.disableHeightCalculate = true
        this.gridHeight = value
    }

    @Input('columns')
    public set tableColumns(value: IKendoColumn<T>[]) {
        this.grigColumns = value.map(x => new KendoColumn(x, this.localConfig))
        this.loadTableSettingsFromlocal(this.tableId, this.grigColumns)
    }

    @Input('data')
    public set tableData(value: any[]) {
        this.originalData.setData(value)
    }

    @Input('kendoGridSelectBy')
    public set setKendoGridSelectBy(value: string) {
        this.kendoGridSelectBy = value
    }

    @Input('tableid')
    public set setTableId(value: string) {
        this.tableId = value
        this.loadTableSettingsFromlocal(value, this.grigColumns)
    }

    @HostListener('window:unload')
    public onAppUnload(): void {
        this.localSettingsService.saveSetting(this.tableId)
    }

    public fetchData(callback: () => Promise<any>): Promise<T[]> {
        this.dataIsLoading = true
        return new Promise((resolve, reject) => {
            callback()
                .then(response => {
                    this.tableData = response
                    resolve(response)
                })
                .catch(error => reject(error))
                .finally(() => this.dataIsLoading = false)
        })
    }

    public get activeRow(): T | null {
        const activeRow = (this.gridComponent.wrapper.nativeElement as HTMLElement)
            .querySelector('tbody tr.k-selected')

        if (activeRow && activeRow?.hasAttribute('ng-reflect-data-row-index')) {
            return this.originalData.gridData.data[parseInt(activeRow.getAttribute('ng-reflect-data-row-index') as any)] ?? null
        }
        else {
            return null
        }
    }

    public toExcel(): void {
        this.gridComponent.saveAsExcel()
    }

    public toCsv(): void {
        let csvContent: string = this.grigColumns.map(column => column.title).join(',') + '\r\n'
        csvContent = this.originalData.gridData.data.reduce((result, row) => {
            return result + this.grigColumns.map(column => row[column.name] ?? '').join(',') + '\r\n'
        }, csvContent)

        const blob = new Blob([csvContent], { type: 'data:text/csv;charset=utf-8' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.setAttribute('download', 'data.csv')
        link.click()
        link.remove()
    }

    public fetchExcelData = () => {
        return {data: this.originalData}
    }

    public filterToggle(): void {
        this.filterable = !this.filterable
    }

    public showSettingsModal(): void {
        const initData: ITableSettingsModalInitData = {tableId: this.tableId, columns: this.grigColumns, onSave: (x) => this.onSettingsModalSave(x)}
        this.modalService.open<ITableSettingsModalInitData>(TableSettingsModalComponent, initData)
    }

    public onFilter(event: Event): void {
        let inputValue = (event.target as HTMLInputElement).value

        this.originalData.gridViewData = process(this.originalData.gridData.data, {
            filter: {
                logic: "or",
                filters: this.grigColumns.map((col) => {
                    return {
                        field: col.name,
                        operator: getColumnFilterOperator(col.type),
                        value: inputValue,
                    }
                })
            },
        }).data
    }

    public focusTo(element: HTMLInputElement): void {
        element.focus()
    }

    private onSettingsModalSave(settings: ITableLocalSettings): void {
        this.pageSize = settings.pagesize
        this.grigColumns.forEach(column => {
            column.hidden = settings.columns[column.name] ?? true
        })
        this.originalData.setPageSize(settings.pagesize)
    }

    private loadTableSettingsFromlocal(tableId: string, columns: IKendoColumn<any>[]): void {
        if (tableId?.length > 0 && Array.isArray(columns) && columns.length > 0) {
            const localSettings = this.localSettingsService.getLocalSettings(tableId, columns)
            this.pageSize = localSettings.pagesize
            this.grigColumns.forEach(column => {
                column.hidden = localSettings.columns[column.name] ?? true
            })
        }
    }

    @HostListener('window:resize')
    private setGridHeight(): void {

        if (this.disableHeightCalculate == 'modal') {
            setTimeout(() => {
                let container = this.hostElement.nativeElement.closest('.modal') as HTMLElement
                let height = (container?.getBoundingClientRect().height + container.getBoundingClientRect().top) - this.gridContainerElement.nativeElement.getBoundingClientRect().top
                height -= this.pagerElement.nativeElement.getBoundingClientRect().height
                height -= this.gridFooterElement.nativeElement.getBoundingClientRect().height
                height -= container.querySelector('.modal-footer')?.getBoundingClientRect().height ?? 0
                
                this.gridHeight = height - 16
            }, 1)
        }
        else {
            if (!this.disableHeightCalculate) {
                setTimeout(() => {
                    let height = window.innerHeight - this.gridContainerElement.nativeElement.getBoundingClientRect().top
                    height -= this.pagerElement.nativeElement.getBoundingClientRect().height
                    height -= (document.querySelector('app-footer')?.getBoundingClientRect().height ?? 0)
                    height -= this.gridFooterElement.nativeElement.getBoundingClientRect().height
                    
                    this.gridHeight = height - 16
                }, 1)
            }
        }
    }
}
