(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){"use strict";var n=c(30),l=c(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(1)),a=(0,n(c(32)).default)(s.createElement("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),"Euro");t.default=a},199:function(e,t,c){"use strict";var n=c(30),l=c(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(1)),a=(0,n(c(32)).default)(s.createElement("path",{d:"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"}),"DriveEta");t.default=a},200:function(e,t,c){"use strict";var n=c(30),l=c(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(1)),a=(0,n(c(32)).default)(s.createElement(s.Fragment,null,s.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),s.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"Schedule");t.default=a},201:function(e,t,c){"use strict";var n=c(30),l=c(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(1)),a=(0,n(c(32)).default)(s.createElement("path",{d:"M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"}),"AirlineSeatReclineNormal");t.default=a},310:function(e,t,c){"use strict";c.r(t);var n=c(1),l=(c(196),c(6)),s=c.n(l),a=c(9),r=c(3),i=(c(197),c(199)),o=c.n(i),d=c(200),u=c.n(d),j=c(201),b=c.n(j),h=c(198),v=c.n(h),O=c(12),m=c.n(O),f=c(20),x=c(5),p=c(0),_=function(){var e=Object(f.b)().userAPI,t=Object(r.a)(e.postalCode,2),c=t[0],l=t[1],i=Object(r.a)(e.minOrder,2)[1],d=Object(r.a)(e.postalData,2),j=d[0],h=d[1],O=Object(n.useState)(!1),_=Object(r.a)(O,2),N=_[0],y=_[1],C=Object(n.useState)(""),M=Object(r.a)(C,2),z=M[0],P=M[1],H=Object(n.useState)(null),S=Object(r.a)(H,2),g=S[0],k=S[1],w=function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/dashboard/onepostalcode/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),y(!1),l(null),h(null),localStorage.removeItem("pcl");case 12:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(!0),w(z).then((function(e){if(e){if(!e.data.code.active)return localStorage.removeItem("pcl"),h(null),i(null),y(!1),void k("Delivery is currently not available at your location right now");e.data.code.active&&(h(e.data.code),i(e.data.code.minOrder),localStorage.setItem("pcl",e.data.code.postalCode),y(!1),l(z))}})).catch((function(e){return console.log("error: ",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g&&setTimeout((function(){k(null)}),2e3),Object(p.jsxs)("div",{className:"home__slider-front",children:[g&&Object(p.jsx)("div",{className:"error__box",children:g}),Object(p.jsxs)("div",{className:"sliderFront__sidebox",style:{display:c?"block":"none"},children:[Object(p.jsxs)("div",{className:"sliderFront__sidebox-line",children:[Object(p.jsx)(v.a,{})," ",Object(p.jsxs)("span",{children:["Delivery Price: ",null===j||void 0===j?void 0:j.deliveryPrice]})]}),Object(p.jsxs)("div",{className:"sliderFront__sidebox-line",children:[Object(p.jsx)(o.a,{})," ",Object(p.jsxs)("span",{children:["Delivery: ",null===j||void 0===j?void 0:j.estimatedTime," minutes"]})]}),Object(p.jsxs)("div",{className:"sliderFront__sidebox-line",children:[Object(p.jsx)(u.a,{})," ",Object(p.jsx)("span",{children:"11:00 AM - 10:00 PM"})]}),Object(p.jsxs)("div",{className:"sliderFront__sidebox-line",children:[Object(p.jsx)(b.a,{})," ",Object(p.jsx)("span",{children:"Takeaway: 30 minutes"})]}),Object(p.jsx)(x.b,{to:"/order",className:"sliderFront__sidebox-btn",children:Object(p.jsx)("div",{className:"sliderFront__order-btn",children:"Order Now!"})})]}),Object(p.jsxs)("div",{className:"home__address-postal-field",style:{display:c?"none":"flex"},children:[Object(p.jsx)("h2",{className:"sliderPostal__title",children:"Find Your Postal Code"}),Object(p.jsxs)("div",{className:"sliderPostalCode__field",children:[Object(p.jsx)("input",{type:"text",className:"sliderPostalCode__input-field",placeholder:"Postal Code",name:"postalCode",value:z,onChange:function(e){return P(e.target.value)}}),Object(p.jsx)("button",{style:{maxHeight:"40px"},className:"sliderPostalCode__find-btn",onClick:N?null:F,children:N?Object(p.jsx)("div",{className:"loadings",children:Object(p.jsx)("div",{})}):"find"})]})]}),Object(p.jsxs)("div",{className:"home__address-field",style:{display:c?"flex":"none"},children:[Object(p.jsx)("h1",{className:"slider__title",children:"The Food You Love"}),Object(p.jsxs)("div",{className:"home__location-buttons",children:[Object(p.jsx)(x.b,{to:"/order",className:"home__location-buttons-link",children:Object(p.jsx)("button",{className:"home__location-buttons-button",children:"Order Now!"})}),Object(p.jsx)(x.b,{to:"/menu",className:"home__location-buttons-link",children:Object(p.jsx)("button",{className:"home__location-buttons-button",children:"Visit Menu!"})})]})]})]})},N=c(34),y=c(4),C=Object(n.lazy)((function(){return c.e(22).then(c.bind(null,308))})),M=Object(n.lazy)((function(){return c.e(16).then(c.bind(null,316))})),z=Object(n.lazy)((function(){return c.e(14).then(c.bind(null,317))})),P=Object(n.lazy)((function(){return c.e(15).then(c.bind(null,318))}));t.default=function(){return Object(p.jsxs)("div",{className:"Home",children:[Object(p.jsx)(_,{}),Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)(y.a,{}),children:Object(p.jsx)(z,{})}),Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)(y.a,{}),children:Object(p.jsx)(P,{})}),Object(p.jsx)(C,{}),Object(p.jsx)(M,{}),Object(p.jsx)(N.a,{})]})}}}]);
//# sourceMappingURL=7.170f5b11.chunk.js.map