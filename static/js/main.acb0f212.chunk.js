(this.webpackJsonpspaced=this.webpackJsonpspaced||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(3),i=n.n(s),o=(n(23),n(14)),u=n(17),d=n(5),h=n.n(d),p=n(15),l=n(16),j=n.n(l),x="https://api.spacexdata.com",b=function(e){return{options:{page:e,limit:20,sort:{date_unix:"desc"},populate:{path:"cores",populate:[{path:"core"}]}}}},g=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a,c,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,j.a.post("".concat(x,"/v4/launches/query"),b(n));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)("launches",g,{getFetchMore:function(e){return e.nextPage}}),t=e.status,n=e.data,r=e.error,s=e.isFetching,i=e.fetchMore,d=e.canFetchMore,h=Object(o.a)({loading:s,hasNextPage:!!d,onLoadMore:i});return"loading"===t?Object(a.jsx)("p",{children:"Loading..."}):r?Object(a.jsxs)("span",{children:["Error: ",r.message]}):Object(a.jsxs)("div",{className:"Launches prose","data-testid":"launches-page",children:[Object(a.jsx)("h1",{children:"Launches"}),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{ref:h,"data-testid":"launches-list",children:n&&n.map((function(e){return Object(a.jsx)(c.Fragment,{children:e.docs.map((function(e){return Object(a.jsx)("li",{className:"h-8",children:e.name},"launch".concat(e.id))}))},"page".concat(e.page))}))})})]})},f=function(){return Object(a.jsx)("div",{className:"App container mx-auto",style:{maxWidth:"65ch"},children:Object(a.jsx)(m,{})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.acb0f212.chunk.js.map