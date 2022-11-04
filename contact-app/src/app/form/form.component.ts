import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contacts: Contact[] = [];
  contact: Contact = new Contact;
  first_name: any;
  last_name: any;
  phone: any;
  displayedColumns = ['first_name','last_name','phone','actions'];
  dataSource : MatTableDataSource<Contact> = new MatTableDataSource(this.contacts);
  @ViewChild('contactsForm')
  form!: NgForm;
  constructor(private contactService : ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts=> this.contacts = contacts);
  }

  addContact(){
    const newContact = new Contact();
    newContact.first_name = this.first_name;
    newContact.last_name = this.last_name;
    newContact.phone = this.phone;

    this.contactService.addContact(newContact)
      .subscribe(contact=>{
        this.contacts.push(contact);
        this.contactService.getContacts().subscribe(contacts=> this.contacts = contacts);
      })
  }

  updateContact(id: any) {
    var contact = new Contact();
    this.contactService.getContactById(id)
    .subscribe(results=>contact);
    
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.phone = contact.phone;
  }
}
