import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  constructor(private userService: UserService,
    private router: Router){}
  name = ''

  onSignup = () => {
    console.log('signing with:', this.name)
    if(this.name.length<3) return
    this.userService.signup(this.name)
    this.router.navigateByUrl('/')
  }

}
