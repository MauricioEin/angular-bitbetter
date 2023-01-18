import { Component, OnInit } from '@angular/core';
import { Contact, ContactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  constructor(private contactService: ContactService) { }

  // contacts!: Contact[]
  contacts$!: Observable<Contact[]>

  // subscription!: Subscription


  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    // this.subscription = this.petService.pets$.subscribe(pets => {
    //     this.pets = pets
    // })
  }

  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe()
  // }

}
