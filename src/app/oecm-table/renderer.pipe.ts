import { Pipe, PipeTransform } from '@angular/core';
import { KendoColumn } from './kendo-column';

@Pipe({
    name: 'renderer'
})
export class RendererPipe implements PipeTransform {

    public transform(column: KendoColumn, row: any): string {
        return column.render ? column.render(column, row) : row[column.name]
    }

}
