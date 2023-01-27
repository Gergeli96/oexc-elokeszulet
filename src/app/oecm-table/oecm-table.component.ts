import { CompositeFilterDescriptor, filterBy, process } from "@progress/kendo-data-query"
import { FetchDataCallback, GridComponent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExcelExportData } from "@progress/kendo-angular-excel-export";

export interface IKendoColumn {
    name: string
    title: string
    type?: 'string' | 'number' | 'bool'
    hidden: boolean
}

@Component({
    selector: 'app-oecm-table',
    templateUrl: './oecm-table.component.html',
    styleUrls: ['./oecm-table.component.scss']
})
export class OecmTableComponent {
    @ViewChild(GridComponent, {static: true}) gridComponent: GridComponent
    public grigColumns: IKendoColumn[] = []
    public kendoGridSelectBy: string = 'id'
    public filterable: boolean = false
    public originalData: any[] = [ ]
    public gridViewData: any[] = [ ]
    public skip: number = 0
    public pageSize = 10
    @Input('tablename') tableName: string = ''

    constructor() { }

    @Input('columns')
    public set tableColumns(value: IKendoColumn[]) {
        this.grigColumns = value
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

    public toExcel(): void {
        this.gridComponent.saveAsExcel()
    }

    public fetchExcelData = () => {
        return {data: this.originalData}
    }

    public filterToggle(): void {
        this.filterable = !this.filterable
    }

    public toggleColumn(): void {
        this.grigColumns[2].hidden = !this.grigColumns[2].hidden
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

    private getFilterOperator(type?: string): string {
        switch (type) {
            case 'number': return 'eq'
            case 'bool': return 'eq'
        
            default: return 'contains'
        }
    }
}
