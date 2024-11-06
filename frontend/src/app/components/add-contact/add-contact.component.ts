import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  name = '';
  phone = '';

  constructor(private contactService: ContactService) {}

  addContact() {
    this.contactService.addContact({ name: this.name, phone: this.phone })
      .subscribe(response => {
        console.log('Contact added:', response);
      });
  }
}
