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
  onSubmit(data: NgForm){
  console.log(data.value)
}

}
