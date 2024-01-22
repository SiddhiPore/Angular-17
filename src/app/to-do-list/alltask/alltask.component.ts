import { Component,Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-alltask',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './alltask.component.html',
  styleUrl: './alltask.component.css'
})


export class AlltaskComponent {

  @Input() tasks: string[] = [];

}
