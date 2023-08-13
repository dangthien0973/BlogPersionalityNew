import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
    loading:boolean=false;

    submitted = false;
    loginSuccess: boolean = false;
    errMessage: string = '';
    returnUrl: string;
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }
   
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loginForm;

    alert('SUCCESS!! :-)')
}
}