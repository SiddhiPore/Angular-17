import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';



export const routes: Routes = [
   
    {
        path:'todolist' , loadChildren:()=>import('./to-do-list/to-do-list.module').then(m=>m.ToDoListModule)
    },
    {
        path: 'admin', component:AdminComponent
    }
];
