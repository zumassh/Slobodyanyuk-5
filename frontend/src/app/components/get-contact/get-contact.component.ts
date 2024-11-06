import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-get-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.scss']
})
export class GetContactComponent {
  contactId = '';
  contact: any;

  constructor(private contactService: ContactService) {}

  getContact() {
    this.contactService.getContactById(this.contactId)
      .subscribe(response => {
        this.contact = response;
      });
  }
}
