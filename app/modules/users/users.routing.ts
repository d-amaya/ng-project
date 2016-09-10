import { RouterModule  }    		  from '@angular/router';

import { SaveUserComponent } 		  from './component/save-user.component';
import { UsersComponent }    		  from './component/users.component';

export const usersRouting = RouterModule.forChild([
	{ path: 'users/:id', component: SaveUserComponent },
	{ path: 'users/new', component: SaveUserComponent },
    { path: 'users', component: UsersComponent },
]);