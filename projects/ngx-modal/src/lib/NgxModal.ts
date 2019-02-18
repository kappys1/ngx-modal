import { ComponentRef, EventEmitter } from '@angular/core';
import { NgxModalComponent } from './ngx-modal.component';


export class NgxModal {

    modal: ComponentRef<NgxModalComponent>;
    component: ComponentRef<any>;
    onClose = new EventEmitter();
    onOpen = new EventEmitter();
    onDestroy = new EventEmitter();

    constructor({modal, component}) {
        this.modal = modal;
        this.component = component;
    }

    open() {
      return new Promise(res => {
        this.onOpen.emit(true);
        this.modal.instance.open();
        res(true);
      });
    }

    close() {
      return new Promise(res => {
        this.onClose.emit(true);
        this.modal.instance.close();
        res(true);
      });
    }

    destroy() {
      return new Promise(res => {
        this.onDestroy.emit(true);
        this.modal.instance.close();
        setTimeout(val => {
          this.modal.destroy();
          this.component.destroy();
        }, 500);
        res(true);
      });
    }
}
