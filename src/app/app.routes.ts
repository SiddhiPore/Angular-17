import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ChildComponent } from './child/child.component';



export const routes: Routes = [
    {
        path : 'user/:id',
        component: UserComponent // we can also give blank path to show as front page
    },

    {
        path : 'about',
        component : AboutComponent,
        children :[
            {path :'child', component: ChildComponent},
            
        ]
    },
    {
        path : '**',
        component: NoPageComponent
    }

];
