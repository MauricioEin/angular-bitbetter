import { Component, Input, Output } from '@angular/core';
import { Move } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent {
  constructor(private bitcoinService: BitcoinService) { }
  
  @Input() title!: string
  @Input() moves!: Move[]
  @Input() isWithName = false

  rate!: number
  
  async ngOnInit() { this.rate = await this.bitcoinService.getRate() }



}
