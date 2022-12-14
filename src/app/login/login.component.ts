/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: login.component.ts                                //
/////////////////////////////////////////////////////////////


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User> | undefined;
  errorMessage: string = "";

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    console.log("Loguję model w login: ", this.model)
    this.accountService.login(this.model).subscribe(response => {
      console.log("Loguje response w login: ",response);
      this.router.navigate([''])
      localStorage.setItem('loggedIn', 'false')
    }, error => {
      console.log(error);
      if(error.error == "Invalid username of password"){
          this.errorMessage = "Błędny email lub hasło"
      }
    })
  }
}
