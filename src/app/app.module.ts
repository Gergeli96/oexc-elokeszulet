import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OecmFormsModule } from './oecm-forms/oecm-forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './modal/modal.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { IrszamJellegEditFormComponent } from './irszam-jelleg-edit-form/irszam-jelleg-edit-form.component';
import { IrszamJellegTableComponent } from './irszam-jelleg-table/irszam-jelleg-table.component';
import { OecmHeaderComponent } from './oecm-header/oecm-header.component';
import { OecmTableComponent } from './oecm-table/oecm-table.component';
import { OecmFormComponent } from './oecm-form/oecm-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        IrszamJellegEditFormComponent,
        IrszamJellegTableComponent,
        OecmHeaderComponent,
        OecmTableComponent,
        OecmFormComponent,
        NavbarComponent,
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        OecmFormsModule,
        BrowserModule,
        ModalModule,
        FormsModule,
        ExcelModule,
        GridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
