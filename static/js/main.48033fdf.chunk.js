(this["webpackJsonphw-11-1"]=this["webpackJsonphw-11-1"]||[]).push([[0],{33:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(16),c=r.n(a),i=(r(33),r(27)),o=r(4),s=r(6),u=r(10),l=r.n(u),d=r(15),j="REMOVE_SERVICE",b="CHANGE_ADD_SERVICE_FIELD",p="FETCH_SERVICES_REQUEST",v="FETCH_SERVICES_FAILURE",h="FETCH_SERVICES_SUCCESS",O="IS_LOADING_REQUEST",m="IS_LOADING_FAILURE",f="IS_LOADING_SUCCESS",E="ADD_SERVICES_REQUEST",g="ADD_SERVICES_FAILURE",x="ADD_SERVICES_SUCCESS",y="CHANGE_SERVICE_FIELD",S="CHANGE_SERVICES_REQUEST",C="CHANGE_SERVICES_FAILURE",_="CHANGE_SERVICES_SUCCESS",I="CHANGE_SERVICES_INIT";function N(){return{type:p}}function k(e){return{type:v,payload:{error:e}}}function w(e){return{type:h,payload:e}}function L(){return{type:_}}function R(e){return{type:I,payload:e}}var A=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n,a,c,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:null,t(N()),n=r?"".concat("https://calm-oasis-98972.herokuapp.com/api/services","/").concat(r):"https://calm-oasis-98972.herokuapp.com/api/services",e.prev=3,e.next=6,fetch(n);case 6:if((a=e.sent).ok){e.next=9;break}throw new Error(a.statusText);case 9:return e.next=11,a.json();case 11:c=e.sent,t(r?R(c):w({data:c})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),t(k({error:e.t0.message}));case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(l.a.mark((function e(t,r,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:E}),e.prev=1,e.next=4,fetch("https://calm-oasis-98972.herokuapp.com/api/services",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:r,price:n})});case 4:id?t(L()):(t({type:x}),A(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t((a=e.t0.message,{type:g,payload:{error:a}}));case 10:case"end":return e.stop()}var a}),e,null,[[1,7]])})));return function(t,r,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(t,r,n,a,c,i){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:S}),e.prev=1,e.next=4,fetch("https://calm-oasis-98972.herokuapp.com/api/services",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({id:r,name:n,price:a,content:c})});case 4:e.sent,t(L()),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t((i={error:e.t0.message},{type:C,payload:{error:i}}));case 12:case"end":return e.stop()}var i}),e,null,[[1,8]])})));return function(t,r,n,a,c,i){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,e.next=4,fetch("".concat("https://calm-oasis-98972.herokuapp.com/api/services","/").concat(r),{method:"DELETE"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t((n=e.t0.message,{type:m,payload:{error:n}}));case 9:return e.prev=9,t({type:f}),A(t),e.finish(9);case 13:case"end":return e.stop()}var n}),e,null,[[1,6,9,13]])})));return function(t,r){return e.apply(this,arguments)}}(),T=r(1);function U(e){var t=Object(s.c)((function(e){return e.serviceAdd})),r=t.item,n=t.loading,a=t.error,c=Object(s.b)(),i=function(e){var t=e.target,r=t.name,n=t.value;c(function(e,t){return{type:b,payload:{nameField:e,value:t}}}(r,n))};return Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F(c,r.name,r.price)},children:[a&&Object(T.jsx)("div",{className:"error-msg",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"}),Object(T.jsx)("input",{name:"name",onChange:i,value:r.name}),Object(T.jsx)("input",{name:"price",onChange:i,value:r.price}),!n&&Object(T.jsx)("button",{className:"ui inverted green button",type:"submit",disabled:n,children:"Save"}),n&&Object(T.jsx)("div",{className:"ui active slow green double loader"})]})}var G=r(44),H=r(45);var B=function(e){var t=e.match,r=e.history,a=Object(s.c)((function(e){return e.serviceList})),c=a.items,i=a.loading,o=a.error,u=Object(s.c)((function(e){return e.serviceIsLoadng})),l=u.isLoading,d=(u.isError,Object(s.b)());return Object(n.useEffect)((function(){A(d)}),[d]),i?Object(T.jsx)("div",{className:"ui active slow green double loader"}):o?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"error-msg",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"}),Object(T.jsx)("button",{className:"ui red basic button",onClick:function(){A(d)},children:"Refresh"})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(U,{}),Object(T.jsx)("ul",{children:c&&c.map((function(e){return Object(T.jsxs)("li",{children:[e.name," ",e.price,Object(T.jsx)(G.a,{className:"button btn",onClick:function(){return function(e){r.push("".concat(t.url,"/").concat(e))}(e.id)}}),Object(T.jsx)(H.a,{className:"button",onClick:function(){return function(e){V(d,e)}(e.id)},disabled:l})]},e.id)}))})]})},J=r(28);var Q=function(e){var t=e.match,r=e.history,a=Object(s.c)((function(e){return e.serviceChange})),c=a.item,i=a.chLoading,o=a.chError,u=Object(s.c)((function(e){return e.serviceList})),l=u.loading,d=u.error,j=Object(n.useState)(!0),b=Object(J.a)(j,2),p=b[0],v=b[1],h=Object(s.b)(),O=Number(t.params.id);Object(n.useEffect)((function(){p||i||r.goBack(),p&&(v(!1),A(h,O))}),[h,i]);var m=function(e){var t=e.target,r=t.name,n=t.value;h(function(e,t){return{type:y,payload:{nameField:e,value:t}}}(r,n))};return l?Object(T.jsx)("div",{className:"ui active slow green double loader"}):d?Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"error-msg",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"}),Object(T.jsx)("div",{onClick:function(){r.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),D(h,O,c.name,c.price,c.content)},disabled:i,className:"change-form",children:[Object(T.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(T.jsx)("input",{name:"name",onChange:m,value:c.name}),Object(T.jsx)("label",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),Object(T.jsx)("input",{name:"price",onChange:m,value:c.price}),Object(T.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(T.jsx)("input",{name:"content",onChange:m,value:c.content}),Object(T.jsxs)("div",{className:"buttons",children:[Object(T.jsx)("button",{type:"button",onClick:function(){r.goBack()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),!i&&Object(T.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]}),i&&Object(T.jsx)("div",{className:"ui active slow green double loader"}),o&&Object(T.jsx)("p",{children:o.message})]})};function P(e){var t=window.location.pathname;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(i.a,{children:Object(T.jsxs)(o.d,{children:[Object(T.jsx)(o.b,{path:"".concat(t,"services/:id"),component:Q}),Object(T.jsx)(o.b,{path:"".concat(t,"services"),component:B}),Object(T.jsx)(o.a,{exact:!0,from:"".concat(t),to:"".concat(t,"services")})]})})})}var M=r(14),q=r(2),z={items:[],loading:!1,error:null};var K=r(12),W={item:{name:"",price:""},loading:!1,error:null};var X={item:{id:"",name:"",price:"",content:""},chLoading:!1,chError:null};var Y={isLoading:!1,isError:null};var Z=Object(M.b)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(q.a)(Object(q.a)({},e),{},{loading:!0,error:null});case v:var r=t.payload.error;return Object(q.a)(Object(q.a)({},e),{},{loading:!1,error:r});case h:var n=t.payload.data;return Object(q.a)(Object(q.a)({},e),{},{items:n,loading:!1,error:null});case j:var a=t.payload;return e.items.filter((function(e){return e.id!==a.id}));case I:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,error:null});default:return e}},serviceAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var r=t.payload,n=r.nameField,a=r.value,c=e.item;return Object(q.a)(Object(q.a)({},e),{},{item:Object(q.a)(Object(q.a)({},c),{},Object(K.a)({},n,a))});case E:return Object(q.a)(Object(q.a)({},e),{},{loading:!0,error:null});case x:return Object(q.a)({},W);case g:var i=t.payload.error;return Object(q.a)(Object(q.a)({},e),{},{loading:!1,error:i});default:return e}},serviceChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var r=t.payload,n=r.nameField,a=r.value;return Object(q.a)(Object(q.a)({},e),{},{item:Object(q.a)(Object(q.a)({},e.item),{},Object(K.a)({},n,a))});case S:return Object(q.a)(Object(q.a)({},e),{},{chLoading:!0,chError:null});case C:var c=t.payload.error;return Object(q.a)(Object(q.a)({},e),{},{chLoading:!1,chError:c});case _:return Object(q.a)({},X);case I:var i=t.payload,o=i.id,s=i.name,u=i.price,l=i.content;return Object(q.a)(Object(q.a)({},e),{},{chLoading:!1,chError:null,item:{id:o,name:s,price:u,content:l}});default:return e}},serviceIsLoadng:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(q.a)(Object(q.a)({},e),{},{isLoading:!0});case m:var r=t.payload.error;return Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,isError:r});case f:return Object(q.a)({},Y);default:return e}}}),$=Object(M.c)(Z);c.a.render(Object(T.jsx)(s.a,{store:$,children:Object(T.jsx)(P,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.48033fdf.chunk.js.map