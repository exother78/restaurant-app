(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{147:function(e,t,c){"use strict";var a=c(31),s=c(19),l=c(3),n=(c(1),c(148),c(15)),r=c(0);t.a=function(e){var t=e.id,c=e.title,i=e.description,o=e.price,d=e.image,u=(e.removeID,e.quantity),j=Object(n.b)(),h=Object(l.a)(j.basket,2),b=h[0],m=h[1];return Object(r.jsx)("div",{className:"cart__product",children:Object(r.jsxs)("div",{className:"cart__product-container",children:[Object(r.jsx)("div",{className:"cart__product-image-container",children:Object(r.jsx)("img",{src:d,alt:"",className:"cart__product-image"})}),Object(r.jsxs)("div",{className:"cart__product-text-section",children:[Object(r.jsx)("h3",{className:"cart__product-title",children:c}),Object(r.jsx)("p",{className:"cartProduct__description",children:i.substring(0,60)}),Object(r.jsxs)("p",{className:"cart__product-price",children:["\u20ac ",o]})]}),Object(r.jsxs)("div",{className:"cart__product-price-incre",children:[Object(r.jsx)("button",{type:"button",className:"cartProduct__minus cartProduct__same",onClick:function(){var e=b.findIndex((function(e){return e.id===t}));if(-1!==e){if(b[e].quantity>1){var c=Object(s.a)(b);c[e]=Object(a.a)(Object(a.a)({},c[e]),{},{quantity:c[e].quantity-1}),m(c)}if(1===b[e].quantity){var l=Object(s.a)(b);l.splice(e,1),m(l)}}},children:"-"}),Object(r.jsx)("span",{className:"cartProduct__quantity cartProduct__same",children:u}),Object(r.jsx)("button",{type:"button",className:"cartProduct__plus cartProduct__same",onClick:function(){var e=b.findIndex((function(e){return e.id===t}));if(-1!==e){var c=Object(s.a)(b);c[e]=Object(a.a)(Object(a.a)({},c[e]),{},{quantity:c[e].quantity+1}),m(c)}},children:"+"})]})]})})}},148:function(e,t,c){},215:function(e,t,c){},216:function(e,t,c){"use strict";var a=c(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(c(40)),l=c(0),n=(0,s.default)((0,l.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.default=n},323:function(e,t,c){"use strict";c.r(t);var a=c(31),s=c(3),l=c(1),n=(c(215),c(15)),r=c(147),i=c(23),o=c(5),d=c(216),u=c.n(d),j=c(0);t.default=function(){var e,t=Object(n.b)(),c=Object(n.b)().userAPI,d=Object(s.a)(c.postalCode,2),h=d[0],b=d[1],m=Object(s.a)(t.basket,1)[0],p=Object(s.a)(c.address,2),O=p[0],_=p[1],x=Object(s.a)(c.building,2),v=x[0],f=x[1],y=Object(s.a)(c.checkEmail,2),g=y[0],k=y[1],N=Object(s.a)(c.checkName,2),P=N[0],C=N[1],q=Object(s.a)(c.checkPhone,2),E=q[0],F=q[1],w=Object(l.useState)(""),I=Object(s.a)(w,2),A=I[0],D=I[1],T=Object(l.useState)(!0),S=Object(s.a)(T,2),M=S[0],B=S[1];return A&&setTimeout((function(){D(null)}),2e3),Object(l.useEffect)((function(){h&&O&&v&&P&&g&&E&&0!==m.length||B(!0),h&&O&&v&&P&&g&&E&&m.length>0&&B(!1)}),[v,h,m,O,M,P,g,E]),Object(j.jsxs)("div",{className:"checkout",children:[A&&Object(j.jsx)("div",{className:"error__box",children:A}),Object(j.jsx)("div",{className:"errorShowPayment",style:{position:"relative",display:M?"flex":"none",justifyContent:"center",color:"red",fontWeight:"600",letterSpacing:".7px",transition:"all .3s ease-in"},children:Object(j.jsx)("p",{children:"* Please fill the Complete details to proceed payment "})}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"checkout__categories",style:{marginTop:"20px"},children:[Object(j.jsxs)("div",{className:"checkout__category",children:[Object(j.jsx)("div",{className:"checkout__category-title",children:Object(j.jsx)("h2",{children:"Delivery Address"})}),Object(j.jsxs)("div",{className:"checkout__category-details",children:[Object(j.jsxs)("div",{className:"checkout__form-group",children:[Object(j.jsxs)("label",{htmlFor:"address",style:{display:"flex",justifyContent:"space-between"},children:["Address",Object(j.jsx)("span",{className:"checkout__form-group-span",style:{display:0===(null===O||void 0===O?void 0:O.length)?"block":"none"},children:"Enter Address*"})]}),Object(j.jsx)("input",{type:"text",name:"address",required:!0,value:O||"",placeholder:"eg. Dusseldorf",onChange:function(e){return _(e.target.value)}})]}),Object(j.jsxs)("div",{className:"checkout__form-group",children:[Object(j.jsxs)("label",{htmlFor:"building",children:["Enter Building name or Apartment, floor",Object(j.jsx)("span",{className:"checkout__form-group-span",style:{display:0===(null===v||void 0===v?void 0:v.length)?"block":"none"},children:"Enter Building, floor*"})]}),Object(j.jsx)("input",{type:"text",name:"building",required:!0,value:v||"",placeholder:"eg. building #01 floor 2, flat 34",onChange:function(e){return f(e.target.value)}})]}),Object(j.jsxs)("div",{className:"checkout__form-group",children:[Object(j.jsxs)("label",{htmlFor:"postalCode",children:["Postal Code",Object(j.jsx)("span",{className:"checkout__form-group-span",style:{display:0===(null===h||void 0===h?void 0:h.length)?"block":"none"},children:"Enter Postal Code*"})]}),Object(j.jsx)("input",{type:"text",name:"postalCode",required:!0,value:h||"",placeholder:"Postal Code",onChange:function(e){b(e.target.value)}})]}),Object(j.jsxs)("div",{className:"checkout__form-group",children:[Object(j.jsxs)("label",{htmlFor:"checkName",children:["Full Name",Object(j.jsx)("span",{className:"checkout__form-group-span",style:{display:0===(null===P||void 0===P?void 0:P.length)?"block":"none"},children:"Enter Full Name*"})]}),Object(j.jsx)("input",{type:"text",name:"checkName",required:!0,value:P||"",placeholder:"Full Name",onChange:function(e){return C(e.target.value)}})]}),Object(j.jsxs)("div",{className:"checkout__form-group",children:[Object(j.jsxs)("label",{htmlFor:"checkEmail",children:["Email",Object(j.jsx)("span",{className:"checkout__form-group-span",style:{display:0===(null===g||void 0===g?void 0:g.length)?"block":"none"},children:"Enter Email*"})]}),Object(j.jsx)("input",{type:"text",name:"checkEmail",required:!0,value:g||"",placeholder:"Postal Code",onChange:function(e){return k(e.target.value)}})]}),Object(j.jsxs)("div",{className:"checkout__form-group",children:[Object(j.jsxs)("label",{htmlFor:"checkPhone",children:["Phone Number",Object(j.jsx)("span",{className:"checkout__form-group-span",style:{display:0===(null===E||void 0===E?void 0:E.length)?"block":"none"},children:"Enter Your Phone Number*"})]}),Object(j.jsx)("input",{type:"text",name:"checkPhone",required:!0,value:E||"",placeholder:"Phone Number",onChange:function(e){return F(e.target.value)}})]})]})]}),Object(j.jsxs)("div",{className:"checkout__category",children:[Object(j.jsx)("div",{className:"checkout__category-title",children:Object(j.jsx)("h2",{children:"Review Items and Delivery"})}),Object(j.jsx)("div",{className:"checkout__category-details",style:{flexWrap:"wrap"},children:null===m||void 0===m?void 0:m.map((function(e,t){return Object(l.createElement)(r.a,Object(a.a)(Object(a.a)({},e),{},{removeID:t,key:t}))}))})]}),Object(j.jsxs)("div",{className:"checkout__category",children:[Object(j.jsx)("div",{className:"checkout__category-title",children:Object(j.jsx)("h2",{children:"Payment Methods"})}),Object(j.jsx)("div",{className:"checkout__category-details",children:Object(j.jsx)("div",{className:"checkout__payment-section",children:Object(j.jsxs)("h2",{children:["Total",Object(j.jsx)("span",{className:"checkout__payment-section-total"}),null===(e=parseFloat(Object(i.a)(m)))||void 0===e?void 0:e.toFixed(2)," \u20ac"]})})})]}),Object(j.jsx)("button",{type:"submit",onClick:function(e){return e.preventDefault()},className:"checkout__proceedToPay",children:Object(j.jsxs)(o.b,{className:"checkout__proceedToPay-link",to:!M&&"/paymentoptions",children:["Proceed To Pay",Object(j.jsx)("span",{children:Object(j.jsx)(u.a,{})})]})})]})})]})}}}]);
//# sourceMappingURL=7.84b7a3fa.chunk.js.map