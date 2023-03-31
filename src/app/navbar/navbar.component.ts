import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface INavLinkGroup {
    name: string
    links: INavLink[]
}

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
    public links: INavLinkGroup[] = [
        {name: 'Adminisztrátor', links: [
            {name: 'Felhasználói szerep', href: ''},
            {name: 'Rendszerfunció', href: ''},
            {name: 'Felhasználó AD szerepkörei', href: ''},
            {name: 'Alkalmazási napló', href: ''},
            {name: 'Funkció futtatása', href: ''},
            {name: 'Dashboard', href: ''},
            {name: 'Kódtár', href: ''},
            {name: 'Archiválás', href: ''}
        ]},
        {name: 'Általános törzsadatok', links: [
            {name: 'Postahelyek listája', href: ''},
            {name: 'Közületel listája', href: ''},
            {name: 'Fiókbérlők listája', href: ''},
            {name: 'Szintek listája', href: ''}
        ]},
        {name: 'Irányítószám', links: [
            {name: 'Irányítószám jelleg', href: ''},
            {name: 'Irányítószám szabály jelleg', href: ''},
            {name: 'Irányítószám', href: ''},
            {name: 'Irányítószám excel riport', href: ''}
        ]},
        {name: 'Település', links: [
            {name: '', href: ''}
        ]},
        {name: 'Cím', links: [
            {name: '', href: ''}
        ]},
        {name: 'Riport', links: [
            {name: '', href: ''}
        ]},
        {name: 'Demo', links: [
            {name: 'Postahelyek listája', href: '/'},
            {name: 'Irányítószám form', href: '/createirszam'},
            {name: 'Felhasználói szerepek listája', href: '/userrolestable'},
        ]}
    ]

    constructor(
        private router: Router
    ) { }


    public navigate(navLink: INavLink): void {
        this.router.navigateByUrl(navLink.href)
    }
}
