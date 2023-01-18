import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent {
  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location) { }
  @Output() saved = new EventEmitter<Contact>()
  contact!: Contact
  editContactForm!: FormGroup


  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'] || this.contactService.getEmptyContact() as Contact
    this.editContactForm = this.fb.group({
      name: [this.contact.name, [Validators.required], []],
      phone: [this.contact.phone, [Validators.required], []],
      email: [this.contact.email, [Validators.required], []]
    })
  }

  onSaveContact() {
    const savedContact = this.contactService.saveContact({ ...this.editContactForm.value, _id: this.contact._id })
    this.saved.emit(savedContact)

    this.router.navigateByUrl('/contact/' + savedContact._id)
  }

  onDeleteContact() {
    this.contactService.deleteContact(this.contact._id as string)
    this.router.navigateByUrl('/contact')
  }
  onClose() {
    this.location.back()
  }
  ngOnDestroy() {
  }
}