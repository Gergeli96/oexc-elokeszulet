import { IrszamJellegFormComponent } from '../oecm-forms/irszam-jelleg-form/irszam-jelleg-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ITestData } from '../types/data-types';

@Component({
    selector: 'app-irszam-jelleg-edit-form',
    templateUrl: './irszam-jelleg-edit-form.component.html'
})
export class IrszamJellegEditFormComponent implements OnInit {
    @ViewChild(IrszamJellegFormComponent, {static: true}) form: IrszamJellegFormComponent
    private editMode: boolean = false
    public data: ITestData | null
    private id: number = 0

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        let id: string | null = this.route.snapshot.paramMap.get('id')
        this.editMode = (this.route.snapshot.data as any)?.edit ?? false

        if (this.editMode && id && !isNaN(id as any)) {
            this.id = parseInt(id)
            this.data = this.dataService.getRow(this.id)
        }
    }

    public save(): void {
        if (this.editMode) {
            this.dataService.edit(this.id, this.form.formGroup.value)
        }
        else {
            this.dataService.add(this.form.formGroup.value)
        }
    }
}
