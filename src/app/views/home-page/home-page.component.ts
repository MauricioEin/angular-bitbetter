import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }
  user$ = this.userService.user$
  // user: User = this.userService.getUser()
  rate!: number

  async ngOnInit() { this.rate = await this.bitcoinService.getRate() }
  logOut() {
    this.userService.logout()
  }
}
