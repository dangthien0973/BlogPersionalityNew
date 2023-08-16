import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserModel } from 'src/app/core/model/auth_user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
    loading:boolean=false;
    returnUrl: string;
    submitted = false;
    loginSuccess: boolean = false;
    errMessage: string = '';
    loginForm: FormGroup;
    model: AuthUserModel;
    constructor(  private formBuilder: FormBuilder,) { }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    alert('SUCCESS!! :-)')
}
}