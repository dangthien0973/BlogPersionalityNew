import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserModel } from 'src/app/core/model/auth_user.model';
import { AuthenService } from 'src/app/core/api/authen.service';
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
  
    constructor(  private formBuilder: FormBuilder, private apiLogin :AuthenService , private router : Router) { }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
   this.apiLogin.login(this.f.username.value, this.f.password.value).subscribe(data => {
    this.loading = false;
    this.router.navigate(['/postblog']);
   })
}
}