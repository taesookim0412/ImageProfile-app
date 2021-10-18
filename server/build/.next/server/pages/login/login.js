"use strict";
(() => {
var exports = {};
exports.id = 329;
exports.ids = [329,572,947];
exports.modules = {

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(447);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_Utilities_GlobalUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(761);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







// No javascript. only raw css.
async function getServerSideProps(context) {
  const globalScope = (0,_configs_Utilities_GlobalUtil__WEBPACK_IMPORTED_MODULE_3__/* .initializeVariablesIfRequired */ .f)();
  const csrfToken = (await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${globalScope.loginHost}/login/createxcsrftoken`)).data;
  globalScope.xCsrfStore.addToCsrfStore(csrfToken);
  return {
    props: {
      csrfToken
    }
  };
}
function Login({
  csrfToken
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        height: "400px",
        width: "400px"
      },
      id: "login-page",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__.LoginForm, {
        csrfToken: csrfToken
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        href: "/login/create",
        children: "Create User"
      })]
    })
  });
}

/***/ }),

/***/ 376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [447,761], () => (__webpack_exec__(874)));
module.exports = __webpack_exports__;

})();