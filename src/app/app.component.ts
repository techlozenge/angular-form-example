// this is the 'controller'

import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  // Angular @ViewChild queries for a template variable when you pass it the name of that variable as a string ('sampleForm' in this case). The sampleForm attribute is assigned to NgForm and every time the data changes in the form it is updated.
  sampleForm: NgForm;
  @ViewChild('sampleForm') currentForm: NgForm;

  //Angular calls the ngAfterViewChecked() lifecycle hook method when anything changes in the view. formChanged() subscribes to its valueChanges Observable property. The onValueChanged handler looks for validation errors after every keystroke.
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    //if the form didn't change then do nothing
    if (this.currentForm === this.sampleForm) { 
      return; 
    }
    //set the form to the current form for comparison
    this.sampleForm = this.currentForm;
    //subscribe to form changes and send the changes to the onValueChanged method
    this.sampleForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
   }

   // this is boilerplate that can be used over and over again
   // the '?' means its optional
   onValueChanged(data?: any) {
    let form = this.sampleForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }        
      }
    }
  }

  validationMessages = {
    'first_name': {
      'required':      'First name is required.',
      'minlength':     'Name must be at least 2 characters long.'
    },
    'last_name': {
      'minlength':     'Name must be at least 2 characters long.'
    }
  };

  //start out the errors as an emtpy string
  // any field with validation should be in this array
  formErrors = {
    'first_name': '',
    'last_name': ''
  };



  // this handles data from the form coming from the frontend i.e. app.component.html
  onSubmit(data: NgForm){
  console.log(data.value)
  }

}
