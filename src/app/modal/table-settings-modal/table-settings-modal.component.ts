import { TableLocalSettingsService } from 'src/app/services/table-local-settings.service';
import { ITableLocalSettings } from 'src/app/types/table-types';
import { IKendoColumn } from 'src/app/oecm-table/types';
import { Component } from '@angular/core';
import { ModalBase } from '../ModalBase';
import { ModalType } from '../types';

export interface ITableSettingsModalInitData {
    onSave: (settings: ITableLocalSettings) => void
    columns: IKendoColumn<any>[]
    tableId: string
}

interface ITableColumnSettings {
    visible: boolean
    name: string
}

@Component({
    selector: 'app-table-settings-modal',
    templateUrl: './table-settings-modal.component.html',
    styleUrls: ['./table-settings-modal.component.scss']
})
export class TableSettingsModalComponent extends ModalBase<ITableSettingsModalInitData> {
    public tableColumnSettings: ITableColumnSettings[] = []
    public modalType: ModalType = ModalType.success
    private intData?: ITableSettingsModalInitData
    public pagesize: number | string = 0
    private tableId: string = ''

    constructor(private localSettingsService: TableLocalSettingsService) {
        super()
    }

    public override init(data?: ITableSettingsModalInitData | undefined): void {
        this.tableId = data?.tableId ?? ''
        this.loadLocalSettings(this.tableId, data && Array.isArray(data?.columns) ? data.columns : [ ])
        this.intData = data
    }


    public save(): void {
        let settings: ITableLocalSettings = {
            pagesize: parseInt(this.pagesize as string),
            columns: this.tableColumnSettings.reduce((result, col) => {
                result[col.name] = col.visible
                return result
            }, { } as any)
        } 
        localStorage.setItem(this.tableId, JSON.stringify(settings))
        this.intData?.onSave(settings)
        this.localSettingsService.saveSetting(this.tableId, settings)
        this.close()
    }

    public setColumnVisibility(columnSetting: ITableColumnSettings, visible: boolean): void {
        columnSetting.visible = visible
    }

    private loadLocalSettings(tableId: string, columns: IKendoColumn<any>[]): void {
        const localSettings = this.localSettingsService.getLocalSettings(tableId, columns)
        this.pagesize = localSettings.pagesize
        this.tableColumnSettings = Object.keys(localSettings.columns)
            .map(key => {return {name: key, visible: localSettings.columns[key]}})
    }
}
