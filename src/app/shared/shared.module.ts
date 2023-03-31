import { OecmTableModule } from '../oecm-table/oecm-table.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserInheritedRolesTableComponent } from './user-inherited-roles-table/user-inherited-roles-table.component';


@NgModule({
    imports: [
        OecmTableModule,
        CommonModule
    ],
    declarations: [
        UserInheritedRolesTableComponent
    ],
    exports: [
        UserInheritedRolesTableComponent
    ]
})
export class SharedModule { }
