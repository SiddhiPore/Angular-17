import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path : 'user/:id',
        component: UserComponent // we can also give blank path to show as front page
    },

    {
        path : 'about',
        component : AboutComponent
    }

];
