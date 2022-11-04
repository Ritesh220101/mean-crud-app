import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Contact } from './contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


  getContacts(): Observable<any>{
    return this.http.get('http://localhost:2000/api/contacts');
  }

  getContactById(_id:any):Observable<any>{
    return this.http.get('http/localhost:2000/api/contact/id');
  }


  addContact(newContact:Contact): Observable<any>{
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:2000/api/contact', newContact, {headers: headers});
  }

  // updateContact(contact:Contact,id:any): Observable<any>{

  //   return this.http.put('http://localhost:2000/api/contact/id',JSON.stringify(contact));
  // }

  deleteContact(id:any): Observable<any>{
    return this.http.delete('http://localhost:2000/api/contact/'+id);
  }

  
}
