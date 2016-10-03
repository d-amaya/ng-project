"use strict";
var router_1 = require('@angular/router');
var save_user_component_1 = require('./component/save-user.component');
var users_component_1 = require('./component/users.component');
var auth_guard_service_1 = require("./../../auth/auth-guard.service");
var prevent_unsaved_changes_guard_service_1 = require("./../../auth/prevent-unsaved-changes-guard.service");
exports.usersRouting = router_1.RouterModule.forChild([
    {
        path: 'users/:id',
        component: save_user_component_1.SaveUserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users/new',
        component: save_user_component_1.SaveUserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
]);
//# sourceMappingURL=users.routing.js.map