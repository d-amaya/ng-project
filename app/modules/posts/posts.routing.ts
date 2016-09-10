import { RouterModule  }     from '@angular/router';

import { PostsComponent }    from './component/posts.component';

export const postsRouting = RouterModule.forChild([
    { path: 'posts', component: PostsComponent }
]);