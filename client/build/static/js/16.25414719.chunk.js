(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{146:function(e,t,c){},147:function(e,t,c){"use strict";var s=c(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(c(37)),r=c(0),d=(0,n.default)((0,r.jsx)("path",{d:"M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"}),"ArrowForwardIosRounded");t.default=d},168:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(1),r=(c(146),c(147)),d=c.n(r),j=c(0);t.default=function(e){var t=e.basket,c=e.postalCode,r=e.address,i=e.email,a=e.name,l=e.lastName,b=e.time,h=Object(n.useState)(null),O=Object(s.a)(h,2),x=O[0],o=O[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),f=m[0],p=m[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),y=v[0],_=v[1];Object(n.useEffect)((function(){if(b){var e=new Date(b).getTime(),t=(new Date).getTime()-36e5;_(e>t),o(new Date(b).toLocaleString())}}),[b]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"manageOrders__box",onClick:function(){p(!f)},children:[Object(j.jsxs)("table",{className:"manageOrders__box-first-table",style:{background:f?"#ddd":"#eee"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"name"}),Object(j.jsx)("td",{children:"email"}),Object(j.jsx)("td",{children:"address"}),Object(j.jsx)("td",{children:"Postal Code"}),Object(j.jsx)("td",{children:"date"}),Object(j.jsx)("td",{})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsxs)("th",{children:[a+" "+l," "]}),Object(j.jsx)("th",{style:{textTransform:"lowercase"},children:i}),Object(j.jsxs)("th",{children:[r," "]}),Object(j.jsx)("th",{children:c}),Object(j.jsx)("th",{style:{fontSize:"12px",letterSpacing:".2px"},children:b?x:""}),Object(j.jsx)("th",{children:Object(j.jsx)(d.a,{style:{transform:f?"rotate(90deg)":"none",transition:"transform .3s ease"}})})]})})]}),Object(j.jsx)("div",{className:"manageOrders__box-description",style:{maxHeight:f?"400px":"0"},children:Object(j.jsxs)("table",{className:"manageOrders__box-second-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Items"}),Object(j.jsx)("td",{children:"Price"}),Object(j.jsx)("td",{children:"instructions"}),Object(j.jsx)("td",{children:"Quantity"}),Object(j.jsx)("td",{})]})}),Object(j.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.title}),Object(j.jsx)("th",{children:e.price}),Object(j.jsx)("th",{children:e.description}),Object(j.jsx)("th",{children:e.quantity}),Object(j.jsx)("th",{children:y?"Pending":"Delivered"})]},t)}))})]})})]})})}}}]);
//# sourceMappingURL=16.25414719.chunk.js.map