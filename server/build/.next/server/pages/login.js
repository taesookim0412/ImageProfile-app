"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459,159,705];
exports.modules = {

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // import "./LoginForm.scss"



function LoginForm(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: "text",
      placeholder: "Username"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: "text",
      placeholder: "Password"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: "hidden",
      value: props.csrf
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
      type: "submit",
      value: "Login"
    })]
  });
}

/***/ }),

/***/ 133:
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
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./views/Layout.tsx





function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "ImageProfile"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      })]
    }), props.children]
  });
}
;// CONCATENATED MODULE: ./pages/login.tsx



async function getServerSideProps() {
  // const csrf_token = get_random_token_from_server();
  const csrf = "$123456789";
  return {
    props: {
      csrf
    }
  };
}
function Login({
  csrf
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "login-page",
      children: /*#__PURE__*/jsx_runtime_.jsx(LoginForm.default, {
        csrf: csrf
      })
    })
  });
}

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
var __webpack_exports__ = __webpack_require__.X(0, [471], () => (__webpack_exec__(133)));
module.exports = __webpack_exports__;

})();