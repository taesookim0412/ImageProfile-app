(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{1443:function(n,e,t){"use strict";function r(n,e){return void 0!==n&&void 0!==e&&n.length>4&&n.length<20&&e.length>4&&e.length<20}t.d(e,{t:function(){return r}})},3843:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l},LoginCreateForm:function(){return d}});var r=t(5861),u=t(7757),o=t.n(u),a=t(5487),s=t(1443),i=t(9669),c=t.n(i),f=t(5893);function l(){return null}function p(){return(p=(0,r.Z)(o().mark((function n(e,t){var r,u,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r=e.target,u=r.username.value,(0,s.t)(u,e.target.password.value)){n.next=5;break}return n.abrupt("return");case 5:(a=c().post("/login/process_create",{username:u,password:e.target.password.value,csrfToken:t})).catch((function(n){console.log(n)})),a.then((function(n){console.log("ok")}));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){var e=n.csrfToken;return(0,f.jsxs)("form",{onSubmit:function(n){return function(n,e){return p.apply(this,arguments)}(n,e)},id:"form-id",children:[(0,f.jsx)(a.default,{name:"username",type:"text",placeholder:"Username"}),(0,f.jsx)(a.default,{name:"password",type:"password",placeholder:"Password"}),(0,f.jsx)(a.default,{name:"xcsrftoken",type:"hidden",value:e}),(0,f.jsx)("input",{type:"submit",value:"Create"})]})}},5487:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(5893);function u(n){return(0,r.jsx)("input",{type:n.type,name:n.name,value:n.value})}},6804:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/LoginCreateForm/LoginCreateForm",function(){return t(3843)}])}},function(n){n.O(0,[988,774,888,179],(function(){return e=6804,n(n.s=e);var e}));var e=n.O();_N_E=e}]);