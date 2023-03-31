import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalSize, ModalType } from '../types';

@Component({
    selector: 'app-modal-scaffold',
    templateUrl: './modal-scaffold.component.html',
    styleUrls: ['./modal-scaffold.component.scss']
})
export class ModalScaffoldComponent {
    @Output('onClose') public onClose = new EventEmitter<void>()
    @Input('headertitle') public headertitle: string = ''
    @Input('type') public modaltype: ModalType
    @Input('size') public modalsyze: ModalSize
}
