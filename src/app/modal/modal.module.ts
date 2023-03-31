import { OecmFormsModule } from '../oecm-forms/oecm-forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OecmFormModule } from '../oecm-form/oecm-form.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserInheritedRoleModalComponent } from './user-inherited-role-modal/user-inherited-role-modal.component';
import { TableSettingsModalComponent } from './table-settings-modal/table-settings-modal.component';
import { UserRoleModalComponent } from './user-role-modal/user-role-modal.component';
import { ModalScaffoldComponent } from './modal-scaffold/modal-scaffold.component';
import { IrszamModalComponent } from './irszam-modal/irszam-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        OecmFormsModule,
        OecmFormModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        UserInheritedRoleModalComponent,
        TableSettingsModalComponent,
        ModalScaffoldComponent,
        UserRoleModalComponent,
        IrszamModalComponent,
        DeleteModalComponent
    ]
})
export class ModalModule { }
