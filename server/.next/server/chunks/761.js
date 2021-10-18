"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ initializeVariablesIfRequired)
});

;// CONCATENATED MODULE: ./services/XCSRFStore.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class XCSRFStore {
  constructor() {
    _defineProperty(this, "csrfTokens", new Set());
  }

  addToCsrfStore(token) {
    this.csrfTokens.add(token);
  }

  validateCsrfToken(token) {
    if (!this.csrfTokens.has(token)) {
      return false;
    } else {
      this.csrfTokens.delete(token);
      return true;
    }
  }

}

const xCsrfStore = new XCSRFStore();
/* harmony default export */ const services_XCSRFStore = (xCsrfStore);
;// CONCATENATED MODULE: ./configs/Utilities/GlobalUtil.ts

function initializeVariablesIfRequired() {
  const globalScope = global;

  if (globalScope.initialized === undefined) {
    globalScope.xCsrfStore = services_XCSRFStore;

    if (false) {} else {
      globalScope.loginHost = "http://10.0.0.5";
    }

    globalScope.initialized = true;
  }

  return globalScope;
}

/***/ })

};
;