import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { OecmFormControl } from '../oecm-form.component';
import { OecmInputBase } from '../oecm-input-base';

export type OecmInputType =  'text' | 'number' | 'checkbox'

@Component({
	selector: 'oecm-input',
	templateUrl: './oecm-input.component.html',
	styleUrls: ['./oecm-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: forwardRef(() => OecmInputComponent)
		}
	]
})
export class OecmInputComponent extends OecmInputBase implements ControlValueAccessor {
	@ViewChild('inp', {static: true}) public inputElement: ElementRef<HTMLInputElement>
    public formControl: OecmFormControl
	
	constructor(
		private controlDirective: FormGroupDirective
	) {
			super()
	}
	
	public ngOnInit(): void {
		this.formControl = this.controlDirective.form.get(this.controlName) as OecmFormControl
	}

	
    @Input('formControlName') public controlName: string

	@Input('type') public type: OecmInputType

	public onModelValueChange(value: any): void {
		this.onChange(this.type == 'checkbox' ? this.inputElement.nativeElement.checked : value)
		this.touched = true
	}
}
