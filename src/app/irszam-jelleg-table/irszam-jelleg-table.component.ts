import { IIrszamModalInitData, IrszamModalComponent } from '../modal/irszam-modal/irszam-modal.component';
import { IKendoColumn, KendoColumnType, OecmTableComponent } from '../oecm-table/oecm-table.component';
import { DataService } from '../services/data.service';
import { ModalService } from '../modal/modal.service';
import { Component, ViewChild } from '@angular/core';
import { ITestData } from '../types/data-types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-irszam-jelleg-table',
    templateUrl: './irszam-jelleg-table.component.html',
    styleUrls: ['./irszam-jelleg-table.component.scss']
})
export class IrszamJellegTableComponent {
    @ViewChild(OecmTableComponent, {static: true}) tableComponent: OecmTableComponent<ITestData>
    public columns: IKendoColumn<ITestData>[] = [
        { title: 'Kód', name: 'code', hidden: false },
        { title: 'Megnevezés', name: 'name', hidden: false },
        { title: 'Érvényesség', name: 'validity', type: KendoColumnType.bool, hidden: false },
    ]
    public data: ITestData[] = this.dataService.geAlltData()

    constructor(
        private modalService: ModalService,
        private dataService: DataService,
        private router: Router
    ) { }

    public editInNewPage(): void {
        if (this.tableComponent.activeRow) {
            this.router.navigateByUrl(`/editirszam/${this.tableComponent.activeRow.id}`)
        }
    }

    public openModal(isEdit: boolean): void {
        const initValue: IIrszamModalInitData = {data: this.tableComponent.activeRow, callback: () => this.data = this.dataService.geAlltData()}
        if (isEdit) {
            if (this.tableComponent.activeRow) {
                this.modalService.open<IIrszamModalInitData>(IrszamModalComponent, initValue)
            }
        }
        else {
            initValue.data = null
            this.modalService.open<IIrszamModalInitData>(IrszamModalComponent, initValue)
        }
        
    }
}
