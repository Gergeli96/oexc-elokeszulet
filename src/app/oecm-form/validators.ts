import { AbstractControl, ValidationErrors } from "@angular/forms";

export function required(control: AbstractControl<any, any>): ValidationErrors | null {
    return control.value == undefined || control.value == '' ? {required: 'Kötelező mező'} : null
}
