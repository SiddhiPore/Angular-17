import { Component , Input, Output, EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
  
  @Input() childImageUrl: string = '';
  @Input() childImageDescription: string = '';
}
