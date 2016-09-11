import { RouterModule  } from '@angular/router';

import { SaveUserComponent } from './component/save-user.component';
import { UsersComponent } from './component/users.component';
import { AuthGuard } from "./../../auth/auth-guard.service";
import { PreventUnsavedChangesGuard } from "./../../auth/prevent-unsaved-changes-guard.service";

export const usersRouting = RouterModule.forChild([
	{ 
		path: 'users/:id', 
		component: SaveUserComponent, 
		canDeactivate: [PreventUnsavedChangesGuard] 
	},
	{ 
		path: 'users/new', 
		component: SaveUserComponent, 
		canDeactivate: [PreventUnsavedChangesGuard] 
	},
    { 
		path: 'users', 
		component: UsersComponent, 
		canActivate: [AuthGuard]
	},
]);