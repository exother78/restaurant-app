(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{110:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var r=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price*t.quantity+e}),0)}},122:function(e,t,c){"use strict";var r=c(2),n=c(1),i=(c(123),c(110)),s=c(23),o=c.n(s),a=c(13),l=c(3),d=c(4),u=c(0);t.a=function(){var e=Object(l.g)(),t=Object(a.b)(),c=Object(r.a)(t.basket,2),s=c[0],j=c[1],b=Object(n.useState)(null),O=Object(r.a)(b,2),h=O[0],p=O[1];return h&&setTimeout((function(){p(null)}),2e3),Object(u.jsxs)("div",{className:"order__right-section",children:[Object(u.jsxs)("div",{className:"order__right-section-content",children:[Object(u.jsxs)("h2",{className:"orderTotal__title",children:[null===s||void 0===s?void 0:s.length," items in Cart",Object(u.jsx)(o.a,{style:{color:"#d70f64",fontSize:"xx-large"}})]}),null===s||void 0===s?void 0:s.map((function(e,t){return Object(u.jsxs)("div",{className:"order__total-list",children:[Object(u.jsx)("p",{className:"order__total-title",children:null===e||void 0===e?void 0:e.title}),Object(u.jsxs)("p",{className:"order__total-price",children:[Object(u.jsxs)("span",{className:"order__total-list-text",children:["x",null===e||void 0===e?void 0:e.quantity]}),null===e||void 0===e?void 0:e.price]})]},t)})),Object(u.jsxs)("h3",{className:"order__total",children:[Object(u.jsx)("span",{children:" total "}),parseFloat(Object(i.a)(s)).toFixed(2)]})]}),Object(u.jsxs)("div",{className:"order__total-btns",children:[Object(u.jsx)("button",{className:"order__total-empty-button",onClick:function(){j([])},children:"Empty Cart"}),Object(u.jsx)(d.b,{to:s.length>0?"/checkout":"/order",className:"order__total-checkout-button-link",children:Object(u.jsx)("button",{className:"order__total-checkout-button",onClick:function(){s.length>0&&e("/checkout")},children:"Checkout"})})]})]})}},123:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){"use strict";var r=c(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(c(16)),i=c(0),s=(0,n.default)((0,i.jsx)("path",{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddRounded");t.default=s},210:function(e,t,c){},334:function(e,t,c){"use strict";c.r(t);var r=c(2),n=(c(1),c(99)),i=c(14),s=c(209),o=c.n(s),a=(c(208),c(13)),l=c(0),d=function(e){var t=e.id,c=e.title,s=e.description,d=e.price,u=e.image,j=Object(a.b)(),b=Object(r.a)(j.basket,2),O=b[0],h=b[1];return Object(l.jsx)("div",{className:"product",children:c&&Object(l.jsxs)("div",{className:"product__container",children:[Object(l.jsxs)("div",{className:"product__left-section",children:[Object(l.jsx)("h3",{className:"product__title",children:c}),Object(l.jsx)("p",{className:"product__details",children:s.length>60?s.substr(0,60)+"...":s}),Object(l.jsxs)("div",{className:"product__price",children:["\u20ac"," ",Object(l.jsx)("span",{className:"product__price-subText",children:parseFloat(d).toFixed(2)})]})]}),Object(l.jsxs)("div",{className:"product__right-section",children:[Object(l.jsx)("img",{className:"product__image",src:u,alt:"",loading:"lazy"}),Object(l.jsx)("button",{className:"product__add-button",onClick:function(){var e=O.findIndex((function(e){return e.id===t}));if(-1===e&&h([].concat(Object(i.a)(O),[{id:t,title:c,description:s,price:d,image:u,quantity:1}])),-1!==e){var r=Object(i.a)(O);r[e]=Object(n.a)(Object(n.a)({},r[e]),{},{quantity:r[e].quantity+1}),h(r)}},children:Object(l.jsx)(o.a,{className:"addIcon"})})]})]})})},u=(c(210),c(122)),j=c(5);t.default=function(){var e=Object(a.b)(),t=e.productsAPI,c=e.categoriesAPI,n=Object(r.a)(c.categories,1)[0],i=Object(r.a)(t.products,1)[0];return document.addEventListener("scroll",(function(e){var t=document.querySelector(".order__banner"),c=document.querySelector(".order__header");t&&c&&window.scrollY>t.clientHeight/2.5-1&&(c.style.position="sticky")})),i&&n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"order",children:[Object(l.jsx)("div",{className:"order__banner",children:Object(l.jsx)("img",{src:"https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:""})}),Object(l.jsx)("div",{className:"order__header",children:Object(l.jsx)("div",{className:"order__categories",children:n.map((function(e,t){return Object(l.jsx)("p",{className:"order__category",onClick:function(){document.getElementById(e.name).scrollIntoView({behavior:"smooth",block:"start"})},children:e.name},t)}))})}),Object(l.jsx)("div",{className:"order__allContainer",children:null===n||void 0===n?void 0:n.map((function(e,t){var c;return Object(l.jsxs)("div",{className:"order__container-category",children:[Object(l.jsxs)("div",{className:"order__container-category-data",children:[Object(l.jsx)("h2",{className:"order__container-category-text",id:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name}),Object(l.jsx)("img",{src:null===e||void 0===e||null===(c=e.images)||void 0===c?void 0:c.url,width:"100%",height:"150",alt:""})]}),Object(l.jsx)("div",{className:"order__container",children:i.filter((function(t){return t.category===e.name})).map((function(e,t){return Object(l.jsx)(d,{id:e.product_id,title:e.title,description:e.description,price:e.price,image:e.images.url},t)}))})]},t)}))})]}),Object(l.jsx)("div",{className:"order__right-section-order",children:Object(l.jsx)(u.a,{})}),(!i||0===i.length)&&Object(l.jsx)(j.a,{})]}):Object(l.jsx)(j.a,{})}},99:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var r=c(12);function n(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?n(Object(c),!0).forEach((function(t){Object(r.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}}}]);
//# sourceMappingURL=6.f431e107.chunk.js.map