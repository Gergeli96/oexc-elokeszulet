import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { OecmInputType } from './oecm-input/oecm-input.component';
import { Component, Input } from '@angular/core';

export enum OecmControlType {
    textarea = 'textarea',
    checkbox = 'checkbox',
    select = 'select',
    text = 'text',
    date = 'date'
}

export interface ISelectOption {
    name: string
    value: any
}

export interface IOecmFormControl<T> {
    validators?: ValidatorFn[]
    options?: ISelectOption[]
    type?: OecmControlType
    label: string
    name: keyof T
    value?: any
}

export class OecmFormControl extends FormControl {
    public options: ISelectOption[] = [ ]
    public typename: OecmInputType
    public type: OecmControlType
    public label: string = ''
    public name: string = ''

    constructor(config: IOecmFormControl<any>) {
        super()
        this.options = Array.isArray(config.options) ? config.options : [ ]
        this.type = config.type ?? OecmControlType.text
        this.name = config.name as string
        this.label = config.label
        if (config.value) {
            this.setValue(config.value, {emitEvent: false})
        }
        if (!config.value && config.type == OecmControlType.select && this.options.length > 0) {
            this.setValue(this.options[0].value, {emitEvent: false})
        }

        if (config.type) {
            this.type = config.type
            this.typename = config.type as unknown as OecmInputType
        }
        else {
            this.type = OecmControlType.text
            this.typename = 'text'
        }
        if (Array.isArray(config.validators)) {
            this.setValidators(config.validators)
        }
    }
}

export class OecmFormGroup<T> extends FormGroup {

    constructor(controls: IOecmFormControl<T>[]) {
        super({ })
        controls.forEach(control => this._addControl(control))
        this.markAsUntouched()
    }

    protected _addControl(control: IOecmFormControl<T>): void {
        super.addControl(control.name as string, new OecmFormControl(control), {emitEvent: false})
    }
}

@Component({
    selector: 'app-oecm-form',
    templateUrl: './oecm-form.component.html',
    styleUrls: ['./oecm-form.component.scss']
})
export class OecmFormComponent<T> extends OecmFormGroup<T> {
    public controlTypes = OecmControlType

    constructor() {
        super([])
    }


    @Input('controls')
    public set setControls(controls: IOecmFormControl<T>[]) {
        controls.forEach(control => this._addControl(control))
    }
}
