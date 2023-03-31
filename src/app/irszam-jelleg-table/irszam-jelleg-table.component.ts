import { IIrszamModalInitData, IrszamModalComponent } from '../modal/irszam-modal/irszam-modal.component';
import { DeleteModalComponent, IDeleteModalInitData } from '../modal/delete-modal/delete-modal.component';
import { OecmTableComponent } from '../oecm-table/oecm-table.component';
import { IKendoColumn, KendoColumnType } from '../oecm-table/types';
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
        { title: 'Megnevezés', name: 'name', hidden: false, type: KendoColumnType.select },
        { title: 'Érvényesség', name: 'active', type: KendoColumnType.bool, hidden: false, render: (col, row) => row.active ? 'Érvényes' : 'Nem érvényes' },
        { title: 'SZEAZ', name: 'szeaz', hidden: false },
        { title: 'Település', name: 'settlement', hidden: false }
    ]
    public data: ITestData[]

    constructor(
        private modalService: ModalService,
        private dataService: DataService,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.fetchTableData()
    }

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

    public openDeleteModal(): void {
        const initValue: IDeleteModalInitData<void> = {callback: () => this.deleteRow()}
        this.modalService.open<IDeleteModalInitData<void>>(DeleteModalComponent, initValue)
    }

    private fetchTableData(): void {
        this.tableComponent.fetchData(() => this.dataService.fetchAllData())
            .then(response => this.data = response)
            .catch(error => { })
    }

    private deleteRow(): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.dataService.delete(this.tableComponent.activeRow?.id as number)
                this.fetchTableData()
                resolve()
            }, 1000)
        })
    }
}
