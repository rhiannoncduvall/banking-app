import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

  value: number;
  showLatest: boolean = false;
  showTransactions: boolean = false;

  account: any = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    address: {
      street: '123 Main Street',
      city: 'San Diego',
      state: 'CA',
      zip: 92101,
      country: 'USA'
    },
    balance: 10000,
    currency: 'usd',

    transactions: []

  };

  success() {
    this.showLatest = true;
    this.value = 0;
  }

  withdraw() {
    if (this.account.balance < this.value){
      alert(`Warning: Amount entered is less than total account balance of $${this.account.balance}`);
    }
    else {
    this.changeBalance(this.value, 'withdrawal');
    }
    this.success();
  }

  deposit() {
    this.changeBalance(this.value, 'deposit');
    this.success();
  }

// this is still pushing the transaction into the array even if the amount is 0 or there is no input
  changeBalance(amount: number, type: string) {
    if (amount <= 0) {
      return alert("Warning: Please enter a valid amount");
    } else {
    if (type === 'deposit') {
    this.account.balance += amount;
    } else if (type === 'withdrawal') {
    this.account.balance -= amount;
    }
    let date = new Date();
    let newTransaction: Object = {
      date: date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear(),
      type: type,
      amount : amount,
      currency: 'usd',
    }
    this.account.transactions.push(newTransaction);
  }
  }

  history() {
    if (this.showTransactions === false) {
      this.showTransactions = true;
    } else {
      this.showTransactions = false;
    }
  }

}
