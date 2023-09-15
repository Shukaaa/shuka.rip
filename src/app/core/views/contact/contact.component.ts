import { Component } from '@angular/core';
import {contact} from "../../utils/Consts";

@Component({
  selector: 'view-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  site = {
    email: contact.email,
    instagram: contact.instagram,
  }
}
