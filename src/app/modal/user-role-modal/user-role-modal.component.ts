import { Component, ElementRef } from '@angular/core';
import { ModalBase } from '../ModalBase';
import { ModalSize, ModalType } from '../types';

export interface IUserRoleModalInitData { }

enum UserRoleTabs {
    allowedFunctions,
    inheritedRoles,
    systemSettings,
    specialRoles,
    properties,
    basedata,
    uiRules
}

@Component({
    selector: 'app-user-role-modal',
    templateUrl: './user-role-modal.component.html',
    styleUrls: ['./user-role-modal.component.scss']
})
export class UserRoleModalComponent extends ModalBase<IUserRoleModalInitData> {
    public activeTab: UserRoleTabs = UserRoleTabs.basedata
    public modalType: ModalType = ModalType.success
    public modalSize: ModalSize = ModalSize.fill
    public tabNames = UserRoleTabs

    constructor(private hostElement: ElementRef<HTMLElement>) {
        super()
    }
    
    public ngAfterViewInit(): void {
        this.setActiveTab(UserRoleTabs.basedata)
    }


    public setActiveTab(tabName: UserRoleTabs): void {
        this.hostElement.nativeElement.querySelector('.tab-names-container button.active')?.classList.remove('active')
        this.hostElement.nativeElement.querySelector(`.tab-names-container button[name="${tabName}"]`)?.classList.add('active')
        this.activeTab = tabName
    }

    public save(): void {

    }
}
