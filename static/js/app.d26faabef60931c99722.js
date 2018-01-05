webpackJsonp([12,10],{0:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=a(127),r=n(o),i=a(88),s=n(i),u=a(184),l=n(u);a(168),a(179),a(180);var c=a(208),d=n(c),f=a(125),p=n(f),m=a(124),v=n(m),h=a(185),_=n(h);s.default.use(d.default),s.default.use(l.default),(0,r.default)(v.default).forEach(function(t){return s.default.filter(t,v.default[t])});var g=new d.default({routes:p.default});new s.default({el:"#app",router:g,template:"<App/>",components:{App:_.default}})},4:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(130),r=n(o),i=a(126),s=n(i),u=a(89),l=n(u),c={APIURL:"https://ruby-china.org/api/v3/",getLocalStorage:function(t){if(window.localStorage)return JSON.parse(localStorage.getItem(t))},setLocalStorage:function(t,e){window.localStorage&&localStorage.setItem(t,(0,s.default)(e))},fetch:function(t){(arguments[0]||"object"!==(0,r.default)(arguments[0]))&&(0,l.default)({method:t.method||"GET",url:t.url,data:t.data,params:t.params,headers:{Accept:"application/json",Authorization:"Bearer "+c.readCookie("fe_token")}}).then(function(e){t.successCallback&&t.successCallback(e)}).catch(function(t){alert(t.response.data.error_description)})},getUrlParam:function(t,e){if(!t)return"";e=e||location.search,t=t.replace(/(?=[\\^$*+?.():|{}])/,"\\");var a=new RegExp("(?:[?&]|^)"+t+"=([^?&#]*)","i"),n=e.match(a);return n?n[1]:""},createCookie:function(t,e,a){if(a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var o="; expires="+n.toGMTString()}else var o="";document.cookie=t+"="+e+o+"; path=/"},readCookie:function(t){for(var e=t+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var o=a[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return null},eraseCookie:function(t){createCookie(t,"",-1)}};e.default=c},77:function(t,e,a){a(173);var n=a(1)(a(112),a(201),"data-v-77d863f2",null);t.exports=n.exports},107:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(188),r=n(o),i=a(187),s=n(i);e.default={name:"app",components:{vHeader:r.default,vFooter:s.default}}},108:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(77),r=n(o),i=a(4),s=n(i);e.default={name:"create",props:{isShow:{type:Boolean,required:!0}},data:function(){return{nodes:s.default.getLocalStorage("fe_vue")&&s.default.getLocalStorage("fe_vue").nodes,node_id:2,title:"",content:""}},mounted:function(){},methods:{hide:function(){this.$parent.createVisible=!1,this.title="",this.content="",this.node_id=2},cb:function(t){this.content=t},submit:function(){var t=this;return this.title?this.content?void s.default.fetch({method:"POST",url:s.default.APIURL+"topics",data:{title:this.title,body:this.content,node_id:this.node_id},successCallback:function(e){t.hide(),alert("success")}}):void alert("正文不能为空!"):void alert("标题不能为空!")}},components:{markdown:r.default}}},109:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"v-footer"}},110:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(4),r=n(o),i=a(186),s=n(i),u=a(189),l=n(u);e.default={name:"v-header",data:function(){return{loginVisible:!1,createVisible:!1,loginName:"",avatar_url:""}},mounted:function(){this.loginName=r.default.readCookie("fe_token")&&r.default.getLocalStorage("fe_vue")&&r.default.getLocalStorage("fe_vue").loginName,this.avatar_url=r.default.readCookie("fe_token")&&r.default.getLocalStorage("fe_vue")&&r.default.getLocalStorage("fe_vue").avatar_url},methods:{toggle:function(){this.loginVisible=!this.loginVisible},showCreateForm:function(){return this.loginName?void(this.createVisible=!0):void alert("请先登录")}},components:{Create:s.default,Login:l.default}}},111:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(4),r=n(o);e.default={name:"login",props:{isShow:{type:Boolean,required:!0}},data:function(){return{username:"",password:""}},methods:{hide:function(){this.$parent.loginVisible=!1,this.username="",this.password=""},login:function(){var t=this;r.default.fetch({method:"POST",url:"https://ruby-china.org/oauth/token",data:{client_id:"17c5757d",client_secret:"a9a40bae6681a4d25ca58d03918074ee4c9a42a53b0ad69b6a149f1e38537c92",grant_type:"password",password:this.password,username:this.username},successCallback:function(e){r.default.createCookie("fe_token",e.data.access_token,1),t.fetchUserData()}})},fetchUserData:function(){var t=this;r.default.fetch({url:r.default.APIURL+"users/me",successCallback:function(e){var a=e.data.user;r.default.setLocalStorage("fe_vue",{loginName:a.login,avatar_url:a.avatar_url}),t.$parent.loginName=a.login,t.$parent.avatar_url=a.avatar_url,t.$router.push({name:"home"})}})}}}},112:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(181),r=n(o);e.default={name:"markdown",props:{onchange:{type:Function}},data:function(){return{markdownStr:""}},computed:{output:function(){return(0,r.default)(this.markdownStr,{sanitize:!0})}},methods:{update:function(t){this.markdownStr=t.target.value,this.onchange(this.output)}}}},124:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=a(183),r=n(o);e.formatTime=function(t){if(!t)return"";var e=new r.default;return e.format(t)}},125:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=[{path:"/",name:"home",component:function(t){a.e(7,function(){t(a(78))})}},{path:"/topics/:type",name:"topics",component:function(t){a.e(3,function(){t(a(81))})}},{path:"/topic/:id",name:"t-detail",component:function(t){a.e(8,function(){t(a(80))})}},{path:"/user/:id",name:"user",component:function(t){a.e(9,function(){t(a(87))})},children:[{path:"",name:"u-topics",component:function(t){a.e(4,function(){t(a(86))})}},{path:"replies",name:"u-replies",component:function(t){a.e(2,function(){t(a(85))})}},{path:"favorites",name:"u-favorites",component:function(t){a.e(5,function(){t(a(82))})}},{path:"following",name:"u-following",component:function(t){a.e(0,function(){t(a(84))})}},{path:"followers",name:"u-followers",component:function(t){a.e(1,function(){t(a(83))})}}]},{path:"/node/:id",name:"node",component:function(t){a.e(6,function(){t(a(79))})}}];e.default=n},168:function(t,e){},169:function(t,e){},171:function(t,e){},173:function(t,e){},177:function(t,e){},179:function(t,e){},180:function(t,e){},185:function(t,e,a){a(177);var n=a(1)(a(107),a(206),null,null);t.exports=n.exports},186:function(t,e,a){var n=a(1)(a(108),a(195),null,null);t.exports=n.exports},187:function(t,e,a){a(171);var n=a(1)(a(109),a(194),null,null);t.exports=n.exports},188:function(t,e,a){a(169);var n=a(1)(a(110),a(192),"data-v-133c34a5",null);t.exports=n.exports},189:function(t,e,a){var n=a(1)(a(111),a(198),null,null);t.exports=n.exports},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns app-body"},[a("div",{staticClass:"column is-one-quarter"},[t._m(0),t._v(" "),a("aside",{staticClass:"menu"},[a("ul",{staticClass:"menu-list"},[a("li",[a("router-link",{staticClass:"menu-item",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"menu-item",attrs:{to:{name:"topics",params:{type:"default"}}}},[t._v("Topics")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"menu-item",attrs:{to:{name:"node",params:{id:"25"}}}},[t._v("Jobs")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"menu-item",attrs:{to:{name:"node",params:{id:"23"}}}},[t._v("Homeland")])],1),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"column app-right"},[a("div",{staticClass:"user-info"},[a("a",{staticClass:"button is-link",on:{click:t.showCreateForm}},[t._v("New")]),t._v(" "),t.loginName?t._e():a("a",{staticClass:"button is-link",attrs:{href:"javascript:;"},on:{click:t.toggle}},[t._v("login")]),t._v(" "),t.loginName?a("router-link",{attrs:{to:"/user/"+t.loginName}},[a("img",{staticClass:"avatar",attrs:{src:t.avatar_url,alt:"avatar"}}),t._v(" "),a("strong",[t._v(t._s(t.loginName))])]):t._e()],1),t._v(" "),a("router-view",{staticClass:"view"})],1),t._v(" "),a("login",{attrs:{isShow:t.loginVisible}}),t._v(" "),a("create",{attrs:{isShow:t.createVisible}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("b",[t._v("Ruby")]),t._v(" China")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"menu-item",attrs:{href:"https://gems.ruby-china.org/",target:"_blank"}},[t._v("Gem")])])}]}},194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Made with love by "),a("a",{attrs:{href:"https://twitter.com"}},[t._v("sinchang")])])]),t._v(" "),a("p",[a("a",{staticClass:"icon",attrs:{href:"https://github.com/sinchang/vue-ruby-china"}},[a("i",{staticClass:"fa fa-github"})])])])])])}]}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{attrs:{title:"new topic",width:800,"is-show":t.isShow,transition:"fadeDown","on-ok":t.submit},on:{close:t.hide}},[a("p",{staticClass:"control has-addons"},[a("span",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.node_id,expression:"node_id"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.node_id=e.target.multiple?a:a[0]}}},t._l(t.nodes,function(e){return a("option",{domProps:{value:e.id,textContent:t._s(e.name)}})}))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input is-expanded",attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),a("markdown",{attrs:{onchange:t.cb}})],1)],1)},staticRenderFns:[]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",{attrs:{title:"login","ok-text":"login",width:520,"is-show":t.isShow,transition:"fadeDown","on-ok":t.login},on:{close:t.hide}},[a("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])],1)},staticRenderFns:[]}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("tabs",{attrs:{type:"toggle"}},[a("tab-item",{attrs:{label:"Edit"}},[a("div",{staticClass:"control"},[a("textarea",{staticClass:"textarea",domProps:{value:t.markdownStr},on:{input:t.update}})])]),t._v(" "),a("tab-item",{attrs:{label:"Preview"}},[a("div",{staticClass:"control"},[a("div",{staticClass:"textarea markdown-body",attrs:{placeholder:"Textarea"},domProps:{innerHTML:t._s(t.output)}})])])],1)],1)},staticRenderFns:[]}},206:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-header"),t._v(" "),a("v-footer")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.d26faabef60931c99722.js.map