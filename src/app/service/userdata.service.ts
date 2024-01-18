import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

 
  user()
  {
    return [
      { name : 'Siddhi', email:'sp@gmail.com'},
      { name : 'Vedika', email:'sw22@gmail.com'},
      { name : 'Shraddha', email:'er4@gmail.com'},
    ]
  }
}
