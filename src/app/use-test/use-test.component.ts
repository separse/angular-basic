import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-use-test',
  templateUrl: './use-test.component.html',
  styleUrls: ['./use-test.component.css']
})
export class UseTestComponent {

  constructor( private svc: TestService ) {
    svc.pointToConsole('ghorbunet');
   }
  
}
