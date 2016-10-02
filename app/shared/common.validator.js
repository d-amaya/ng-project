"use strict";
var CommonValidators = (function () {
    function CommonValidators() {
    }
    CommonValidators.validEmailFormat = function (_control) {
        var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (_control.value && _control.value.length > 0 && !regularExpression.test(_control.value)) {
            return { validEmailFormat: true };
        }
        return null;
    };
    return CommonValidators;
}());
exports.CommonValidators = CommonValidators;
//# sourceMappingURL=common.validator.js.map