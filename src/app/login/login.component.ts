import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogIn(loginForm) {
    this.authService.login(loginForm.value.username, loginForm.value.password);
  }
  onLogOut() {
    console.log('Logged out');

    this.authService.logoutUser();
  }
}
