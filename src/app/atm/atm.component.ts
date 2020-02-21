import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  // value: number;
  showInput: boolean = false;
  // showLatest: boolean = false;
  showTransactions: boolean = false;
  showBalance: boolean = false;
  confirmValue: string = "";
  transactions = this.bank.account.transactions;

  constructor(public bank: BankService) { }

  balance() {
    if (this.showBalance === false) {
      this.showBalance = true; 
    } else {
      this.showBalance = false;
    }
  }


}
