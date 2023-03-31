import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IrszamJellegEditFormComponent } from './irszam-jelleg-edit-form/irszam-jelleg-edit-form.component';
import { IrszamJellegTableComponent } from './irszam-jelleg-table/irszam-jelleg-table.component';
import { UserRolesTableComponent } from './user-roles-table/user-roles-table.component';


const routes: Routes = [
    {
        path: '',
        component: IrszamJellegTableComponent
    },
    {
        path: 'createirszam',
        component: IrszamJellegEditFormComponent,
        data: {edit: false}
    },
    {
        path: 'editirszam/:id',
        component: IrszamJellegEditFormComponent,
        data: {edit: true}
    },
    {
        path: 'userrolestable',
        component: UserRolesTableComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
