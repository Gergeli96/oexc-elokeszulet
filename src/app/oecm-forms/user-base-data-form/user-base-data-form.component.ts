import { IOecmFormControl, ISelectOption, OecmControlType, OecmFormComponent } from 'src/app/oecm-form/oecm-form.component';
import { DataService } from 'src/app/services/data.service';
import { Component, Input, ViewChild } from '@angular/core';
import { required } from 'src/app/oecm-form/validators';
import { IUserRole } from 'src/app/types/data-types';

@Component({
    selector: 'app-user-base-data-form',
    templateUrl: './user-base-data-form.component.html',
    styleUrls: ['./user-base-data-form.component.scss']
})
export class UserBaseDataFormComponent {
    @ViewChild(OecmFormComponent, {static: true}) form: OecmFormComponent<IUserRole>
    public controls: IOecmFormControl<IUserRole>[] = [
        {label: 'Kód', name: 'code', validators: [required]},
        {label: 'Megnevezés', name: 'name', value: 'Teszt érték!'},
        {label: 'Adatgazda szervezet', name: 'dataownerid', type: OecmControlType.select, options: this.getDataOwnerOptions()},
        {label: 'Státusz', name: 'status', type: OecmControlType.select, options: this.getStatusOptions()},
        {label: 'Örökölhető', name: 'inheritable', type: OecmControlType.checkbox}
    ]

    constructor(
        private dataService: DataService
    ) { }


    @Input('modalCloseCallback') public modalCloseCallback: () => void

    public save(): void {
        this.form.updateValueAndValidity({emitEvent: false})
        if (this.form.valid) {
            this.dataService.addRole(this.form.value)
            this?.modalCloseCallback()
        }
    }

    private getDataOwnerOptions(): ISelectOption[] {
        return Array.from(this.dataService.groups.keys())
            .reduce((options, ownerId) => {
                const owner = this.dataService.owners.get(ownerId) as any
                return [...options, {name: owner.name, value: owner.id}]
            }, [{name: 'Válasszon szervezetet', value: ''}] as ISelectOption[])
    }

    private getStatusOptions(): ISelectOption[] {
        return [
            {name: 'Aktív', value: true},
            {name: 'Nem aktív', value: false},
            {name: 'Törölt', value: undefined}
        ]
    }
}
