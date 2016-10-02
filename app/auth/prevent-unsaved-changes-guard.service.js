"use strict";
var PreventUnsavedChangesGuard = (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component, route, state) {
        if (component.hasUnsavedChanges()) {
            return confirm("Are you sure you want to leave this page?");
        }
        return true;
    };
    return PreventUnsavedChangesGuard;
}());
exports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;
//# sourceMappingURL=prevent-unsaved-changes-guard.service.js.map