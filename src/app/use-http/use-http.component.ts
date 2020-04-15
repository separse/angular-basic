import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {
userName: string = ' ';
response: any;
  constructor(private http: HttpClient) {
 
   }

  ngOnInit(): void {
  //   let obs = this.http.get('https://api.github.com/users/separse');
  //   obs.subscribe((response) => 
  //   console.log(response) )
  }
  search() {
  this.http.get('https://api.github.com/users/' + this.userName).subscribe(
    (response) => {this.response = response;}
  )

  }
 
  }
