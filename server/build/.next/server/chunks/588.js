"use strict";
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Input(props) {
  function handleChange(setState, newString) {
    setState(newString);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
    type: props.type,
    name: props.name,
    value: props.value
  });
}

/***/ }),

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function LoginForm({
  csrfToken
}) {
  // function attemptLogin({csrfToken}: formInput, username:string, password:string){
  //     const response = fetch("process_login", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({username,
  //             password,
  //             csrfToken})})
  //     response.then((res) => {
  //         console.log(res);
  //     })
  // }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    action: "process_login",
    method: "POST",
    id: "form-id",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "username",
      type: "text",
      placeholder: "Username"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "password",
      type: "text",
      placeholder: "Password"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "xcsrftoken",
      type: "hidden",
      value: csrfToken
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
      type: "submit",
      value: "login"
    })]
  });
}

/***/ })

};
;