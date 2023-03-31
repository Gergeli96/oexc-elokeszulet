import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';
import { OecmFormControl } from '../oecm-form.component';
import { OecmInputBase } from '../oecm-input-base';

@Component({
    selector: 'app-oecm-select',
    templateUrl: './oecm-select.component.html',
    styleUrls: ['./oecm-select.component.scss'],
	providers: [
		{
			useExisting: forwardRef(() => OecmSelectComponent),
			provide: NG_VALUE_ACCESSOR,
			multi: true
		}
	]
})
export class OecmSelectComponent extends OecmInputBase implements ControlValueAccessor {
    public formControl: OecmFormControl

    constructor(
		private controlDirective: FormGroupDirective
	) {
        super()
    }

    ngOnInit(): void {
		this.formControl = this.controlDirective.form.get(this.controlName) as OecmFormControl
    }

    
	@Input('formControlName') public controlName: string

	public onSelect(value: any): void {
		this.onChange(value)
		this.touched = true
	}
}
