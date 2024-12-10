import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonButton, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonInput, IonButton, IonInputPasswordToggle]
})
export class RegisterComponent {

  @Output() login = new EventEmitter<void>();

  constructor() { }

  public onLogin() {
    this.login.emit();
  }

}
