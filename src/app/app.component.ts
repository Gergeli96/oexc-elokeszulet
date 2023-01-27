import { IKendoColumn } from './oecm-table/oecm-table.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public columns: IKendoColumn[] = [
        {title: 'Kód', name: 'code', hidden: false},
        {title: 'Megnevezés', name: 'name', hidden: false},
        {title: 'Érvényesség', name: 'validity', type: 'bool', hidden: false},
    ]
    public data = new Array(20).fill(0).map((_, i) => {
        return {
            id: i + 1,
            code: (Math.random() + 1).toString(36).substring(7).toUpperCase(),
            name: (Math.random() + 1).toString(36).substring(7),
            validity: Math.round(Math.random() * 10) % 2 == 0
        }
    })
}
