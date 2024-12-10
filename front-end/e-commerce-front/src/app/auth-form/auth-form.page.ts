import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './auth-form-component/login/login.component';
import { RegisterComponent } from './auth-form-component/register/register.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.page.html',
  styleUrls: ['./auth-form.page.scss'],
  standalone: true,
  imports: [LoginComponent, RegisterComponent]
})
export class AuthFormPage {

  public currentState: 'login' | 'signup' = 'login';

  constructor() {
  }

  public toggleTemplate(): void {
    this.currentState = this.currentState === 'login' ? 'signup' : 'login';
  }


}
