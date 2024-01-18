import { Component ,Input} from '@angular/core';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})


export class ChildComponent {

  
  
  @Input() item :any;

  @Input() user:{name : string, email: string, gen: string}={name :'',email:'', gen:''};

  

}
