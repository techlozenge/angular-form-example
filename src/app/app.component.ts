// this is the 'controller'

import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  // this handles data from the form coming from the frontend i.e. app.component.html
  // Not receiving form data but using two-way binding with "model"
  //  onSubmit(data: NgForm){
  // console.log(data.value)
  // }

  sampleForm: NgForm;
  @ViewChild('sampleForm') currentForm: NgForm;

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

  //start out the errors as an emtpy string
  formErrors = {
    'first_name': '',
    'last_name': ''
  };

  validationMessages = {
    'first_name': {
      'required':      'First name is required.',
      'minlength':     'Name must be at least 2 characters long.'
    },
    'last_name': {
      'minlength':     'Name must be at least 2 characters long.'
    }
  };

  onSubmit(){
    console.log(this.model)
  }

  // model could be called potato and is like binding data to this "record"
  model: object = {
    first_name: "Bob",
    last_name: "Smith"
  }

}
