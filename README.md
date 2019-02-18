# NgxModalLib

## Install

1. Install from NPM 
```
    npm install ngx-modal --save
```

## Examples

[Here](https://kappys1.github.io/ngx-modal/)

## Initialize

1. Add to import Modules and **Add to entry entryComponents in @NgModules, the modules that you want to put inside the modal.**

```
@NgModule({
  declarations: [
    AppComponent,
    SampleModalComponent,
  ],
  entryComponents: [
    SampleModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

2.  Import your Service in a component and Create a new Modal.

```
export class AppComponent {

  constructor(private modalService: NgxModalService) {

  }

  openModal(){
    const params = {};
    this.modalService.create(SampleModalComponent, params).then((modal: NgxModal) => {
      modal.open();
    });
  }

}

```
## NgxModal Model
functions:

- open() -> to open modal;
- close() -> to close modal;
- destroy() -> to open modal;

events: 

- onOpen
- onClose
- onDestroy

[more info see the wiki](https://github.com/kappys1/ngx-modal/wiki/Events)

## NgxModalService Params

In Params, you can add all params that you need for init your component, but for modal, you can pass this params:

- **enableBackdropDismiss** (boolean)
- **class** (Array of strings)

[more info see the wiki](https://github.com/kappys1/ngx-modal/wiki/Events)

