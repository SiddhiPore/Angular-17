import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,MatListModule, ChildComponent, Child2Component, FormsModule, Task1Component],
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
}
