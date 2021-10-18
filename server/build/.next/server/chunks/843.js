"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ validateUsernameAndPassword)
/* harmony export */ });
function validateUsernameAndPassword(username, password) {
  return username !== undefined && password !== undefined && username.length > 4 && username.length < 20 && password.length > 4 && password.length < 20;
}

/***/ }),

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _),
/* harmony export */   "LoginCreateForm": () => (/* binding */ LoginCreateForm)
/* harmony export */ });
/* harmony import */ var _LoginForm_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(487);
/* harmony import */ var _configs_Utilities_ValidationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(443);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function _() {
  return null;
}

async function attemptLogin(e, csrfToken) {
  e.preventDefault();
  const target = e.target;
  const username = target.username.value;

  if (!(0,_configs_Utilities_ValidationUtils__WEBPACK_IMPORTED_MODULE_3__/* .validateUsernameAndPassword */ .t)(username, e.target.password.value)) {
    return;
  } // bcrypt does not work on client side
  // const newPass = await bcrypt.hash((e.target as any).password.value, 10);


  const response = axios__WEBPACK_IMPORTED_MODULE_1___default().post("/login/process_create", {
    username,
    password: e.target.password.value,
    csrfToken
  });
  response.catch(err => {
    //TODO: comment
    return;
  }); // response.then(_ => {
  //     console.log("resorting");
  //     window.location.href = "/home"
  // })
}

function LoginCreateForm({
  csrfToken
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    onSubmit: e => attemptLogin(e, csrfToken),
    id: "form-id",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_LoginForm_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "username",
      type: "text",
      placeholder: "Username"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_LoginForm_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "password",
      type: "password",
      placeholder: "Password"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_LoginForm_Input__WEBPACK_IMPORTED_MODULE_0__.default, {
      name: "xcsrftoken",
      type: "hidden",
      value: csrfToken
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      type: "submit",
      value: "Create"
    })]
  });
}

/***/ }),

/***/ 487:
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

/***/ })

};
;