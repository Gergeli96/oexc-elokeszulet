import { OecmControlType, OecmFormGroup } from 'src/app/oecm-form/oecm-form.component';
import { Component } from '@angular/core';
import { ModalBase } from '../ModalBase';
import { ModalType } from '../types';

export interface IUserInheritedRoleModalInitData { } 

@Component({
    selector: 'app-user-inherited-role-modal',
    templateUrl: './user-inherited-role-modal.component.html',
    styleUrls: ['./user-inherited-role-modal.component.scss']
})
export class UserInheritedRoleModalComponent extends ModalBase<IUserInheritedRoleModalInitData> {
    public form = new OecmFormGroup<any>([
        {label: 'Felhasználói szerep', name: 'userrole', type: OecmControlType.select},
        {label: 'Érvényesség kezdete', name: 'from'},
        {label: 'Érvényesség vége', name: 'to'} 
    ])
    public modalType = ModalType.success

    constructor() {
        super()
    }


    public save(): void {
        console.log(this.form.value)
    }
}
