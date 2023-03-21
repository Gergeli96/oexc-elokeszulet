import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IrszamJellegFormComponent } from './irszam-jelleg-form/irszam-jelleg-form.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        IrszamJellegFormComponent
    ],
    exports: [
        IrszamJellegFormComponent
    ]
})
export class OecmFormsModule { }
