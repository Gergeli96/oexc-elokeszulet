import { getColumnFilterOperator } from "../helpers";
import { process } from "@progress/kendo-data-query";
import { Component, Input } from "@angular/core";
import { OecmGridData } from "../oecm-grid-data";
import { KendoColumn } from "../kendo-column";
import { KendoColumnType } from "../types";

@Component({
    selector: 'app-column-filter',
    templateUrl: './column-filter.component.html',
    styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent {
    public selectOptions: string[] = [ ]
    public columnTypes = KendoColumnType
    public filterValue: any = ''
    public data: OecmGridData

    @Input('column') public column: KendoColumn

    @Input('data') 
    public set dataSetter(value: OecmGridData) {
        this.data = value

        if (this.column.type == KendoColumnType.select) {
            this.selectOptions = Array.from(value.gridData.data
                .reduce((data: Set<string>, row) => data.add(row[this.column.name]), new Set<string>()))
                .sort()
        }
    }

    public filterToValue(value: any): void {
        this.data.gridViewData = process(this.data.gridData.data, {
            filter: {
                logic: 'or',
                filters: [
                    {
                        field: this.column.name as string,
                        operator: getColumnFilterOperator(this.column.type),
                        value: value
                    }
                ]
            }
        }).data
    }
}
