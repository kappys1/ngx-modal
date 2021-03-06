import { Component, OnInit, ElementRef, EventEmitter, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-modal',
  template: ``,
  styleUrls: ['./ngx-modal.component.scss']
})
export class NgxModalComponent implements OnInit, AfterViewInit {

  enableBackdropDismiss = false;
  class = [];
  constructor(private elRef: ElementRef) { }

  ngOnInit() {


  }

  ngAfterViewInit() {
    this.class.map((val, i) => {
      setTimeout(() => this.elRef.nativeElement.classList.add(val));
    });
  }

  open() {
    document.getElementsByTagName('body')[0].classList.add('no-scroll');
    setTimeout(() => this.elRef.nativeElement.classList.add('show'), 200);
  }

  close() {
    document.getElementsByTagName('body')[0].classList.remove('no-scroll');
    setTimeout(() => this.elRef.nativeElement.classList.remove('show'), 200);
  }

  @HostListener('document:mouseup', ['$event.target'])
  closeBackground(target) {
    if (this.enableBackdropDismiss && target === this.elRef.nativeElement) {
      this.close();
    }
  }

}
