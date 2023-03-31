import { ColumnVisibility, ITableLocalSettings } from '../types/table-types';
import { IKendoColumn } from '../oecm-table/types';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableLocalSettingsService {
    private localSettings: Map<string, ITableLocalSettings> = new Map<string, ITableLocalSettings>()
    public DEFAULT_PAGE_SIZE: number = 20

    constructor() { }


    public getLocalSettings(tableId: string, columns: IKendoColumn<any>[]): ITableLocalSettings {
        if (!this.localSettings.has(tableId)) {
            this.readSettingsFromLocalStorage(tableId, columns)
        }

        const localSettings = this.localSettings.get(tableId) as ITableLocalSettings
        const localSettingColumns = new Map(Object.entries(localSettings?.columns as ColumnVisibility))

        columns.forEach(column => {
            if (!localSettingColumns.has(column.name as string)) localSettings.columns[column.name as string] = true
        })

        return localSettings
    }

    public saveSetting(tableId: string, settings?: ITableLocalSettings): void {
        if (settings) {
            this.localSettings.set(tableId, settings)
        }

        if (this.localSettings.has(tableId)) {
            localStorage.setItem(tableId, JSON.stringify(this.localSettings.get(tableId)))
        }
    }

    private addColumnVisibilityToObject(obj: ColumnVisibility, column: IKendoColumn<any>): ColumnVisibility {
        obj[column.name as string] = true

        return obj
    }

    private readSettingsFromLocalStorage(tableId: string, columns: IKendoColumn<any>[]): void {
        const localSettings: any = new Object(JSON.parse(localStorage.getItem(tableId) || '{}'))
        if (!localSettings.hasOwnProperty('pagesize')) localSettings.pagesize = this.DEFAULT_PAGE_SIZE
        
        if (!localSettings.hasOwnProperty('columns')) {
            localSettings.columns = columns.reduce((result, column) => this.addColumnVisibilityToObject(result, column), { })
        }

        this.localSettings.set(tableId, localSettings)
    }
}
