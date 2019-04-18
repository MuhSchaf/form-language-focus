import { Component, ViewChild, ElementRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  @ViewChild('inputField')
  inputField: ElementRef

  name = 'You';
  form = new FormControl('', [Validators.required]);

   getErrorMessage() {
    return this.form.hasError('required') ? 'You must enter a value' :
        this.form.hasError('email') ? 'Not a valid email' :
            '';
  }

  getLanguage() {
    this.name = this.inputField.nativeElement.lang;
  }
}
