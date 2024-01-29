import { Routes } from '@angular/router';




export const routes: Routes = [
   
    {
        path:'todolist' , loadChildren:()=>import('./to-do-list/to-do-list.module').then(m=>m.ToDoListModule)
    },
    
];
