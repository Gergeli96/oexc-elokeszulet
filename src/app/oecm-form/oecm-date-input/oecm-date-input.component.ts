import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';
import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { OecmFormControl } from '../oecm-form.component';
import { OecmDate } from 'src/app/helpers/date-helper';
import { OecmInputBase } from '../oecm-input-base';

@Component({
    selector: 'app-oecm-date-input',
    templateUrl: './oecm-date-input.component.html',
    styleUrls: ['./oecm-date-input.component.scss'],
	providers: [
		{
			useExisting: forwardRef(() => OecmDateInputComponent),
			provide: NG_VALUE_ACCESSOR,
			multi: true
		}
	]
})
export class OecmDateInputComponent extends OecmInputBase implements ControlValueAccessor {
    public kendoDatePickerValue: Date = new Date()
    public formControl: OecmFormControl
    public modelValue: string = ''

    constructor(
        private controlDirective: FormGroupDirective
    ) {
        super()
    }

    ngOnInit(): void {
        this.formControl = this.controlDirective.form.get(this.controlName) as OecmFormControl
    }


    @Input('formControlName') public controlName: string

    public onInput(value: string): void {
        value = value.replace(/\./g, '-')
        this.kendoDatePickerValue = new Date(value)
        this.onChange(value)
        this.touched = true

    }

    public onDatePick(value: Date): void {
        const dateValue: string = OecmDate.toLongDate(value)
        this.modelValue = dateValue.replace(/-/g, '.')
        this.onChange(dateValue)
        this.touched = true
    }
}
