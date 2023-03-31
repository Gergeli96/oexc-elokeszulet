import { IUserRoleModalInitData, UserRoleModalComponent } from '../modal/user-role-modal/user-role-modal.component';
import { DeleteModalComponent, IDeleteModalInitData } from '../modal/delete-modal/delete-modal.component';
import { OecmTableComponent } from '../oecm-table/oecm-table.component';
import { IKendoColumn, KendoColumnType } from '../oecm-table/types';
import { IDetailedUserRole } from '../types/data-types';
import { DataService } from '../services/data.service';
import { ModalService } from '../modal/modal.service';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-user-roles-table',
    templateUrl: './user-roles-table.component.html',
    styleUrls: ['./user-roles-table.component.scss']
})
export class UserRolesTableComponent {
    @ViewChild(OecmTableComponent, {static: true}) tableComponent: OecmTableComponent<IDetailedUserRole>
    public columns: IKendoColumn<IDetailedUserRole>[] = [
        { title: 'Kód', name: 'code' },
        { title: 'Megnevezés', name: 'name' },
        { title: 'Státusz', name: 'status', type: KendoColumnType.bool, render: (col, row) => row.status ? 'Aktív' : 'Inaktív' },
        { title: 'Örökölhető', name: 'inheritable', type: KendoColumnType.bool, render: (col, row) => row.status ? 'Örökölhető' : 'Nem örökölhető' },
        { title: 'Csoport', name: 'groupid', render: (col, row) => row.group?.name ?? '' },
        { title: 'Adatgazda szervezet', name: 'dataownerid', render: (col, row) => row.dataowner?.name ?? '' }
    ]

    constructor(
        private modalService: ModalService,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.fetchTableData()
    }


    public openModal(): void {
        const initData: IUserRoleModalInitData = { }
        this.modalService.open<IUserRoleModalInitData>(UserRoleModalComponent, initData)
            .then(() => this.fetchTableData())
    }

    public openDeleteModal(): void {
        const modalInit: IDeleteModalInitData<void> = {callback: () => this.deleteUserRole()}
        this.modalService.open<IDeleteModalInitData<void>>(DeleteModalComponent, modalInit)
    }

    private fetchTableData(): void {
        this.tableComponent.fetchData(() =>this.dataService.fetchRoles())
    }

    private deleteUserRole(): Promise<void> {
        return new Promise(resolve => {
            this.dataService.deleteUserRole(this.tableComponent.activeRow?.id as number)
            this.fetchTableData()
            resolve()
        })
    }
}
