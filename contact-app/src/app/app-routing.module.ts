import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import {ContactsComponent} from './contacts/contacts.component'
const routes: Routes = [
  {
    path:' ', component: ContactsComponent
  },
  {
    path: 'create', component: FormComponent
  },
  {
    path: 'edit', component: FormComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [FormComponent,ContactsComponent];