import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { HomeComponent } from './to-do-list/home/home.component';
import { HeaderComponent } from './to-do-list/header/header.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, MatCardModule,MatListModule,MatDividerModule,MatButtonModule,FormsModule, MatFormFieldModule, MatInputModule,ToDoListModule,HomeComponent,HeaderComponent,RouterOutlet  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'to-do-list';
  allTasks: string[] = [];

  onTaskAdded(task: string) {
    this.allTasks.push(task); 
  }
  

 
 
}
