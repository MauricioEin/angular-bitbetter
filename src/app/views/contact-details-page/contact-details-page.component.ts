import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, ObservedValueOf, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, tap, map, toArray } from 'rxjs'
import { UserService } from 'src/app/services/user.service';
import { Move } from 'src/app/models/user.model';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent {
  @Input() contactId!: string

  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  contact: Contact | undefined
  prevId!: string
  nextId!: string
  user$ = this.userService.user$
  contact$ = this.contactService.contact$
  subscription!: Subscription

  filterMoves = (move: Move) => move.toId === this.contact?._id


  async ngOnInit(): Promise<void> {
    this.loadContact()
  }
  
  loadContact() {
    this.subscription = this.route.params.subscribe(async params => {
      const contactId = params['id']
      this.contactService.getContactById(contactId).subscribe(contact => {
        this.contact=contact
        this.contact$ = this.contactService.contact$
        this.setPrevNextIds(contact._id as string)
      })
    })
  }
    
  setPrevNextIds = async (contactId: string) => {
    var contacts!: Contact[]
    this.contactService.contacts$.subscribe(allContacts => contacts = allContacts)
    const idx = contacts.findIndex(contact => contact._id === contactId)
    this.nextId = contacts[(idx + 1) % contacts.length]._id as string
    this.prevId = contacts[(contacts.length + idx - 1) % contacts.length]._id as string

  }

  transferCoins(amount: number) {
    console.log('transferring')
    this.userService.addMove(this.contact as Contact, amount)

  }
  ngOnDestroy() { this.subscription.unsubscribe() }
}
