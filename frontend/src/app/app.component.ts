import { Component } from '@angular/core';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { GetContactComponent } from './components/get-contact/get-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddContactComponent, GetContactComponent],
  template: `
    <h1>Управление контактами</h1>
    <app-add-contact></app-add-contact>
    <app-get-contact></app-get-contact>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
