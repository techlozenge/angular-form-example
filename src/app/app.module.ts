import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; //import the forms module from @angular/forms
// cannot do 2-way data binding without the formsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     // be sure to include FormsModule in imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
