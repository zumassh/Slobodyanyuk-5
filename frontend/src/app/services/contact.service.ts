import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://89.169.166.66:8080/api/contacts';

  constructor(private http: HttpClient) {}

  addContact(contact: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, contact);
  }

  getContactById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
