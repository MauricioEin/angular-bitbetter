import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent {
  constructor(private bitcoinService: BitcoinService) { }
  marketPrice!: any
  confirmedTransactions!: any

  async ngOnInit() {
    this.marketPrice = await this.bitcoinService.getMarketPrice()
    this.confirmedTransactions = await this.bitcoinService.getConfirmedTransactions()
  }

}
