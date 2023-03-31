import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ColumnFilterComponent } from './column-filter/column-filter.component';
import { OecmTableComponent } from './oecm-table.component';

import { RendererPipe } from './renderer.pipe';


@NgModule({
    imports: [
        CommonModule,
        ExcelModule,
        FormsModule,
        GridModule
    ],
    declarations: [
        ColumnFilterComponent,
        OecmTableComponent,
        RendererPipe
    ],
    exports: [
        OecmTableComponent
    ]
})
export class OecmTableModule { }
