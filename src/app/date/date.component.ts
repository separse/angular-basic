import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dateMessage: string;
  sumNumber: number;
  constructor() { 
  
  setInterval (() => { 
   let currentTime = new Date();
   this.dateMessage = currentTime.toDateString() + ' | ' + currentTime.toLocaleTimeString();
   } , 1000);
   this.sumNumber = 10 + 15;
  }

  ngOnInit(): void {

  }
  summingNumbers (a: number , b: number) {
    return a + b;
  }

}
