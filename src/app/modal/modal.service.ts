import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { ModalBase } from './ModalBase';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    constructor(
        private _resolver: ComponentFactoryResolver,
        private _appRef: ApplicationRef,
        private _injector: Injector
    ) { }

    public open<T>(component: any, initData?: T): void {
        const element = document.querySelector('#modal-anchor') as HTMLDivElement
        const componentRef = this._resolver.resolveComponentFactory(component).create(this._injector)
        this._appRef.attachView(componentRef.hostView)
        const componentInstance = componentRef.instance as ModalBase<T>

        componentInstance.close = () => componentRef.destroy()
        componentInstance?.init(initData)
        
        element.appendChild(
            (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
        )
    }


    // constructor(
    //     private viewContainerRef: ViewContainerRef
    // ) { }

    // public open<T>(component: any, initData?: T): void {
    //     const element = document.querySelector('#modal-anchor') as HTMLDivElement
    //     const componentRef = this.viewContainerRef.createComponent<ModalBase>(component)
    //     componentRef.instance.close = () => componentRef.destroy()

    //     element.appendChild(
    //         (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
    //     )
    // }
}
