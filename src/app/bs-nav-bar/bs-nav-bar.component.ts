import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './bs-nav-bar.component.html',
  styleUrls: ['./bs-nav-bar.component.css']
})
export class BsNavBarComponent {
  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }

}
