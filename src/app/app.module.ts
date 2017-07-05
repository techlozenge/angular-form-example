import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// cannot do 2-way data binding without the forms module
import { FormsModule }   from '@angular/forms'; //import the forms module from @angular/forms

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
