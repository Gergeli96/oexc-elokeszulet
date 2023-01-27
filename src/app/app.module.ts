import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { OecmTableComponent } from './oecm-table/oecm-table.component';
import { OecmHeaderComponent } from './oecm-header/oecm-header.component';

@NgModule({
    declarations: [
        AppComponent,
        OecmTableComponent,
        OecmHeaderComponent
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ExcelModule,
        GridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
