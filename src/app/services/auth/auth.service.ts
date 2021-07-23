import { Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
}
