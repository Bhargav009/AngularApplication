import { UserService } from "./user.service";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Injectable()
export class AuthAdminGuardService implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate() {
    return this.auth.user$
      .switchMap(user => this.userService.get(user.uid))
      .map(appUser => appUser.isAdmin);
  }
}
