import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  pointToConsole(e) {
    console.log(e)
   }
}
