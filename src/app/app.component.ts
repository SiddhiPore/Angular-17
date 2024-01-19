import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import {  FormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule , FormControlName} from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import{UserdataService} from './service/userdata.service';
import { NoPageComponent } from './no-page/no-page.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './header/home/home.component';
import { AdminModule } from './admin/admin.module';
import { PatientModule } from './patient/patient.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,MatListModule, ChildComponent, Child2Component, FormsModule, Task1Component, ReactiveFormsModule, RouterLink ,NoPageComponent, HeaderModule,HomeComponent, AdminModule, PatientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advance';

  taskdetail:any[] = [];


  addtask(item:string)
  {
    this.taskdetail.push({id:this.taskdetail.length,name:item})

  }

  Remove(id:number)
  {
    this.taskdetail = this.taskdetail.filter(i => i.id!==id);
  }
  data=100;
  updateData()
  {
    this.data= Math.floor(Math.random()*10)
  }
  userdetails=[
    {name:'Siddhi Pore', email:'sp14@gmail.com', gen:'Female'},
    {name:'Vedika Upare', email:'vu17@gmail.com', gen:'Female'},
    {name:'Shraddha Shinde', email:'ss03@gmail.com', gen:'Female'},
    {name:'Atharv More', email:'am05@gmail.com', gen:'Male'},
  ]
  pass= ' ';
  update(item:string)
  {
    console.warn(item);
    this.pass=item;
  }
name: any;

  getData(item : any)
  {
    console.warn(item)
  }
  date= Date();


  parentImageUrl: string = '';
  parentImageDescription: string = '';

  sendDataToChild(item:any , item2: any) {
    console.warn(item,item2)
    // You can perform any validation or additional logic here before sending the data
  }

  login(item : any)
  {
    console.warn(item);
  }

  
  loginform = new FormGroup({
    user: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email]),
    // password:new FormControl('',[Validators.minLength(8)])
    
    

  })

  getReactiveForm(){
    console.warn(this.loginform.value);
  }

  get user()
  {
    return this.loginform.get('user')
  }

  get email()
  {
    return this.loginform.get('email'); 
  }
  users:any;
  constructor (private userdata : UserdataService)
  {
      console.warn("Userdata", userdata.user())
      this.users=userdata.user();
  }
  
}
