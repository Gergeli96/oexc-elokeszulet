export enum KendoColumnType {
    string = 'string',
    number = 'number',
    select = 'select',
    bool = 'bool'
}

export interface IKendoColumn<T> {
    render?: (column: IKendoColumn<T>, row: T) => string
    type?: KendoColumnType
    hidden?: boolean
    name: keyof T
    title: string
}

export interface IKendoTableLocalConfig {
    [columnName: string]: boolean | any
    PAGESIZE?: number
}
