export type ColumnVisibility = {[key: string]: boolean}

export interface ITableLocalSettings {
    columns: ColumnVisibility
    pagesize: number
}
