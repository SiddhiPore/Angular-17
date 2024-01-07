import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModuleModule } from './user-module/user-module.module';
import { LoginComponent } from './user-module/login/login.component';
import { count } from 'console';
import { HeaderComponent } from './header/header.component';

  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, UserModuleModule, LoginComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';

  getName(Name:string)
  {
    alert(Name)
  }
  getNumber(Num:number)
  {
    console.log(Num)
  }

  getData(val:string)
  {
    console.warn(val)
  }
  displayVal=''
  getValue(val1: string)
  {
    console.warn(val1)
    this.displayVal=val1
  }
 count=0
  getCount(type:string)
  {
    type==='minus'? this.count-- : this.count++
  }


  isDrivelicen= false

  color='black';

  selection=10;
  
  // getSwitch(val3: string)
  // {
  //   console.warn(val3)
  // }
  items=['Angular', 'Java', 'Cpp','Python'];

  courses = [
    { id: 1, name: "Angular For Beginners" },
    { id: 2, name: "Angular Core Deep Dive" },
    { id: 3, name: "Angular Forms In Depth" },
  ];

  candidates = [ 
    {name: 'Siddhi', cont: '9146', email: 'ss@gmail.com' },
      {name: 'Vedika', cont: '3456', email: 'dd@gmail.com' },
      {name: 'Shraddha', cont: '8765', email: 'sp@gmail.com' },
    
    ];

    studentdetail = [
      {name:'Prathmesh' , age:'68',social:['Insta','facebook']},
      {name:'Vikas' , age:'67',social:['Insta','Linedin']},
      {name:'Aniket' , age:'69',social:['LinkedIn','facebook']},
      {name:'Vivek' , age:'58',social:['Insta','facebook']},
      {name:'Siddhi', age:'43', social:['Insta', 'Snapchat']}
    ]

    color1="blue";
    bgColor="orange"
    updateColor()
    {
      this.color1="orange"
      this.bgColor="blue"
    }
}

