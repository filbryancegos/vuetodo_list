(function(t){function e(e){for(var n,i,a=e[0],l=e[1],d=e[2],s=0,f=[];s<a.length;s++)i=a[s],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=l;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"36e3":function(t,e,o){},"3c67":function(t,e,o){"use strict";var n=o("bd83"),r=o.n(n);r.a},4:function(t,e){},5565:function(t,e,o){"use strict";var n=o("7c8e"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your First Vue.js App"}}),n("Header"),n("AddTodo",{on:{"add-todo":t.addTodo}}),n("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},c=[],i=o("75fc"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg)+" "),o("span",[t._v(t._s(t.name))])])])},l=[],d={name:"HelloWorld",props:{msg:String},data:function(){return{name:"Fil Bryan!!"}}},u=d,s=(o("d8b1"),o("2877")),f=Object(s["a"])(u,a,l,!1,null,"42feab86",null),p=f.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("p",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},h=[],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v("\n      "+t._s(t.todo.title)+"\n      "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])])},b=[],_={name:"TodoItem",props:{todo:{type:Object,required:!1}},methods:{markComplete:function(){console.log(this.todo.completed=!this.todo.completed)}}},g=_,y=(o("5565"),Object(s["a"])(g,v,b,!1,null,"0816f55f",null)),j=y.exports,T={name:"Todos",components:{TodoItem:j},props:{todos:{type:Array,required:!0}}},O=T,x=Object(s["a"])(O,m,h,!1,null,"079c22da",null),w=x.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Todo List")])])}],C={name:"Header"},E=C,P=(o("3c67"),Object(s["a"])(E,$,k,!1,null,"c1f4e8cc",null)),A=P.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"submit"}})])])},S=[],M={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},W=M,I=(o("b4ce"),Object(s["a"])(W,H,S,!1,null,"28aa1d28",null)),q=I.exports,F=o("bc3a"),J=o.n(F),V=o("1c46"),B={name:"app",components:{HelloWorld:p,Todos:w,Header:A,AddTodo:q},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;J.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(o){return e.todos=e.todos.filter(function(e){return e.id!==t})}).catch(function(t){return V["constants"].log(t)})},addTodo:function(t){var e=this,o=t.title,n=t.completed;J.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(t){return e.todos=[].concat(Object(i["a"])(e.todos),[t.data])}).catch(function(t){return console.log(t)}),this.title=""}},created:function(){var t=this;J.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){return t.todos=e.data}).catch(function(t){return console.log(t)})}},D=B,L=(o("034f"),Object(s["a"])(D,r,c,!1,null,null,null)),N=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)}}).$mount("#app")},"64a9":function(t,e,o){},"723e":function(t,e,o){},"7c8e":function(t,e,o){},b4ce:function(t,e,o){"use strict";var n=o("36e3"),r=o.n(n);r.a},bd83:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d8b1:function(t,e,o){"use strict";var n=o("723e"),r=o.n(n);r.a}});
//# sourceMappingURL=app.45193c9d.js.map