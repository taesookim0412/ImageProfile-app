(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{1443:function(n,e,t){"use strict";function r(n,e){return void 0!==n&&void 0!==e&&n.length>4&&n.length<20&&e.length>4&&e.length<20}t.d(e,{t:function(){return r}})},5487:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(5893);function u(n){return(0,r.jsx)("input",{type:n.type,name:n.name,value:n.value})}},1447:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l},LoginForm:function(){return d}});var r=t(5861),u=t(7757),o=t.n(u),a=t(5487),i=t(1443),s=t(9669),c=t.n(s),f=t(5893);function l(){return null}function p(){return(p=(0,r.Z)(o().mark((function n(e,t){var r,u,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r=e.target,u=r.username.value,(0,i.t)(u,e.target.password.value)){n.next=5;break}return n.abrupt("return");case 5:(a=c().post("/login/process_login",{username:u,password:e.target.password.value,csrfToken:t})).catch((function(n){})),a.then((function(n){window.location.href="/home"}));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){var e=n.csrfToken;return(0,f.jsxs)("form",{onSubmit:function(n){return function(n,e){return p.apply(this,arguments)}(n,e)},id:"form-id",children:[(0,f.jsx)(a.default,{name:"username",type:"text",placeholder:"Username"}),(0,f.jsx)(a.default,{name:"password",type:"password",placeholder:"Password"}),(0,f.jsx)(a.default,{name:"xcsrftoken",type:"hidden",value:e}),(0,f.jsx)("input",{type:"submit",value:"login"})]})}},2368:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/LoginForm/LoginForm",function(){return t(1447)}])}},function(n){n.O(0,[988,774,888,179],(function(){return e=2368,n(n.s=e);var e}));var e=n.O();_N_E=e}]);