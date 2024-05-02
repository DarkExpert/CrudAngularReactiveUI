import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IAuthentication } from '../../IAuthentication';
import { BaseinformationService } from '../baseinformation.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css'
})

export class AuthenticatorComponent {

  loginForm = new FormGroup({
    userName: new FormControl('BmAdmin'),
    password: new FormControl('Bb@1234'),
    message: new FormControl('')
  });
  userAccess: string= '';

  constructor(private _authenticationService: BaseinformationService, private router: Router) {
  }

  login(form: FormGroup)
  {

    this._authenticationService.authenticateUser(form.value.userName, form.value.password).subscribe(
      (response: IAuthentication)=>{
        console.log(response);
        this.userAccess = response.token;

        let navigationExtras: NavigationExtras = {
          queryParams: {
              "token": JSON.stringify(this.userAccess)
          }
        };
    
        this.router.navigate(['./home'], navigationExtras);
      }, 
      (error)=>{
        console.error(error);
      });

    
  }
}
