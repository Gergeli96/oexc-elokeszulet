import { KendoColumnType } from "./types"

export function getColumnFilterOperator(type?: KendoColumnType): any {
    switch (type) {
        case KendoColumnType.number: return 'eq'
        case KendoColumnType.bool: return (item: any, filterValue: any) => {
            return typeof filterValue == 'boolean' ? item === filterValue : true
        }
    
        default: return 'contains'
    }
}
