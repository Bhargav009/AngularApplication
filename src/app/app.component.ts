import { UserService } from './services/user.service';
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private user: UserService) {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.user.save(user);
        this.router.navigate([localStorage.getItem('returnUrl')]);
      }
    });
  }


}
