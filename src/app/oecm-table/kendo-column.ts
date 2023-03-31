import { IKendoColumn, IKendoTableLocalConfig, KendoColumnType } from "./types"

export class KendoColumn {
    render?: (column: IKendoColumn<any>, row: any) => string
    public filterType: 'boolean' | 'numeric' | 'text' | 'date'
    public type: KendoColumnType
    public hidden: boolean
    public title: string
    public name: string

    constructor(config: IKendoColumn<any>, localConfig: IKendoTableLocalConfig) {
        this.title = config.title
        this.name = config.name as string
        this.hidden = localConfig[config.name as string] ?? config.hidden ?? false
        this.type = config.type ?? KendoColumnType.string
        this.render = config.render
        this.filterType = this.getFilterType(config.type)
    }

    private getFilterType(coltype?: KendoColumnType): 'boolean' | 'numeric' | 'text' | 'date' {
        switch (coltype) {
            case KendoColumnType.bool: return 'boolean'
            case KendoColumnType.select: return 'boolean'
                
            default: return 'text'
        }
    }
}
