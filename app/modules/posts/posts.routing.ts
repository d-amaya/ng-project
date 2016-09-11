import { RouterModule  } from "@angular/router";

import { PostsComponent } from "./component/posts.component";
import { AuthGuard } from "./../../auth/auth-guard.service";

export const postsRouting = RouterModule.forChild([
    { 
        path: 'posts', 
        component: PostsComponent, 
        canActivate: [AuthGuard]
    }
]);