import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = '';
  enrollmentNo = '';
  email = '';
  x = true;
  OnClick(){

    console.log('Form submitted');
    console.log('Name:', this.name);
    console.log('Enrollment No:', this.enrollmentNo);
    console.log('Email:', this.email);
    this.x = false;
  }
  onClickl(){
    this.x = true;
    this.name = '';
    this.enrollmentNo = '';
    this.email = '';
    console.log('Form reset');
  }
}
