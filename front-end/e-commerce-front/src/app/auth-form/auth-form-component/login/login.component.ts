import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonInput, IonButton, IonIcon]
})
export class LoginComponent {

  @Output() signup = new EventEmitter<void>();

  constructor() {
    addIcons({ logoFacebook, logoGoogle });
  }

  public onSignup() {
    this.signup.emit();
  }

}
