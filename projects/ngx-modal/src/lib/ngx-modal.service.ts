import { NgxModalComponent } from './ngx-modal.component';
import { Injectable, ComponentRef, ApplicationRef, Injector, EmbeddedViewRef, ComponentFactoryResolver } from '@angular/core';
import { NgxModal } from './NgxModal';

const MODAL_PARAMS = [
  { name: 'enableBackdropDismiss', value: false},
  { name: 'class', value: []}
];

@Injectable({
  providedIn: 'root'
})
export class NgxModalService {

  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

  private loadComponent(component: any) {

    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component);

    return componentRef;

  }

  private loadView(componentRef) {

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    return domElem;
  }

  private appendToBody(domElem) {
    document.body.appendChild(domElem);
  }

  create(component: any, params = {}) {
    return new Promise(resolve => {
      setTimeout(() => {
        const modalRef = this.loadComponent(NgxModalComponent).create(this.injector);
        const componentRef = this.loadComponent(component).create(this.injector);
        this.loadParams(componentRef, params);
        this.loadModalParams(modalRef, params);
        const modalView = this.loadView(modalRef);
        const componentView = this.loadView(componentRef);

        modalView.appendChild(componentView);
        this.appendToBody(modalView);

        const modal = new NgxModal({
          modal: modalRef,
          component: componentRef,
        });
        this.modalInComponent(componentRef, modal);

        resolve(modal);
      });
    });
  }

  destroy(modal) {
    this.appRef.detachView(modal.hostView);
    modal.destroy();
  }

  private modalInComponent(component, modal) {
    component.instance['modal'] = modal;
  }

  private loadModalParams(modal, params) {
    MODAL_PARAMS.map(val => {
      if (val.name in params) {
        modal.instance[val.name] = params[val.name];
      }
    });

  }

  private loadParams(component, params) {
    Object.keys(params).map(key => {
      component.instance[key] = params[key];
    });
  }
}
