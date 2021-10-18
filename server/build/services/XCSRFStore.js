"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XCSRFStore = /** @class */ (function () {
    function XCSRFStore() {
        this.csrfTokens = new Set();
    }
    XCSRFStore.prototype.addToCsrfStore = function (token) {
        this.csrfTokens.add(token);
    };
    XCSRFStore.prototype.validateCsrfToken = function (token) {
        if (!this.csrfTokens.has(token)) {
            return false;
        }
        else {
            this.csrfTokens.delete(token);
            return true;
        }
    };
    return XCSRFStore;
}());
var xCsrfStore = new XCSRFStore();
exports.default = xCsrfStore;
