import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
  @Input() contact!: Contact
  @Input() maxCoins!: number
  @Output() transfer = new EventEmitter<number>()
  amount!:number|null


  onTransfer = () => {
    if (!this.amount) return
    if (this.amount>this.maxCoins){
      this.amount=this.maxCoins
      return
    }
    this.transfer.emit(this.amount)
    this.amount = null
  }

}
