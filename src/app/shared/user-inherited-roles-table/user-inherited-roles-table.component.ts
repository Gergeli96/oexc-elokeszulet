import { IUserInheritedRoleModalInitData, UserInheritedRoleModalComponent } from 'src/app/modal/user-inherited-role-modal/user-inherited-role-modal.component';
import { ModalService } from 'src/app/modal/modal.service';
import { IKendoColumn } from 'src/app/oecm-table/types';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-inherited-roles-table',
    templateUrl: './user-inherited-roles-table.component.html',
    styleUrls: ['./user-inherited-roles-table.component.scss']
})
export class UserInheritedRolesTableComponent {
    public columns: IKendoColumn<any>[] = [
        {title: 'Felhasználói szerep', name: 'userrole'},
        {title: 'Érvényesség kezdete', name: 'from'},
        {title: 'Érvényesség vége', name: 'to'}
    ]

    constructor(
        private modalService: ModalService
    ) { }


    public openModal(): void {
        const initData: IUserInheritedRoleModalInitData = { }
        this.modalService.open<IUserInheritedRoleModalInitData>(UserInheritedRoleModalComponent, initData)
    }
}
