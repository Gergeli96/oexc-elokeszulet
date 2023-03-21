import { Component } from '@angular/core';

interface INavLink {
    name: string
    href: string
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public links: INavLink[] = [
        {name: 'Adminisztrátor', href: ''},
        {name: 'Általános törzsadatok', href: ''},
        {name: 'Irányítószám', href: ''},
        {name: 'Település', href: ''},
        {name: 'Cím', href: ''},
        {name: 'Riport', href: ''}
    ]

    constructor( ) { }


    public toggleSubLinks(element: HTMLElement): void {
        if (element.classList.contains('open')) {
            element.classList.remove('open')
        } else {
            element.classList.add('open')
        }
    }

    public close(element: HTMLElement): void {
        element.classList.remove('open')
    }
}
