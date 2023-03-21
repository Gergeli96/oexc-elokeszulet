import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IrszamJellegEditFormComponent } from './irszam-jelleg-edit-form/irszam-jelleg-edit-form.component';
import { IrszamJellegFormComponent } from './oecm-forms/irszam-jelleg-form/irszam-jelleg-form.component';
import { IrszamJellegTableComponent } from './irszam-jelleg-table/irszam-jelleg-table.component';


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
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
