(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{216:function(e,t,r){},304:function(e,t,r){"use strict";r.r(t);var s=r(21),a=r(24),n=r(6),i=r.n(n),c=r(9),l=r(3),u=r(1),o=(r(216),r(12)),p=r.n(o),d=r(4),j=r(0);t.default=function(){var e=Object(u.useState)({firstName:"",lastName:"",email:"",images:"",password:"",confirmPassword:"",postalCode:"",address:"",addressLine2:"",city:""}),t=Object(l.a)(e,2),r=t[0],n=t[1],o=Object(u.useState)(null),m=Object(l.a)(o,2),b=m[0],g=m[1],h=Object(u.useState)(null),x=Object(l.a)(h,2),_=x[0],O=x[1],f=Object(u.useState)(!1),v=Object(l.a)(f,2),N=v[0],y=v[1],w=Object(u.useState)(null),C=Object(l.a)(w,2),S=C[0],P=C[1],k=function(){var e=Object(c.a)(i.a.mark((function e(t){var s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y(!0),r.password===r.confirmPassword){e.next=6;break}return alert("Passwords doesn't match"),y(!1),e.abrupt("return");case 6:s=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/upload",_,{headers:{"Content-Type":"multipart/form-data"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),y(!1),console.log("error occured",e.t0.response.data.error),P(e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=5;break}return e.next=4,p.a.post("/api/user/register",Object(a.a)(Object(a.a)({},r),{},{images:{public_id:t.data.public_id,url:t.data.url}}));case 4:y(!1);case 5:if(t){e.next=9;break}return e.next=8,p.a.post("/api/user/register",Object(a.a)({},r));case 8:y(!1);case 9:localStorage.setItem("login",!0),window.location.href="/",e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),y(!1),P(e.t0.response.data.error),console.log("register function error: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();try{b&&s().then(n),b||n()}catch(l){y(!1)}case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=e.target,r=t.name,i=t.value;n((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(s.a)({},r,i))}))};return S&&setTimeout((function(){P(null)}),2e3),N?Object(j.jsx)(d.a,{}):Object(j.jsxs)("div",{className:"register",children:[S&&Object(j.jsx)("div",{className:"error__box",children:S}),Object(j.jsxs)("form",{className:"form",onSubmit:k,children:[Object(j.jsxs)("div",{className:"register__form",children:[Object(j.jsxs)("div",{className:"register__img",children:[Object(j.jsx)("h3",{style:{letterSpacing:"1.3px",padding:"10px 20px",userSelect:"none"},children:"Choose Profile"}),!b&&Object(j.jsx)("input",{type:"file",className:"register__img-input",onChange:function(e){var t=e.target.files[0];if(!t)return alert("File Doesn't exist");var r=new FormData;r.append("file",t),O(r);var s=new FileReader;s.readAsDataURL(t),s.onloadend=function(){g(s.result)}}}),b&&Object(j.jsx)("img",{style:{userSelect:"none"},src:b,alt:""}),b&&Object(j.jsx)("span",{className:"register__form-clear-img",onClick:function(){O(null),g(null)},children:"Clear Image"})]}),Object(j.jsxs)("div",{className:"register__user",children:[Object(j.jsx)("h3",{style:{letterSpacing:"1.3px",userSelect:"none"},children:"Please Provide Your Info"}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name *",required:!0,className:"register__input",value:r.firstName,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name *",required:!0,className:"register__input",value:r.lastName,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"email",name:"email",placeholder:"Email *",required:!0,className:"register__input",value:r.email,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"password",name:"password",placeholder:"Password *",required:!0,className:"register__input",value:r.password,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Password *",required:!0,className:"register__input",value:r.confirmPassword,onChange:q})})]}),Object(j.jsxs)("div",{className:"register__address",children:[Object(j.jsx)("h3",{style:{letterSpacing:"1.3px",userSelect:"none"},children:"Provide Address"}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"text",name:"address",placeholder:"Address",className:"register__input",value:r.address,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"text",name:"addressLine2",placeholder:"Address line 1",className:"register__input",value:r.addressLine2,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"text",name:"postalCode",placeholder:"Postal Code",className:"register__input",value:r.postalCode,onChange:q})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsxs)("select",{defaultValue:"City",name:"city",className:"register__input",onChange:q,children:[Object(j.jsx)("option",{value:"City",disabled:!0,children:"Select City"}),Object(j.jsx)("option",{value:"Berlin",children:"Berlin"})]})}),Object(j.jsx)("div",{className:"register__input-group",children:Object(j.jsx)("input",{type:"text",name:"country",placeholder:"Country",className:"register__input",value:"Germany",onChange:q})})]})]}),Object(j.jsx)("button",{className:"register__submit-button",type:"submit",children:"Submit"})]})]})}}}]);
//# sourceMappingURL=19.b3ce5e60.chunk.js.map