import { NgxModal } from './../../../../projects/ngx-modal/src/lib/NgxModal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss']
})
export class SampleModalComponent implements OnInit {

  modal: NgxModal;

  paramValue;
  destroy = true;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.modal.close();
    if (this.destroy) {
      this.modal.destroy();
    }
  }

}
