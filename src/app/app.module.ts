import { NgxModalModule } from './../../projects/ngx-modal/src/lib/ngx-modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SampleModalComponent } from './components/sample-modal/sample-modal.component';

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
export class AppModule { }
