import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
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
    
  
    ngOnInit() {
     
    }
}