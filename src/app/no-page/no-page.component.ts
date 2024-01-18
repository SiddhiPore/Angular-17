import { Component } from '@angular/core';
import{UserdataService} from '../service/userdata.service';

@Component({
  selector: 'app-no-page',
  standalone: true,
  imports: [],
  templateUrl: './no-page.component.html',
  styleUrl: './no-page.component.css'
})
export class NoPageComponent {
  users:any;
  constructor (private userdata : UserdataService)
  {
      console.warn("Userdata", userdata.user())
      this.users=userdata.user();
  }

}
