(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),l=n(1),s=(n(13),n(14),n(6)),u=n.n(s),m=(n(15),function(e){var t=e.posts,n=e.setSelectPost,a=e.selectedPostId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"User #".concat(e.userId,": ")),e.title),c.a.createElement("button",{type:"button",className:u()("PostsList__button","button",{"button--active":a===e.id}),onClick:function(){return a===e.id?n(0):n(e.id)}},a===e.id?"Close":"Open"))}))))}),i=n(7),f=(n(16),function(e){var t=e.onAdd,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],s=r[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),i=m[0],f=m[1],d=Object(a.useState)(""),p=Object(l.a)(d,2),E=p[0],b=p[1];return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t(o,i,E),s(""),f(""),b("")}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return s(e.target.value)},required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:i,onChange:function(e){return f(e.target.value)},required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input NewCommentForm__input--textarea",value:E,onChange:function(e){return b(e.target.value)},required:!0})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),d=(n(17),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){return e.json()})).then((function(e){return e.data}))}),p=function(){return d("/posts")},E=(n(18),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))});var b=function(e){return t="/comments/".concat(e),d(t,{method:"DELETE"});var t};function _(e){return t=e,d("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});var t}var h=function(e){var t=e.selectedPostId,n=Object(a.useState)(null),r=Object(l.a)(n,2),o=r[0],s=r[1],u=Object(a.useState)(null),m=Object(l.a)(u,2),p=m[0],h=m[1],v=Object(a.useState)(!1),N=Object(l.a)(v,2),O=N[0],j=N[1];Object(a.useEffect)((function(){var e;(e=t,d("/posts/".concat(e))).then((function(e){return s(e)})),h(null),function(e){return d("/comments?postId=".concat(e))}(t).then((function(e){return h(e.filter((function(e){return null!==e.title})))}))}),[t]);return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),o?c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,o.title)),p?c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__comments"},0===p.length?"No comments yet":c.a.createElement("button",{type:"button",className:"button",onClick:function(){j((function(e){return!e}))}},O?"Show ".concat(p.length," comments"):"Hide ".concat(p.length," comments")),!O&&c.a.createElement("ul",{className:"PostDetails__list"},p.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t;t=e.id,b(t).then((function(){h((function(e){return e.filter((function(e){return e.id!==t}))}))}))}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,{onAdd:function(e,n,a){_({name:e,email:n,body:a,postId:t}).then((function(e){h((function(t){return[].concat(Object(i.a)(t),[e])}))}))}})))):c.a.createElement(E,null)):c.a.createElement(E,null))},v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),u=s[0],i=s[1],f=Object(a.useState)(0),E=Object(l.a)(f,2),b=E[0],_=E[1];Object(a.useEffect)((function(){p().then((function(e){return r(e)})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d("/users/".concat(e))}().then((function(e){return i(e)}))}),[]);var v=function(e){0!==e?function(e){return p().then((function(t){return t.filter((function(t){return t.userId===e}))}))}(e).then((function(e){return r(e)})):p().then((function(e){return r(e)}))};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){return v(+e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),u.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(m,{posts:n,selectedPostId:b,setSelectPost:function(e){return _(e===b?0:e)}})),c.a.createElement("div",{className:"App__content"},0!==b?c.a.createElement(h,{selectedPostId:b}):"No selected post")))};o.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3a1c89cd.chunk.js.map