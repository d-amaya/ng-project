"use strict";
var router_1 = require("@angular/router");
var posts_component_1 = require("./component/posts.component");
var auth_guard_service_1 = require("./../../auth/auth-guard.service");
exports.postsRouting = router_1.RouterModule.forChild([
    {
        path: 'posts',
        component: posts_component_1.PostsComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
]);
//# sourceMappingURL=posts.routing.js.map