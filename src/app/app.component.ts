import { Component } from '@angular/core';
import { NgxModalService } from 'projects/ngx-modal/src/public_api';
import { SampleModalComponent } from './components/sample-modal/sample-modal.component';
import { NgxModal } from 'projects/ngx-modal/src/lib/NgxModal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-modal';
  inputValue;
  year = new Date().getFullYear();
  modal;

  constructor(private modalService: NgxModalService) {

  }

  openSampleModal() {
    this.openModal().then((modal: NgxModal) => {
      modal.open();
    });
  }

  openModalWithoutDestroy() {
    if (this.modal) {
      this.modal.open();
    } else {
      this.openModal({destroy: false}).then((modal: NgxModal) => {
        this.modal = modal;
        this.modal.open();
      });
    }
  }

  openBackdropModal() {
    const param = {enableBackdropDismiss: true};
    this.openModal(param).then((modal: NgxModal) => {
      modal.open();
    });
  }

  openEventsModal() {
    this.openModal().then((modal: NgxModal) => {
      modal.open();
      modal.onDestroy.subscribe(val => { window.alert('Modal Destroyed'); });
    });
  }

  openCheckbutton() {
    const param = {paramValue: this.inputValue};
    this.openModal(param).then((modal: NgxModal) => {
      modal.open();
      modal.onDestroy.subscribe(val => {
        this.inputValue = modal.component.instance.paramValue;
      });
    });
  }

  openAnimation() {
    const param = {class: ['fade']};
    this.openModal(param).then((modal: NgxModal) => {
      setTimeout(() => modal.open());
    });
  }

  openModal(params = {}) {
    return this.modalService.create(SampleModalComponent, params);
  }
}
