(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(18),r=c.n(i),j=c(5),o=(c(24),c(25),c(3)),l=c.p+"static/media/member.8baef061.svg",a=c(15),b=c.n(a),u=(c(26),c(0));function O(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){fetch("member/").then((function(e){return e.json()})).then((function(e){s(e.islogin)}),(function(e){console.log(e)}))}));return c?Object(u.jsx)("membercenter",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"\u500b\u4eba\u8cc7\u6599"}),Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("p",{onClick:function(){fetch("member/signout").then((function(e){}),(function(e){}))},children:"\u767b\u51fa"})})]})}):Object(u.jsx)("membercenter",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(j.b,{to:"/register",children:Object(u.jsx)("p",{children:"\u8a3b\u518a"})}),Object(u.jsx)(j.b,{to:"/login",children:Object(u.jsx)("p",{children:"\u767b\u5165"})})]})})}function h(e){var t=e.status,c=e.laterstatus;Object(n.useEffect)((function(){"close"!==c?(b()("membercenter").animate({right:"-100px"},150),setTimeout((function(){s()}),150)):s()}),[t]);var s=function(){switch(t){case"memberCenter":b()("membercenter").animate({right:"0px"},150);break;default:console.log("none")}};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O,{})})}function d(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),a=r[0],b=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("topic",{children:Object(u.jsxs)("h1",{children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("span",{role:"img","aria-label":"message",children:"MemberSystem"})})," "]})}),Object(u.jsx)("icon",{children:Object(u.jsx)("img",{src:l,alt:"member",onClick:function(){return e="memberCenter",b(c),void s(c===e?"close":e);var e}})})]}),Object(u.jsx)(h,{status:c,laterstatus:a})]})}var g=c(11),x=c.n(g),p=c(12),m=c.n(p);c(36);function f(){var e=function(e){console.log(e)};return Object(u.jsx)("tologin",{children:Object(u.jsxs)("tologinlist",{children:[Object(u.jsx)(j.b,{to:"/login",children:Object(u.jsxs)("button",{children:[Object(u.jsx)("img",{src:"https://img.icons8.com/nolan/64/fast-cart.png",alt:"logo"}),Object(u.jsx)("p",{children:"\u5e33\u6236\u767b\u5165"})]})}),Object(u.jsx)(m.a,{clientId:"552111064032-ql39e6pqe5rd5sr86svdphg7vks5rlho.apps.googleusercontent.com",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin",render:function(e){return Object(u.jsxs)("button",{onClick:e.onClick,children:[Object(u.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/google-logo.png"}),Object(u.jsx)("p",{children:"Google \u767b\u5165"})]})}}),Object(u.jsx)(x.a,{appId:"470259040855737",callback:function(e){console.log(e)},render:function(e){return Object(u.jsxs)("button",{onClick:e.onClick,children:[Object(u.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/facebook.png"}),Object(u.jsx)("p",{children:"facebook \u767b\u5165"})]})}})]})})}c(37);var v=c(2);function k(){var e=Object(v.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),l=j[0],a=j[1],b=Object(n.useState)(""),O=Object(o.a)(b,2),h=O[0],d=O[1],g=Object(n.useState)(""),x=Object(o.a)(g,2),p=x[0],m=x[1],f=Object(n.useState)(""),k=Object(o.a)(f,2),C=k[0],S=k[1],w=Object(n.useState)(""),P=Object(o.a)(w,2),y=P[0],W=P[1],E=Object(n.useState)(""),N=Object(o.a)(E,2),F=N[0],I=N[1],T=Object(n.useState)(""),q=Object(o.a)(T,2),J=q[0],_=q[1],A=Object(n.useState)(null),G=Object(o.a)(A,2),H=(G[0],G[1]);return Object(u.jsx)("register",{children:Object(u.jsxs)("registerlistcenter",{children:[Object(u.jsxs)("registerlist",{children:[Object(u.jsx)("p",{children:"UserName\uff1a"}),Object(u.jsxs)("warning",{children:["\xa0",l]}),Object(u.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},placeholder:"UserName"}),Object(u.jsx)("p",{children:"Email\uff1a"}),Object(u.jsxs)("warning",{children:["\xa0",p]}),Object(u.jsx)("input",{value:h,onChange:function(e){return d(e.target.value)},placeholder:"Email"}),Object(u.jsx)("p",{children:"Password\uff1a"}),Object(u.jsxs)("warning",{children:["\xa0",y]}),Object(u.jsx)("input",{value:C,onChange:function(e){return S(e.target.value)},placeholder:"Password"}),Object(u.jsx)("p",{children:"CheckPassword\uff1a"}),Object(u.jsxs)("warning",{children:["\xa0",J]}),Object(u.jsx)("input",{value:F,onChange:function(e){return I(e.target.value)},placeholder:"CheckPassword"})]}),Object(u.jsx)("button",{onClick:function(){var t={userName:s,email:h,password:C,cpassword:F};fetch("member/register",{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){1===t.status?(alert("\u8a3b\u518a\u6210\u529f"),e.push("/")):0===t.status&&(a(t.WuserName),m(t.WemAil),W(t.WpassWord),_(t.WcheckPassWord))}),(function(e){H(e)}))},children:"Register"})]})})}function C(){return Object(u.jsxs)("minsection",{children:[Object(u.jsx)(k,{}),Object(u.jsx)(f,{})]})}c(38);function S(){var e=function(e){console.log(e)};return Object(u.jsx)("tologin",{children:Object(u.jsxs)("tologinlist",{children:[Object(u.jsx)(j.b,{to:"/register",children:Object(u.jsxs)("button",{children:[Object(u.jsx)("img",{src:"https://img.icons8.com/nolan/64/fast-cart.png",alt:"logo"}),Object(u.jsx)("p",{children:"\u8a3b\u518a\u5e33\u6236"})]})}),Object(u.jsx)(m.a,{clientId:"552111064032-ql39e6pqe5rd5sr86svdphg7vks5rlho.apps.googleusercontent.com",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin",render:function(e){return Object(u.jsxs)("button",{onClick:e.onClick,children:[Object(u.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/google-logo.png"}),Object(u.jsx)("p",{children:"Google \u767b\u5165"})]})}}),Object(u.jsx)(x.a,{appId:"470259040855737",callback:function(e){console.log(e)},render:function(e){return Object(u.jsxs)("button",{onClick:e.onClick,children:[Object(u.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/facebook.png"}),Object(u.jsx)("p",{children:"facebook \u767b\u5165"})]})}})]})})}c(39);function w(){var e=Object(v.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),l=j[0],a=j[1],b=Object(n.useState)(""),O=Object(o.a)(b,2),h=O[0],d=O[1],g=Object(n.useState)(""),x=Object(o.a)(g,2),p=x[0],m=x[1];return Object(u.jsx)("login",{children:Object(u.jsxs)("loginlistcenter",{children:[Object(u.jsxs)("loginlist",{children:[Object(u.jsx)("p",{children:"Email\uff1a"}),Object(u.jsxs)("warning",{children:["\xa0",l]}),Object(u.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},placeholder:"Email"}),Object(u.jsx)("p",{children:"Password\uff1a"}),Object(u.jsxs)("warning",{children:["\xa0",p]}),Object(u.jsx)("input",{value:h,onChange:function(e){return d(e.target.value)},placeholder:"Password"})]}),Object(u.jsx)("button",{onClick:function(){var t={email:s,password:h};fetch("member/login",{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){1===t.status?(alert("\u767b\u5165\u6210\u529f"),e.push("/")):0===t.status&&(a(t.WemAil),m(t.WpassWord))}),(function(e){}))},children:"Login"})]})})}function P(){return Object(u.jsxs)("minsection",{children:[Object(u.jsx)(w,{}),Object(u.jsx)(S,{})]})}var y=Object(v.g)((function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(v.c,{children:[Object(u.jsx)(v.a,{exact:!0,path:"/"}),Object(u.jsx)(v.a,{path:"/register",children:Object(u.jsx)(C,{})}),Object(u.jsx)(v.a,{path:"/login",children:Object(u.jsx)(P,{})})]})]})})}));r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(y,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8e427f44.chunk.js.map