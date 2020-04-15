import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.module';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
 @Input () user: User;
 isColapsed: Boolean = true;
  constructor() {
   }
  ngOnInit(): void {
  }
  toggleColapse () {
    this.isColapsed = !this.isColapsed;
  }
}
