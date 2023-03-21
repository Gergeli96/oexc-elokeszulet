import { OecmFormsModule } from '../oecm-forms/oecm-forms.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalScaffoldComponent } from './modal-scaffold/modal-scaffold.component';
import { IrszamModalComponent } from './irszam-modal/irszam-modal.component';


@NgModule({
    imports: [
        OecmFormsModule,
        CommonModule
    ],
    declarations: [
        ModalScaffoldComponent,
        IrszamModalComponent
    ]
})
export class ModalModule { }
