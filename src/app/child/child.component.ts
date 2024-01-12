import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() item = 0;

  @Input() user:{name : string, email: string, gen: string}={name :'',email:'', gen:''};

}