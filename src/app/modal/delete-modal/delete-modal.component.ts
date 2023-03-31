import { Component } from '@angular/core';
import { ModalBase } from '../ModalBase';
import { ModalType } from '../types';

export interface IDeleteModalInitData<T> {
    callback: () => Promise<T>
}

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent extends ModalBase<IDeleteModalInitData<any>> {
    private initData: IDeleteModalInitData<any> | undefined
    public modalType: ModalType = ModalType.warning

    constructor() {
        super()
    }

    public override init(data?: IDeleteModalInitData<any> | undefined): void {
        this.initData = data
    }


    public save(): void {
        this.initData?.callback()
            .then(response => this.close())
            .catch(error => { })
    }
}
