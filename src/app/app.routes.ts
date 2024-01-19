import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './header/home/home.component';



export const routes: Routes = [
    {
        path : 'user/:id',
        component: UserComponent // we can also give blank path to show as front page
    },
    {
        path:'admin' , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'patient' , loadChildren:()=>import('./patient/patient.module').then(m=>m.PatientModule)
    },

    {
        path : 'about',
        component : AboutComponent,
        children :[
            {path :'child', component: ChildComponent},
            
        ]
    },
    {path : 'home',
     component:HomeComponent},

    
     
    {
        path : '**',
        component: NoPageComponent
    },


    

];
