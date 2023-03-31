import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OecmFormModule } from '../oecm-form/oecm-form.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserBaseDataFormComponent } from './user-base-data-form/user-base-data-form.component';
import { IrszamJellegFormComponent } from './irszam-jelleg-form/irszam-jelleg-form.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        OecmFormModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        IrszamJellegFormComponent,
        UserBaseDataFormComponent
    ],
    exports: [
        UserBaseDataFormComponent,
        IrszamJellegFormComponent
    ]
})
export class OecmFormsModule { }
