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

    public open<T>(component: any, initData?: T): Promise<void> {
        return new Promise((resolve) => {
            const element = document.querySelector('#modal-anchor') as HTMLDivElement
            const componentRef = this._resolver.resolveComponentFactory(component).create(this._injector)
            this._appRef.attachView(componentRef.hostView)
            const componentInstance = componentRef.instance as ModalBase<T>
            
            const modalContainer = document.createElement('div')
            modalContainer.classList.add('modal-container')
            
            componentInstance.close = () => {
                componentRef.destroy()
                modalContainer.remove()
                resolve()
            }
            componentInstance?.init(initData)
            
            element.appendChild(modalContainer).appendChild(
                (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
            )
        })
    }
}
