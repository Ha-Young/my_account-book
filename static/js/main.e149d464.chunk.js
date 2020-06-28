(this["webpackJsonpreact-simple-expensebook"]=this["webpackJsonpreact-simple-expensebook"]||[]).push([[0],{17:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(12),c=t.n(o),i=t(1),u=t(2);function l(){var n=Object(i.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto;\n  margin-top: 64px;\n  margin-bottom: 32px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: 50px;\n"]);return l=function(){return n},n}var f=u.c.div(l());var d=a.a.memo((function(n){var e=n.children;return a.a.createElement(f,null,e)})),b=t(3),m=[];function s(n,e){switch(e.type){case"CREATE":return n.concat(e.newAccountBook);case"REMOVE":return n.filter((function(n){return n.id!==e.id}));case"UPDATE":return console.log(e),n.map((function(n){return n.id===e.updatedAccountBook.id?e.updatedAccountBook:n}));default:throw new Error("unhandled action in accountBookReducer. type : ".concat(e.type))}}var p=Object(r.createContext)(),v=Object(r.createContext)(),j=Object(r.createContext)(),g=Object(r.createContext)();function O(n){var e=n.children,t=Object(r.useReducer)(s,m),o=Object(b.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)(0),l=Object(r.useRef)(m.length+1);return a.a.createElement(p.Provider,{value:c},a.a.createElement(v.Provider,{value:i},a.a.createElement(j.Provider,{value:l},a.a.createElement(g.Provider,{value:u},e))))}function x(){var n=Object(r.useContext)(p);if(!n)throw new Error("Cannot find AccountBookStateContext Provider");return n}function h(){var n=Object(r.useContext)(v);if(!n)throw new Error("Cannot find AccountBookDispatchContext Provider");return n}function E(){var n=Object(r.useContext)(g);if(!n)throw new Error("Cannot find AccountBookSelectCategoryContext Provider");return n}function y(){var n=Object(i.a)(["\n      color: #f03e3e;\n    "]);return y=function(){return n},n}function C(){var n=Object(i.a)(["\n  margin-left: 5px;\n  color: #37b24d;\n  ","\n"]);return C=function(){return n},n}function k(){var n=Object(i.a)(["\n  border-bottom: 1px solid #adb5bd;\n\n  h1 {\n    margin: 0;\n    font-size: 36px;\n  }\n\n  .date {\n    margin-top: 25px;\n    font-size: 21px;\n    font-weight: bold;\n  }\n\n  .all-payment {\n    font-size: 21px;\n    margin-top: 20px;\n    margin-bottom: 25px;\n    font-weight: bold;\n  }\n"]);return k=function(){return n},n}var w=u.c.div(k()),S=u.c.span(C(),(function(n){return n.isMinus&&Object(u.b)(y())}));var z=a.a.memo((function(){var n=x().reduce((function(n,e){return n+e.amount}),0),e=(new Date).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"});return a.a.createElement(w,null,a.a.createElement("h1",null,"\uc624\ub298\uc758 \uc9c0\ucd9c"),a.a.createElement("div",{className:"date"},e),a.a.createElement("div",{className:"all-payment"},"\ucd1d \uc9c0\ucd9c:",a.a.createElement(S,{isMinus:0!==n},-1*n," \uc6d0")))})),A=t(5);function B(){var n=Object(i.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & + & {\n    margin-top: 0.5rem;\n  }\n\n  &:hover {\n    background: #748ffc;\n  }\n"]);return B=function(){return n},n}function R(){var n=Object(i.a)(["\n          display: none;\n        "]);return R=function(){return n},n}function P(){var n=Object(i.a)(["\n          display: block;\n        "]);return P=function(){return n},n}function W(){var n=Object(i.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  ",";\n"]);return W=function(){return n},n}function T(){var n=Object(i.a)(["\n          cursor: pointer;\n          &:hover {\n            background: #748ffc;\n          }\n        "]);return T=function(){return n},n}function D(){var n=Object(i.a)(["\n          background: #3b5bdb;\n          margin-bottom: 2px;\n          cursor: default;\n          &:hover {\n            background: #3b5bdb;\n          }\n        "]);return D=function(){return n},n}function F(){var n=Object(i.a)(["\n  padding: 2.8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  overflow-x: auto;\n  ",";\n"]);return F=function(){return n},n}function I(){var n=Object(i.a)(["\n      background: #868e96;\n      cursor: default;\n      color: white;\n    "]);return I=function(){return n},n}function N(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: space-around;\n  border: 1px solid #adb5bd;\n  border-radius: 3px;\n\n  overflow: auto;\n\n  ",";\n"]);return N=function(){return n},n}var M=u.c.div(N(),(function(n){return n.listview&&Object(u.b)(I())})),Y=u.c.div(F(),(function(n){return n.listview?Object(u.b)(D()):Object(u.b)(T())})),U=u.c.ul(W(),(function(n){return n.listview?Object(u.b)(P()):Object(u.b)(R())})),G=u.c.li(B());function H(n){var e=n.options,t=n.value,o=n.selectBoxStyle,c=n.listviewStyle,i=n.onSelectedChange,u=Object(r.useState)(!1),l=Object(b.a)(u,2),f=l[0],d=l[1],m=Object(r.useState)(t),s=Object(b.a)(m,2),p=s[0],v=s[1],j=Object(r.useRef)(p.id),g=e?e.filter((function(n){return n.id!==p.id})):null,O=Object(r.useCallback)((function(){d(!f)}),[f]);if(null==g)return null;var x=function(n){var t=e.find((function(e){return e.id===parseInt(n.target.id)}));v(t),O(),j!==t.id&&(i&&i(t.id),j.current=t.id)},h=f?c:o;return a.a.createElement(M,{listview:f,style:h},a.a.createElement(Y,{listview:f,onClick:O},p.text," ",a.a.createElement(A.d,null)),a.a.createElement(U,{listview:f},g&&g.map((function(n){return a.a.createElement(G,{key:n.id,id:n.id,onClick:x},n.text)}))))}H.defaultProps={selectBoxStyle:{width:"auto",fontSize:"14px",fontWeight:"400"},listviewStyle:{width:"70px",fontSize:"14px",fontWeight:"400"}};var J=a.a.memo(H),V=[{id:0,text:"\uc804\uccb4",color:"#e7f5ff"},{id:1,text:"\uc2dd\uc0ac",color:"#ffec99"},{id:2,text:"\uc2dd\ub8cc\ud488",color:"#d8f5a2"},{id:3,text:"\uad50\ud1b5",color:"#ffc078"},{id:4,text:"\uc0dd\ud65c",color:"#da77f2"},{id:5,text:"\uc758\ub8cc",color:"#4dabf7"}];function K(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 1px solid #adb5bd;\n\n  padding: 15px 0px;\n  font-size: 21px;\n  font-weight: bold;\n\n  span {\n    margin-right: 10px;\n  }\n"]);return K=function(){return n},n}var L=u.c.div(K());var $=a.a.memo((function(){var n=E(),e=Object(b.a)(n,2),t=(e[0],e[1]),o=Object(r.useCallback)((function(n){t(n)}),[t]);return a.a.createElement(L,null,a.a.createElement("span",null,"\uce74\ud14c\uace0\ub9ac\ubcc4\ub85c \ubcf4\uae30:"),V&&a.a.createElement(J,{options:V,value:V[0],onSelectedChange:o}))})),q=t(4),Q=t(16),X=t(9);function Z(){var n=Object(i.a)(["\n  /* \uacf5\ud1b5 \uc2a4\ud0c0\uc77c */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  padding-left: 1rem;\n  padding-right: 1rem;\n\n  /* \ud06c\uae30 */\n  ","\n\n  /* \uc0c9\uc0c1 */\n  ","\n\n  /* \uae30\ud0c0 */\n  & + & {\n    margin-left: 1rem;\n  }\n\n  ","\n"]);return Z=function(){return n},n}function _(){var n=Object(i.a)(["\n      width: 100%;\n      justify-content: center;\n      & + & {\n        margin-left: 0;\n        margin-top: 1rem;\n      }\n    "]);return _=function(){return n},n}function nn(){var n=Object(i.a)(["\n  ","\n"]);return nn=function(){return n},n}function en(){var n=Object(i.a)(["\n    height: ",";\n    font-size: ",";\n  "]);return en=function(){return n},n}function tn(){var n=Object(i.a)(["\n  ","\n"]);return tn=function(){return n},n}function rn(){var n=Object(i.a)(["\n          color: ",";\n          background: none;\n          border: 1px solid ",";\n          &:hover {\n            background: ",";\n            color: white;\n          }\n        "]);return rn=function(){return n},n}function an(){var n=Object(i.a)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n      &:active {\n        background: ",";\n      }\n      ","\n    "]);return an=function(){return n},n}function on(){var n=Object(i.a)(["\n  ","\n"]);return on=function(){return n},n}var cn=Object(u.b)(on(),(function(n){var e=n.color;return Object(u.b)(an(),e,Object(X.b)(.1,e),Object(X.a)(.1,e),(function(n){return n.outline&&Object(u.b)(rn(),e,e,e)}))})),un={large:{height:"3rem",fontSize:"1.25rem"},medium:{height:"2.25rem",fontSize:"1rem"},small:{height:"1.75rem",fontSize:"0.875rem"}},ln=Object(u.b)(tn(),(function(n){var e=n.size;return Object(u.b)(en(),un[e].height,un[e].fontSize)})),fn=Object(u.b)(nn(),(function(n){return n.fullWidth&&Object(u.b)(_())})),dn=u.c.button(Z(),ln,cn,fn);function bn(n){var e=n.children,t=n.color,r=n.size,o=n.outline,c=n.fullWidth,i=Object(Q.a)(n,["children","color","size","outline","fullWidth"]);return a.a.createElement(dn,Object.assign({color:t,size:r,outline:o,fullWidth:c},i),e)}bn.defaultProps={color:"#4263eb",size:"medium"};var mn=a.a.memo(bn),sn=t(7);function pn(n,e){switch(e.type){case"CHANGE":return Object(q.a)(Object(q.a)({},n),{},Object(sn.a)({},e.name,e.value));case"RESET":return Object(q.a)({},e.initialForm);default:throw new Error("Unhandled action")}}var vn=a.a.memo((function(n){var e=Object(r.useReducer)(pn,n),t=Object(b.a)(e,2),a=t[0],o=t[1];return[a,Object(r.useCallback)((function(n){var e=n.target,t=e.name,r=e.value;o({type:"CHANGE",name:t,value:r})}),[]),Object(r.useCallback)((function(){o({type:"RESET",initialForm:n})}),[n])]}));function jn(){var n=Object(i.a)(["\n  padding: 5px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n"]);return jn=function(){return n},n}function gn(){var n=Object(i.a)(["\n  margin-top: 3rem;\n  display: flex;\n  justify-content: flex-end;\n"]);return gn=function(){return n},n}function On(){var n=Object(i.a)(["\n  width: 320px;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 2px;\n\n  animation-duration: 0.25s;\n  animation-timing-function: ease-out;\n  animation-name: ",";\n  animation-fill-mode: forwards;\n"]);return On=function(){return n},n}function xn(){var n=Object(i.a)(["\n  from {\n    transform: translateY(200px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n"]);return xn=function(){return n},n}var hn=Object(u.d)(xn()),En=u.c.div(On(),hn),yn=u.c.div(gn()),Cn=u.c.input(jn());var kn=function(n){var e=n.onConfirm,t=n.onCancel,o=n.create,c=n.update,i=n.updateObj,u=V.filter((function(n){return 0!==n.id})),l=i?i.title:"",f=i?parseInt(i.amount):0,d=i?u.find((function(n){return n.id===i.category})):u[0],m=Object(r.useRef)(1),s=vn({title:l,payment:f}),p=Object(b.a)(s,3),v=p[0],j=p[1],g=p[2],O=v.title,x=v.payment,h=Object(r.useCallback)((function(n){m.current=n}),[m]),E=Object(r.useCallback)((function(n){if("confirm"===n.target.name){var r={title:O,category:m.current,amount:parseInt(x)};e(r)}else t();g()}),[t,e,x,g,O]);return a.a.createElement(En,null,a.a.createElement("h2",null,"\uc9c0\ucd9c",o&&" \ub4f1\ub85d",c&&" \uc218\uc815"),a.a.createElement("h3",null,"\ub0b4\uc6a9"),a.a.createElement(Cn,{autoFocus:!0,name:"title",value:O,onChange:j}),a.a.createElement("h3",null,"\uae08\uc561"),a.a.createElement(Cn,{type:"number",name:"payment",value:x,onChange:j}),a.a.createElement("h3",null,"\uce74\ud14c\uace0\ub9ac"),a.a.createElement(J,{options:u,value:d,selectBoxStyle:{width:"100%",fontSize:"18px"},listviewStyle:{width:"100%"},onSelectedChange:h}),a.a.createElement(yn,null,a.a.createElement(mn,{color:"gray",name:"cancel",onClick:E},"\ucde8\uc18c"),a.a.createElement(mn,{name:"confirm",onClick:E},o&&" \ub4f1\ub85d",c&&" \uc218\uc815")))};function wn(){var n=Object(i.a)(["\n  margin-top: 3rem;\n  display: flex;\n  justify-content: flex-end;\n"]);return wn=function(){return n},n}function Sn(){var n=Object(i.a)(["\n  width: 320px;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 2px;\n\n  animation-duration: 0.25s;\n  animation-timing-function: ease-out;\n  animation-name: ",";\n  animation-fill-mode: forwards;\n"]);return Sn=function(){return n},n}function zn(){var n=Object(i.a)(["\n  from {\n    transform: translateY(200px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n"]);return zn=function(){return n},n}var An=Object(u.d)(zn()),Bn=u.c.div(Sn(),An),Rn=u.c.div(wn());var Pn=function(n){var e=n.text,t=n.onConfirm,r=n.onCancel;return a.a.createElement(Bn,null,a.a.createElement("h2",null,e),a.a.createElement(Rn,null,a.a.createElement(mn,{color:"gray",name:"cancel",onClick:r},"\ucde8\uc18c"),a.a.createElement(mn,{color:"#f03e3e",name:"confirm",onClick:t},"\uc0ad\uc81c")))};function Wn(){var n=Object(i.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  h1 {\n    margin: 0;\n  }\n  h3 {\n    margin: 0;\n  }\n\n  animation-duration: 0.25s;\n  animation-timing-function: ease-out;\n  animation-name: ",";\n  animation-fill-mode: forwards;\n"]);return Wn=function(){return n},n}function Tn(){var n=Object(i.a)(["\n  from {\n    opacity: 0\n  }\n  to {\n    opacity: 1\n  }\n"]);return Tn=function(){return n},n}var Dn=Object(u.d)(Tn()),Fn=u.c.div(Wn(),Dn);var In=a.a.memo((function(n){var e=n.type,t=n.onConfirm,r=n.onCancel,o=n.updateObj;return a.a.createElement(Fn,null,"create"===e&&a.a.createElement(kn,{create:!0,onConfirm:t,onCancel:r}),"update"===e&&a.a.createElement(kn,{update:!0,updateObj:o,onConfirm:t,onCancel:r}),"remove"===e&&a.a.createElement(Pn,{text:"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",onConfirm:t,onCancel:r}))}));function Nn(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  font-size: 24px;\n  font-weight: bold;\n"]);return Nn=function(){return n},n}function Mn(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n"]);return Mn=function(){return n},n}function Yn(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n"]);return Yn=function(){return n},n}function Un(){var n=Object(i.a)(["\n  color: #f03e3e;\n\n  margin-right: 20px;\n"]);return Un=function(){return n},n}function Gn(){var n=Object(i.a)(["\n  flex: 1;\n  color: #495057;\n"]);return Gn=function(){return n},n}function Hn(){var n=Object(i.a)(["\n  padding: 13px 20px;\n  background-color: ",";\n  border-radius: 10px;\n  font-size: 19px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n"]);return Hn=function(){return n},n}var Jn=u.c.div(Hn(),(function(n){return n.color||"#ffffff"})),Vn=u.c.div(Gn()),Kn=u.c.div(Un()),Ln=u.c.div(Yn()),$n=u.c.div(Mn()),qn=u.c.div(Nn());var Qn=a.a.memo((function(n){var e=n.id,t=n.title,o=n.amount,c=n.category,i=Object(r.useCallback)(V.find((function(n){return n.id===c}))),u=Object(r.useState)(!1),l=Object(b.a)(u,2),f=l[0],d=l[1],m=Object(r.useState)(!1),s=Object(b.a)(m,2),p=s[0],v=s[1],j=h(),g=Object(r.useCallback)((function(){return d(!f)}),[f]),O=Object(r.useCallback)((function(){return v(!p)}),[p]),x=Object(r.useCallback)((function(){j({type:"REMOVE",id:e}),d(!1)}),[e,j]),E=Object(r.useCallback)((function(){d(!1)}),[]),y=Object(r.useCallback)((function(n){n=Object(q.a)({id:e},n),j({type:"UPDATE",updatedAccountBook:n}),v(!1)}),[e,j]),C=Object(r.useCallback)((function(){v(!1)}),[]);return a.a.createElement(a.a.Fragment,null,f&&a.a.createElement(In,{type:"remove",onConfirm:x,onCancel:E}),p&&a.a.createElement(In,{type:"update",onConfirm:y,onCancel:C,updateObj:{id:e,title:t,amount:o,category:c}}),a.a.createElement(qn,null,a.a.createElement(Jn,{color:i.color},i.text),a.a.createElement(Vn,null,t),a.a.createElement(Kn,null,0!==o?"-"+o:"0"," \uc6d0"),a.a.createElement(Ln,{onClick:O},a.a.createElement(A.b,null)),a.a.createElement($n,{onClick:g},a.a.createElement(A.c,null))))}));function Xn(){var n=Object(i.a)(["\n  flex: 1;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]);return Xn=function(){return n},n}var Zn=u.c.div(Xn());var _n=a.a.memo((function(){var n=x(),e=E(),t=Object(b.a)(e,2),r=t[0],o=(t[1],0===r?n:n.filter((function(n){return n.category===r})));return a.a.createElement(Zn,null,o.map((function(n){return a.a.createElement(Qn,{id:n.id,key:n.id,category:n.category,title:n.title,amount:n.amount})})))}));function ne(){var n=Object(i.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: rotate(45deg);\n    "]);return ne=function(){return n},n}function ee(){var n=Object(i.a)(["\n  background: #0c8599;\n  &:hover {\n    background: #15aabf;\n  }\n  &:active {\n    background: #0b7285;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: absolute;\n  right: 2%;\n  bottom: 2%;\n\n  font-size: 60px;\n  color: white;\n  border-radius: 50%;\n\n  border: none;\n  outline: none;\n\n  transition: 0.125s all ease-in;\n  ","\n"]);return ee=function(){return n},n}var te=u.c.button(ee(),(function(n){return n.open&&Object(u.b)(ne())}));var re=a.a.memo((function(){var n=Object(r.useState)(!1),e=Object(b.a)(n,2),t=e[0],o=e[1],c=h(),i=function(){var n=Object(r.useContext)(j);if(!n)throw new Error("Cannot find AccountBookNextIdContext Provider");return n}(),u=Object(r.useCallback)((function(){return o(!t)}),[t]),l=Object(r.useCallback)((function(n){c({type:"CREATE",newAccountBook:Object(q.a)(Object(q.a)({},n),{},{id:i.current})}),i.current+=1,o(!1)}),[c,i]),f=Object(r.useCallback)((function(){o(!1)}),[]);return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(In,{type:"create",onConfirm:l,onCancel:f}),a.a.createElement(te,{onClick:u,open:t},a.a.createElement(A.a,null)))}));function ae(){var n=Object(i.a)(["\n  body{\n    background-color: #dee2e6;\n  }\n"]);return ae=function(){return n},n}var oe=Object(u.a)(ae());var ce=function(){return a.a.createElement(O,null,a.a.createElement(oe,null),a.a.createElement(d,null,a.a.createElement(z,null),a.a.createElement($,null),a.a.createElement(_n,null),a.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e149d464.chunk.js.map