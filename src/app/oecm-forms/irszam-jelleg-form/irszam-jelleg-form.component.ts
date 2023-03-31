import { IOecmFormControl, OecmFormComponent } from 'src/app/oecm-form/oecm-form.component';
import { Component, Input, ViewChild } from '@angular/core';
import { required } from 'src/app/oecm-form/validators';
import { ITestData } from 'src/app/types/data-types';

@Component({
    selector: 'app-irszam-jelleg-form',
    templateUrl: './irszam-jelleg-form.component.html',
    styleUrls: ['./irszam-jelleg-form.component.scss']
})
export class IrszamJellegFormComponent {
    @ViewChild(OecmFormComponent, {static: true}) form: OecmFormComponent<ITestData>
    public controls: IOecmFormControl<ITestData>[] = [
        {label: 'Név', name: 'name', validators: [required]},
        {label: 'Település', name: 'settlement'},
        {label: 'Irszám', name: 'zipcode'}
    ]
    
    @Input('data')
    public set editData(value: ITestData | null) {
        if (value) this.form.setValue(value)
    }

    public log(): void {
        console.log(this.form.value)
    }
}
