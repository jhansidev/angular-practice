import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule, FormControl, FormBuilder],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngPractice';
  myForm: FormGroup; // Declare the form as a class property

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
      "email": ["", Validators.required],
      "password": ["", Validators.required],
      "address": ["", Validators.required],
      "message": [""]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.warn("Your details have been submitted", this.myForm.value);
      this.myForm.reset();
    } else {
      console.log('error came here!!')
    }
  }
}
