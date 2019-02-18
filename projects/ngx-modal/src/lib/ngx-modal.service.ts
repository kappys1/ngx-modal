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

    // let newNode = document.createElement('div');
    // newNode.id = 'placeholder';
    // document.getElementsByTagName('body')[0].appendChild(newNode);

    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component);
      // .create(this.injector);

    return componentRef;

  }

  private loadView(componentRef) {
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
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
