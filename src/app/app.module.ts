import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OecmFormsModule } from './oecm-forms/oecm-forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './modal/modal.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { IrszamJellegEditFormComponent } from './irszam-jelleg-edit-form/irszam-jelleg-edit-form.component';
import { IrszamJellegTableComponent } from './irszam-jelleg-table/irszam-jelleg-table.component';
import { UserRolesTableComponent } from './user-roles-table/user-roles-table.component';
import { OecmHeaderComponent } from './oecm-header/oecm-header.component';
import { OecmTableModule } from './oecm-table/oecm-table.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        IrszamJellegEditFormComponent,
        IrszamJellegTableComponent,
        UserRolesTableComponent,
        OecmHeaderComponent,
        NavbarComponent,
        FooterComponent,
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        OecmFormsModule,
        OecmTableModule,
        BrowserModule,
        ModalModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
