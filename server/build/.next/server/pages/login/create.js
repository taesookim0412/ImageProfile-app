"use strict";
(() => {
var exports = {};
exports.id = 895;
exports.ids = [895,572,947];
exports.modules = {

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_Utilities_GlobalUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(761);
/* harmony import */ var _LoginCreateForm_LoginCreateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(843);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






// No javascript. only raw css.
async function getServerSideProps(context) {
  const globalScope = (0,_configs_Utilities_GlobalUtil__WEBPACK_IMPORTED_MODULE_2__/* .initializeVariablesIfRequired */ .f)();
  const csrfToken = (await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${globalScope.loginHost}/login/createxcsrftoken`)).data;
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
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      style: {
        height: "400px",
        width: "400px"
      },
      id: "login-page",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoginCreateForm_LoginCreateForm__WEBPACK_IMPORTED_MODULE_3__.LoginCreateForm, {
        csrfToken: csrfToken
      })
    })
  }); // return (
  //     <Layout>
  //         <div style={{height: "400px", width: "400px"}} id={"login-page"}>
  //             <LoginForm csrf={csrf}/>
  //         </div>
  //         <button onClick={() => alert("OKAY!")}>Click me!!</button>
  //     </Layout>
  // )
} // export default function login({csrf}:formProps) {
//     return (
//         <Layout>
//             <button onClick={() => alert("Okay!")}>Click me!!</button>
//         {/*<div id={"login-page"}>*/}
//         {/*    <LoginForm csrf={csrf}/>*/}
//         {/*</div>*/}
//         </Layout>
//     )
// }

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
var __webpack_exports__ = __webpack_require__.X(0, [843,761], () => (__webpack_exec__(7)));
module.exports = __webpack_exports__;

})();