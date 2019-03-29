import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: firebase.User;

  constructor(
    private auth: AuthService) {
   }

  login() {
    this.auth.login();
  }

}