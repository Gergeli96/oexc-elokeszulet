import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IKendoColumn } from 'src/app/oecm-table/types';
import { OecmFormControl } from '../oecm-form.component';
import { OecmInputBase } from '../oecm-input-base';

@Component({
    selector: 'app-user-role-input',
    templateUrl: './user-role-input.component.html',
    styleUrls: ['./user-role-input.component.scss'],
	providers: [
		{
			useExisting: forwardRef(() => UserRoleInputComponent),
			provide: NG_VALUE_ACCESSOR,
			multi: true
		}
	]
})
export class UserRoleInputComponent extends OecmInputBase implements ControlValueAccessor {
    @ViewChild('ddc', {static: true}) dropDownContainer: ElementRef<HTMLDivElement>
    public formControl: OecmFormControl
    public columns: IKendoColumn<any>[] = [
        {title: 'Kód', name: 'code'},
        {title: 'Megnevezés', name: 'name'}
    ]
    public data = [
        {id: 1, code: 'OECM', name: 'oecm'},
        {id: 2, code: 'OECM 2', name: 'oecm 2'},
        {id: 3, code: 'OECM 3', name: 'oecm 3'}
    ]

    constructor(
		private controlDirective: FormGroupDirective
	) {
		super()
	}
	
	ngOnInit(): void {
		this.formControl = this.controlDirective.form.get(this.controlName) as OecmFormControl
	}


	@Input('formControlName') public controlName: string

    public toggle(): void {
        if (this.dropDownContainer.nativeElement.classList.contains('show')) {
            this.closeDropdown()
        }
        else {
            this.dropDownContainer.nativeElement.classList.add('show')
        }
    }

    public onInput(value: any): void {
        this.onChange(value)
        this.touched = true
    }

	public selectRow(row: any): void {
        this.value = `${row.code} (${row.name})`
		this.onChange(this.value )
        this.closeDropdown()
        this.touched = true
	}

    private closeDropdown(): void {
        this.dropDownContainer.nativeElement.classList.remove('show')
    }
}
