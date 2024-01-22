import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatFormFieldModule,FormsModule,MatButtonModule,MatListModule,MatButtonToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  taskdetail:any[] = [];
  taskee :number=0;

  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskRemoved: EventEmitter<number> = new EventEmitter<number>();
  addtask(item:string)
  {
    this.taskdetail.push({id:this.taskdetail.length,name:item})
    this.taskAdded.emit(item);
    this.taskee++;

  }
  display:string='';
  displayValue(item :string)
  {
     this.display=item;
  }

  Remove(id:number)
  {
    this.taskdetail = this.taskdetail.filter(i => i.id!==id);
    this.taskRemoved.emit(id);
    this.taskee--;
  }
  clearDisplayString() {
    this.display = '';
  }

  updateTask(id: number, newName: string) {
    const index = this.taskdetail.findIndex(item => item.id === id);

    if (index !== -1) {
      this.taskdetail[index].name = newName;
    }
  }


}
