import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OecmTableModule } from '../oecm-table/oecm-table.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoleInputComponent } from './user-role-input/user-role-input.component';
import { OecmDateInputComponent } from './oecm-date-input/oecm-date-input.component';
import { OecmInputComponent } from './oecm-input/oecm-input.component';
import { OecmFormComponent } from './oecm-form.component';

import { ControlErrorsIterPipe } from './control-errors-iter.pipe';
import { FormGroupIterPipe } from './form-group-iter.pipe';
import { OecmSelectComponent } from './oecm-select/oecm-select.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        DateInputsModule,
        OecmTableModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        UserRoleInputComponent,
        OecmDateInputComponent,
        ControlErrorsIterPipe,
        OecmInputComponent,
        OecmFormComponent,
        FormGroupIterPipe,
        OecmSelectComponent
    ],
    exports: [
        UserRoleInputComponent,
        OecmDateInputComponent,
        OecmInputComponent,
        OecmFormComponent
    ]
})
export class OecmFormModule { }
