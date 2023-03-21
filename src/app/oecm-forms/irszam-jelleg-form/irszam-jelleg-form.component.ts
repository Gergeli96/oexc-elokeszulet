import { OecmFormGroup } from 'src/app/helpers/OecmFormGroup';
import { ITestData } from 'src/app/types/data-types';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-irszam-jelleg-form',
    templateUrl: './irszam-jelleg-form.component.html',
    styleUrls: ['./irszam-jelleg-form.component.scss']
})
export class IrszamJellegFormComponent {
    public formGroup = new OecmFormGroup<ITestData>([
        {name: 'code'},
        {name: 'name'},
        {name: 'validity', type: 'bool'}
    ])

    constructor() { }

    
    @Input('data')
    public set editData(value: ITestData | null) {
        if (value) {
            this.formGroup.setValue(value)
        }
    }

    public save(): void {
        console.log(this.formGroup.value)
    }
}
