import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: string = "";
  userEmail: string = "";

  constructor(public bank: BankService) { }

  ngOnInit() {
  }

  submitMsg() {
    alert(`Your message has been received:
${this.bank.account.fname} ${this.bank.account.lname}
${this.userEmail}
Message: ${this.message}`)
  }

}
