// this is the 'controller'

import { Component } from '@angular/core';
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

  onSubmit(){
    console.log(this.model)
  }

  // model could be called potato and is like binding data to this "record"
  model: object = {
    first_name: "Bob",
    last_name: "Smith"
  }

}
