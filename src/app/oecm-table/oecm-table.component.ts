import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { process } from "@progress/kendo-data-query";

export enum KendoColumnType {
    string = 'string',
    number = 'number',
    bool = 'bool'
}

export interface IKendoColumn {
    name: string
    title: string
    type?: KendoColumnType
    hidden: boolean
}

interface IKendoTableLocalConfig {
    [columnName: string]: boolean | any
    PAGESIZE?: number
}

class KendoColumn {
    public type: KendoColumnType
    public hidden: boolean
    public title: string
    public name: string

    constructor(config: IKendoColumn, localConfig: IKendoTableLocalConfig) {
        this.title = config.title
        this.name = config.name
        this.hidden = localConfig[config.name] ?? config.hidden ?? false
        this.type = config.type ?? KendoColumnType.string
    }
}

@Component({
    selector: 'app-oecm-table',
    templateUrl: './oecm-table.component.html',
    styleUrls: ['./oecm-table.component.scss']
})
export class OecmTableComponent {
    @ViewChild(GridComponent, {static: true}) gridComponent: GridComponent
    public settingsModalFields: {name: string, value: boolean}[] = [ ]
    private localConfig: IKendoTableLocalConfig = { }
    public settingsModalIsVisible: boolean = false
    @Input('tablename') tableName: string = ''
    public grigColumns: KendoColumn[] = [ ]
    public kendoGridSelectBy: string = 'id'
    public settingsPageSize: number = 8
    public filterable: boolean = false
    public originalData: any[] = [ ]
    public gridViewData: any[] = [ ]
    private tableId: string = ''
    public pageSize: number = 8
    public skip: number = 0

    constructor() { }

    ngOnDestroy(): void {
        this.onAppUnload()
    }

    @HostListener('window:unload')
    public onAppUnload(): void {
        if (this.tableId) {
            this.localConfig['PAGESIZE'] = this.pageSize
            this.grigColumns.forEach(c => this.localConfig[c.name] = c.hidden)
            localStorage.setItem(this.tableId, JSON.stringify(this.localConfig))
        }
    }


    @Input('columns')
    public set tableColumns(value: IKendoColumn[]) {
        this.grigColumns = value.map(x => new KendoColumn(x, this.localConfig))
    }

    @Input('data')
    public set tableData(value: any[]) {
        this.gridViewData = value
        this.originalData = value
    }

    @Input('kendoGridSelectBy')
    public set setKendoGridSelectBy(value: string) {
        this.kendoGridSelectBy = value
    }

    @Input('tableid')
    public set setTableId(value: string) {
        this.tableId = value
        this.localConfig = JSON.parse(localStorage.getItem(this.tableId) || '{}')
        if (new Object(this.localConfig).hasOwnProperty('PAGESIZE')) {
            this.pageSize = this.localConfig.PAGESIZE ?? 8
        }
        else {
            this.pageSize = 8
        }

        this.localConfig.PAGESIZE = this.pageSize

    }

    public toExcel(): void {
        this.gridComponent.saveAsExcel()
    }

    public fetchExcelData = () => {
        return {data: this.originalData}
    }

    public filterToggle(): void {
        this.filterable = !this.filterable
    }

    public showSettingsModal(): void {
        this.settingsModalFields = this.grigColumns.map(x => {
            return {name: x.name, value: !x.hidden}
        })
        this.settingsPageSize = this.pageSize

        this.settingsModalIsVisible = true
    }

    public hideSettingsModal(withSave: boolean): void {
        this.settingsModalIsVisible = false

        if (withSave) {
            this.pageSize = this.settingsPageSize

            let settingsMap: Map<string, boolean> = new Map(this.settingsModalFields.map(s => [s.name, s.value]))
            this.grigColumns.forEach(c => {
                c.hidden = !settingsMap.get(c.name) ?? false
            })
        }
    }

    public onFilter(event: Event): void {
        let inputValue = (event.target as HTMLInputElement).value
        this.gridViewData = process(this.originalData, {
            filter: {
                logic: "or",
                filters: this.grigColumns.map((col) => {
                    return {
                        field: col.name,
                        operator: this.getFilterOperator(col.type),
                        value: inputValue,
                    }
                })
            },
        }).data
    }

    private getFilterOperator(type?: KendoColumnType): string {
        switch (type) {
            case KendoColumnType.number: return 'eq'
            case KendoColumnType.bool: return 'eq'
        
            default: return 'contains'
        }
    }
}
