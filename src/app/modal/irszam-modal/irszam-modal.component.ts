import { IrszamJellegFormComponent } from 'src/app/oecm-forms/irszam-jelleg-form/irszam-jelleg-form.component';
import { DataService } from 'src/app/services/data.service';
import { Component, ViewChild } from '@angular/core';
import { ITestData } from 'src/app/types/data-types';
import { ModalBase } from '../ModalBase';

export interface IIrszamModalInitData {
	callback: () => void
	data?: ITestData | undefined | null
}

@Component({
	selector: 'app-irszam-modal',
	templateUrl: './irszam-modal.component.html',
	styleUrls: ['./irszam-modal.component.scss']
})
export class IrszamModalComponent extends ModalBase<IIrszamModalInitData> {
	@ViewChild(IrszamJellegFormComponent, {static: true}) formComponent: IrszamJellegFormComponent
	private initValue: IIrszamModalInitData | undefined
	private editMode: boolean = false
	public editData: ITestData

	constructor(
		private dataService: DataService
	) {
		super()
	}

	public override init(initValue?: IIrszamModalInitData): void {
		this.initValue = initValue
		if (initValue?.data) {
			this.editData = initValue.data
			this.editMode = true
		}
	}


	public save(): void {
		if (this.editMode) {
			this.dataService.edit(this.editData.id, this.formComponent.formGroup.value)
		}
		else {
			this.dataService.add(this.formComponent.formGroup.value)
		}
		this.initValue?.callback()
		this.close()
	}
}
