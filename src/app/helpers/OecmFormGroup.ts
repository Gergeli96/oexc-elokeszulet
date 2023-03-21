import { FormControl, FormGroup } from "@angular/forms";

export interface IOecmFormControl<T> {
    name: keyof T
    type?: 'string' | 'number' | 'bool'
}

export class OecmFormGroup<T> extends FormGroup {
    public override controls: {[key: string]: OecmFormControl}

    constructor(controls: IOecmFormControl<T>[]) {
        super(controls.reduce((controls, config) => {
            controls[config.name as string] = new OecmFormControl(config)
            return controls
        }, { } as any))
    }


    public override setValue(value: any, options?: {onlySelf?: boolean, emitEvent?: boolean}): void {
        super.setValue(
            Object.values(this.controls)
                .reduce((formValue, control) => {
                    formValue[control.name] = (value as any)[control.name]
                    return formValue
                }, { } as any),
        options)
    }
}

export class OecmFormControl extends FormControl {
    public name: string

    constructor(config: IOecmFormControl<any>) {
        super()
        this.name = config.name as string
    }
}
