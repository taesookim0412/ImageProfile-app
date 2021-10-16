"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459,705];
exports.modules = {

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./pages/Login/LoginForm/LoginForm.tsx
var LoginForm = __webpack_require__(588);
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
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/login.tsx







// No javascript. only raw css.
async function getServerSideProps(context) {
  if (global.xCsrfStore === undefined) global.xCsrfStore = services_XCSRFStore;
  const csrfToken = (await external_axios_default().get("http://localhost:5000/login/createxcsrftoken")).data;
  global.xCsrfStore.addToCsrfStore(csrfToken);
  context.req.session['X-CSRF-TOKEN'] = csrfToken;
  return {
    props: {
      csrfToken
    }
  };
}
function Login({
  csrfToken
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        height: "400px",
        width: "400px"
      },
      id: "login-page",
      children: /*#__PURE__*/jsx_runtime_.jsx(LoginForm.default, {
        csrfToken: csrfToken
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => alert("OKAY!"),
      children: "Click me!!"
    })]
  }); // return (
  //     <Layout>
  //         <div style={{height: "400px", width: "400px"}} id={"login-page"}>
  //             <LoginForm csrf={csrf}/>
  //         </div>
  //         <button onClick={() => alert("OKAY!")}>Click me!!</button>
  //     </Layout>
  // )
} // export default function Login({csrf}:formProps) {
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [588], () => (__webpack_exec__(851)));
module.exports = __webpack_exports__;

})();