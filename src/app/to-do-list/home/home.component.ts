import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgModel} from '@angular/forms';
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
  taskdetail:any [] = [];
  taskee :number=0;
 
  taskSet: Set<string> = new Set<string>();
  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskRemoved: EventEmitter<number> = new EventEmitter<number>();

  flag:boolean = false;
  editId:any = 0;
  edit(id:any){
    // this.taskdetail = this.taskdetail.filter((i) => i.id !== id); 
    // this.editfocus.focus();
    // console.log("success")
    this.flag = !this.flag;
    this.editId = id;
    console.warn(this.editId);
  }

  addtask(item: string): void {
    if (this.taskSet.has(item)) {
      // Show alert if the task is already in the set
      alert('Task already exists!');
    } else {
      this.taskee++;
      // Add the task to the Set
      this.taskSet.add(item);
      // Convert the Set to an array for display
      this.taskdetail = Array.from(this.taskSet).map((name, id) => ({ id, name }));
      // Update the paginated task details
     
    }
  }
  display:string='';
  
  displayValue(item :string)
  {
     this.display=item;
  }
  Remove(id:any) : void {
  {
    const taskToRemove = this.taskdetail.find(task => task.id === id);
    if (taskToRemove) {
      this.taskee--;
      // Remove the task from the Set
      this.taskSet.delete(taskToRemove.name);
      // Convert the Set to an array for display
      this.taskdetail = Array.from(this.taskSet).map((name, id) => ({ id, name }));
      // Update the paginated task details
     
    }
  }
  }
 
  clearDisplayString() {
    this.display = '';
  }


   
   

  updateTask(id:number, newName:string)
  {
    const index = this.taskdetail.findIndex(item => item.id === id);

    if(index !== -1)
    {
      this.taskdetail[index].name = newName;

    }
  }

  clearInput(taskInput: NgModel): void {
    taskInput.reset(); // Reset the input value
  }

  

 
}
 
  


