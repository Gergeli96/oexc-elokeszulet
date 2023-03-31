import { OecmFormControl } from './oecm-form.component';
import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
    name: 'formGroupIter'
})
export class FormGroupIterPipe implements PipeTransform {

    public transform(controls: {[key: string]: AbstractControl}): OecmFormControl[] {
        return Object.values(controls) as OecmFormControl[]
    }

}
