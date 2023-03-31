import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
    name: 'controlErrorsIter'
})
export class ControlErrorsIterPipe implements PipeTransform {

    public transform(errors: ValidationErrors | null, touched: boolean): string[] {
        return touched ? Object.values(errors ?? { }) : [ ]
    }

}
