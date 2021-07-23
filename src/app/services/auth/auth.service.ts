import { Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  loggedInUser = 'user';

  constructor(private userService: UsersService, private router: Router) {
    let user = JSON.parse(localStorage.getItem(this.loggedInUser));
    console.log(user);

    if (user !== null) {
      this.isLoggedIn = user.isUserLoggedIn;
    } else {
      this.isLoggedIn = false;
    }
  }

  login(username: string, password: string) {
    if (this.userService.userExists(username, password)) {
      this.isLoggedIn = true;
      console.log('logged in');
      console.log(this.isLoggedIn);
      this.router.navigate(['albums']);
      localStorage.setItem(
        this.loggedInUser,
        JSON.stringify({ username: username, isUserLoggedIn: this.isLoggedIn })
      );
      return this.isLoggedIn;
    }
  }

  isUserLoggedIn(): boolean {
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(this.loggedInUser);
  }
}
