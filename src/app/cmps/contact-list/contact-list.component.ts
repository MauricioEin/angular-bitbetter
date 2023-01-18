import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Output() onRemove = new EventEmitter<string>()
  @Input() contacts!: Contact[] | null
}
