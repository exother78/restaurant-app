(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12,17,33],{116:function(e,t,r){"use strict";r.r(t);r(1);var n=r(0);t.default=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{style:{margin:"30px",fontSize:"2rem",fontWeight:"600",color:"red"},children:"404 Page Not Found"})})}},150:function(e,t,r){},170:function(e,t,r){"use strict";r.r(t);var n=r(99),c=r(7),a=r.n(c),s=r(8),i=r(2),o=r(1),u=r.n(o),l=(r(150),r(13)),b=r(10),j=r.n(b),O=r(5),d=r(116),f=r(0),p=Object(o.lazy)((function(){return r.e(22).then(r.bind(null,171))}));t.default=function(){var e=Object(l.b)().userAPI,t=Object(i.a)(e.isAdmin,1)[0],r=Object(o.useState)(null),c=Object(i.a)(r,2),b=c[0],h=c[1],v=Object(l.b)().token,m=Object(o.useState)([]),x=Object(i.a)(m,2),g=x[0],y=x[1],w=Object(o.useCallback)(Object(s.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{Authorization:"Bearer ".concat(v[0])}},e.next=4,j.a.get("/api/user/allorders",t);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),h(e.t0.response.data.error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[v]);return Object(o.useEffect)((function(){v[0]&&w().then((function(e){y(e.data.orders)}))}),[v,w]),b&&setTimeout((function(){h(null)}),2e3),t?Object(f.jsxs)("div",{className:"manageOrders",children:[b&&Object(f.jsx)("div",{className:"error__box",children:b}),Object(f.jsx)("div",{className:"manageOrders__container",children:null===g||void 0===g?void 0:g.map((function(e,t){var r;return Object(f.jsx)(u.a.Fragment,{children:(null===e||void 0===e||null===(r=e.basket)||void 0===r?void 0:r.length)>0&&Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)(O.a,{}),children:Object(f.jsx)(p,Object(n.a)({},e))})},t)}))})]}):Object(f.jsx)(d.default,{})}},329:function(e,t,r){"use strict";r.r(t);r(1);var n=r(170),c=r(0);t.default=function(){return Object(c.jsx)("div",{className:"dashboardHome",children:Object(c.jsx)(n.default,{})})}},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(12);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=12.fe6f0317.chunk.js.map