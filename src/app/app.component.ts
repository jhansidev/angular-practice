import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngPractice';

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "address": new FormControl("", Validators.required),
    "message": new FormControl(""),
  });

  onSubmit() {
    console.warn("Your details has been submitted", this.form.value);
    this.form.reset();
    console.log(this.form);
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {}

}
