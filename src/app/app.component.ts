import { Component } from '@angular/core';
import { User } from './address-card/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  dele: User;
  initialValue: string = 'Initial Value';
  constructor() {
  this.user = new User;
  this.user.name = 'Sepehr';
  this.user.title = 'Web developer';
  this.user.address = 'Malayer, Azadegan sq.';
  this.user.phone = ['09180186198', '09357930901', '02155491537'];

  this.dele = new User;
  this.dele.name = 'Sorush';
  this.dele.title = 'Designer';
  this.dele.address = 'Tehran, Monirieh sq.';
  this.dele.phone = ['09129876546', '09190987841', '0348976543'];
}
}