(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){return o(t.target.value)}})})},j=n(10),d=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__lightSpeedInRight",children:[Object(u.jsx)("img",{alt:e,src:n}),Object(u.jsx)("p",{children:e})]})},l=n(6),p=n.n(l),b=n(8),f=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,c,a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=m3Vjrzv96uAAoBHvM76CO5tkDj8KyBpL"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(u.jsx)("ol",{children:Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})})]})},O=function(){var t=Object(c.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})},g=(n(17),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))});r.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.07d56189.chunk.js.map