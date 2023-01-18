import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  checkLoggedIn() {
    const user = this.userService.getUser()
    return of(!!user)
  }
}