webpackJsonp([83],{"/7A/":function(e,t){},"1dBC":function(e,t){},"6k2e":function(e,t,n){"use strict";function o(e){n("OibT")}function a(e){n("prwc")}function s(e){n("1dBC")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),c=n("NYxO"),u={created:function(){this.getBreadcrumb()},data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return e.name}),t=e[0];t&&"首页"!==t.name&&(e=[{path:"/dashboard",name:"首页"}].concat(e)),this.levelList=e}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,function(t,o){return t.name?n("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||o==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v("\n        "+e._s(t.name)+"\n      ")]):n("router-link",{attrs:{to:t.redirect||t.path}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"dashboard"==t.name,expression:"item.name == 'dashboard'"}],staticClass:"fa fa-home"}),e._v("\n        "+e._s(t.name)+"\n      ")])],1):e._e()}))],1)},d=[],l={render:p,staticRenderFns:d},m=l,h=n("VU/8"),f=o,v=h(u,m,!1,f,"data-v-2b4feaed",null),g=v.exports,w={name:"hamburger",props:{isActive:{type:Boolean,default:!1},toggleClick:{type:Function,default:null}}},k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{staticClass:"wscn-icon hamburger",class:{"is-active":e.isActive},attrs:{t:"1492500959545",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1691","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},on:{click:e.toggleClick}},[n("path",{attrs:{d:"M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z","p-id":"1692"}}),e._v(" "),n("path",{attrs:{d:"M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z","p-id":"1693"}}),e._v(" "),n("path",{attrs:{d:"M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z","p-id":"1694"}})])])},b=[],_={render:k,staticRenderFns:b},y=_,S=n("VU/8"),j=a,E=S(w,y,!1,j,"data-v-3ffa8678",null),T=E.exports,O={components:{Breadcrumb:g,Hamburger:T},data:function(){return{}},computed:i()({},Object(c.b)(["sidebar","username"])),methods:{toggleSideBar:function(){this.$store.dispatch("toggleSideBar")},logout:function(){this.$store.dispatch("LogOut").then(function(){location.reload()})}}},x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[n("hamburger",{staticClass:"hamburger-container",attrs:{toggleClick:e.toggleSideBar,isActive:e.sidebar.opened}}),e._v(" "),n("breadcrumb",{staticClass:"breadcrumb-container"}),e._v(" "),n("div",{staticClass:"right-menu"},[n("el-dropdown",{staticClass:"avatar-container right-menu-item"},[n("div",{staticClass:"avatar-wrapper"},[n("el-button",{attrs:{type:"success",round:"",size:"mini"}},[e._v(e._s(e.username)+" "),n("i",{staticClass:"el-icon-arrow-down"})])],1),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[n("i",{staticClass:"fa fa-home"}),e._v("\n            Home\n          ")])],1),e._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:e.logout}},[n("i",{staticClass:"fa fa-power-off"}),e._v("\n            Logout\n          ")])])],1)],1)],1)],1)},I=[],V={render:x,staticRenderFns:I},M=V,C=n("VU/8"),R=s,L=C(O,M,!1,R,"data-v-08c605b5",null);t.default=L.exports},"75bo":function(e,t){},A66B:function(e,t,n){e.exports=function(e){return function(){return n("Opzk")("./"+e+".vue")}}},AkUR:function(e,t,n){"use strict";function o(e){n("TI3O")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("6k2e"),s=n("WTox"),r=n("Vg/Y"),i=n("BoPo"),c={name:"layout",components:{Navbar:a.default,Sidebar:s.default,AppMain:i.default,TagsView:r.default},computed:{sidebar:function(){return this.$store.state.app.sidebar}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:{hideSidebar:!e.sidebar.opened}},[n("sidebar",{staticClass:"sidebar-container"}),e._v(" "),n("div",{staticClass:"main-container"},[n("navbar"),e._v(" "),n("tags-view"),e._v(" "),n("app-main")],1)],1)},p=[],d={render:u,staticRenderFns:p},l=d,m=n("VU/8"),h=o,f=m(c,l,!1,h,"data-v-289ec47c",null);t.default=f.exports},BoPo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"AppMain",computed:{cachedViews:function(){return this.$store.state.app.cachedViews}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main",staticStyle:{"min-height":"100%"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",{attrs:{include:e.cachedViews}},[n("router-view")],1)],1)],1)},s=[],r={render:a,staticRenderFns:s},i=r,c=n("VU/8"),u=c(o,i,!1,null,null,null);t.default=u.exports},D4uH:function(e,t,n){"use strict";function o(){return"fa-"+(i++).toString(16)}function a(e){n("cJIv")}var s={},r={name:"icon",props:{name:{type:String,validator:function(e){return e?e in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,n=e.height;return Math.max(t,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(e,n){var a=o();return t[n]=a,' id="'+a+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,n,o,a){var s=n||a;return s&&t[s]?"#"+t[s]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,n=0;this.$children.forEach(function(e){t=Math.max(t,e.width),n=Math.max(n,e.height)}),this.childrenWidth=t,this.childrenHeight=n,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(n-e.height)/2})}},register:function(e){for(var t in e){var n=e[t];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),s[t]=n}},icons:s},i=870711,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,o){return n("path",e._b({key:"path-"+o},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,o){return n("polygon",e._b({key:"polygon-"+o},"polygon",t,!1))}):e._e(),e._v("\b\n    "),e.icon&&e.icon.raw?[n("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},u=[],p={render:c,staticRenderFns:u},d=p,l=n("VU/8"),m=a,h=l(r,d,!1,m,null,null);t.a=h.exports},EG2h:function(e,t){Array.prototype.indexItem=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1},Array.prototype.remove=function(e){var t=this.indexItem(e);t>-1&&this.splice(t,1)}},IcnI:function(e,t,n){"use strict";function o(e){return Object(y.a)({url:j.a.login,method:"post",data:e})}function a(){return Object(y.a)({url:j.a.logout,method:"get"})}function s(e){var t={username:e};return Object(y.a)({url:j.a.users,method:"get",params:t})}function r(e,t){return!t.name||void 0!==e[t.name]&&e[t.name]}function i(e,t){return e.filter(function(e){return!!r(t,e)&&(e.children&&e.children.length&&(e.children=i(e.children,t)),!0)})}var c=n("7+uW"),u=n("NYxO"),p=n("Gu7T"),d=n.n(p),l=n("//Fk"),m=n.n(l),h=n("BO1k"),f=n.n(h),v=n("d7EF"),g=n.n(v),w=n("lbHh"),k=n.n(w),b={state:{sidebar:{opened:!+k.a.get("sidebarStatus")},visitedViews:[],cachedViews:[]},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?k.a.set("sidebarStatus",1):k.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened},ADD_VISITED_VIEWS:function(e,t){e.visitedViews.some(function(e){return e.path===t.path})||(e.visitedViews.push({name:t.name,path:t.path}),t.meta.noCache||e.cachedViews.push(t.name))},DEL_VISITED_VIEWS:function(e,t){var n=!0,o=!1,a=void 0;try{for(var s,r=f()(e.visitedViews.entries());!(n=(s=r.next()).done);n=!0){var i=s.value,c=g()(i,2),u=c[0];if(c[1].path===t.path){e.visitedViews.splice(u,1);break}}}catch(e){o=!0,a=e}finally{try{!n&&r.return&&r.return()}finally{if(o)throw a}}var p=!0,d=!1,l=void 0;try{for(var m,h=f()(e.cachedViews);!(p=(m=h.next()).done);p=!0){var v=m.value;if(v===t.name){var w=e.cachedViews.indexOf(v);e.cachedViews.splice(w,1);break}}}catch(e){d=!0,l=e}finally{try{!p&&h.return&&h.return()}finally{if(d)throw l}}}},actions:{toggleSideBar:function(e){(0,e.commit)("TOGGLE_SIDEBAR")},addVisitedViews:function(e,t){(0,e.commit)("ADD_VISITED_VIEWS",t)},delVisitedViews:function(e,t){var n=e.commit,o=e.state;return new m.a(function(e){n("DEL_VISITED_VIEWS",t),e([].concat(d()(o.visitedViews)))})}}},_=b,y=n("vLgD"),S=n("QmSG"),j=n.n(S),E=n("zp1X"),T={state:{token:localStorage.getItem("token"),username:localStorage.getItem("username"),groups:[],menus:void 0,eleemnts:void 0,permissionMenus:void 0,role:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USERNAME:function(e,t){e.username=t},SET_GROUPS:function(e,t){e.groups=t},SET_ROLE:function(e,t){e.role=t},SET_MENUS:function(e,t){e.menus=t},SET_ELEMENTS:function(e,t){e.elements=t},SET_PERMISSION_MENUS:function(e,t){e.permissionMenus=t}},actions:{Login:function(e,t){var n=e.commit;return new m.a(function(e,a){o(t).then(function(o){var a=(new Date).getTime();localStorage.setItem("token_time",a),n("SET_TOKEN",o.data.token),n("SET_USERNAME",t.username),localStorage.setItem("username",t.username),localStorage.setItem("token",o.data.token),n("SET_MENUS",void 0),n("SET_ELEMENTS",void 0),e()}).catch(function(e){a(e)})})},GetUserInfo:function(e){var t=e.commit,n=e.state;return new m.a(function(e,o){Object(E.e)(n.username).then(function(n){var o=n.data,a=o.groups;t("SET_GROUPS",a),localStorage.setItem("groups",a),a.indexOf(S.super_group)>=0?t("SET_ROLE","super"):t("SET_ROLE","user");var s={},r=!0,i=!1,c=void 0;try{for(var u,p=f()(o.menus);!(r=(u=p.next()).done);r=!0){s[u.value]=!0}}catch(e){i=!0,c=e}finally{try{!r&&p.return&&p.return()}finally{if(i)throw c}}t("SET_MENUS",s);var d={},l=!0,m=!1,h=void 0;try{for(var v,g=f()(o.elements);!(l=(v=g.next()).done);l=!0){d[v.value]=!0}}catch(e){m=!0,h=e}finally{try{!l&&g.return&&g.return()}finally{if(m)throw h}}t("SET_ELEMENTS",d),e(n)}).catch(function(e){console.log(e),o(e)})})},LogOut:function(e){var t=e.commit,n=e.state;return new m.a(function(e,o){a(n.token).then(function(){t("SET_TOKEN",""),localStorage.removeItem("token"),t("SET_GROUPS",[]),localStorage.setItem("groups",[]),t("SET_MENUS",void 0),t("SET_ROLE",""),t("SET_ELEMENTS",void 0),t("SET_PERMISSION_MENUS",void 0),e()}).catch(function(e){o(e)})})},FedLogOut:function(e){var t=e.commit;return new m.a(function(e){t("SET_TOKEN",""),localStorage.removeItem("token"),t("SET_GROUPS",[]),localStorage.setItem("groups",[]),t("SET_MENUS",void 0),t("SET_ROLE",""),t("SET_ELEMENTS",void 0),t("SET_PERMISSION_MENUS",void 0),e()})},ChangeRole:function(e,t){var n=e.commit,o=e.state;return new m.a(function(e){n("SET_TOKEN",t),localStorage.setItem("groups",t),s(o.username).then(function(t){var o=t.data.results[0];n("SET_GROUPS",o.groups),localStorage.setItem("groups",o.groups),e()})})}}},O=T,x=n("YaEn"),I={state:{routers:x.b,addRouters:[]},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t,e.routers=x.b.concat(t)}},actions:{GenerateRoutes:function(e,t){var n=e.commit,o=t.role,a=t.menus;return new m.a(function(e){var t=void 0;"super"===o?(n("SET_ROUTERS",t),t=x.a.concat(x.d)):t=i(x.a,a).concat(x.d),n("SET_ROUTERS",t),e()})}}},V=I,M=n("wLjJ"),C={state:{allkeys:"",allminions:""},mutations:{SET_ALLKEYS:function(e,t){e.allkeys=t},SET_ALLMINIONS:function(e,t){e.allminions=t}},actions:{getAllKeys:function(e){var t=e.commit;return new m.a(function(e,n){Object(M.b)().then(function(n){var o=n.data.results,a={};a.accepted=o.accepted.length,a.rejected=o.rejected.length,a.unaccept=o.unaccept.length,t("SET_ALLKEYS",a),e()}).catch(function(e){n(e)})})},getAllminions:function(e){var t=e.commit;return new m.a(function(e,n){Object(M.a)().then(function(n){var o=n.data.results;console.log(o),t("SET_ALLMINIONS",o),e()}).catch(function(e){n(e)})})}}},R=C,L={sidebar:function(e){return e.app.sidebar},language:function(e){return e.app.language},visitedViews:function(e){return e.app.visitedViews},cachedViews:function(e){return e.app.cachedViews},token:function(e){return e.user.token},username:function(e){return e.user.username},groups:function(e){return e.user.groups},role:function(e){return e.user.role},menus:function(e){return e.user.menus},elements:function(e){return e.user.elements},permission_routers:function(e){return e.permission.routers},addRouters:function(e){return e.permission.addRouters},permissionMenus:function(e){return e.user.permissionMenus},allkeys:function(e){return e.salt.allkeys},allminions:function(e){return e.salt.allminions}},P=L;c.default.use(u.a);var N=new u.a.Store({modules:{app:_,user:O,permission:V,salt:R},getters:P});t.a=N},NHnr:function(e,t,n){"use strict";function o(e){n("/7A/")}function a(e,t){return 1===e?e+t:e+t+"s"}function s(e){var t=Date.now()/1e3-Number(e);return t<3600?a(~~(t/60)," minute"):t<86400?a(~~(t/3600)," hour"):a(~~(t/86400)," day")}function r(e,t){if(0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var n=t||"{y}-{m}-{d} {h}:{i}:{s}",o=void 0;o="object"===(void 0===e?"undefined":x()(e))?e:new Date(parseInt(e));var a={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function i(e,t){var n=new Date(e),o=Date.now(),a=(o-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?r(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function c(e,t){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],o=0;o<n.length;o++)if(e>=n[o].value)return(e/n[o].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[o].symbol;return e.toString()}function u(e){if(void 0!==e){var t=e.split("T");return t[0]+" "+t[1].split(".")[0]}}function p(e,t){return e.indexOf("admin")>=0||(!t||e.some(function(e){return t.indexOf(e)>=0}))}function d(){return new V.a(function(e,t){var n=localStorage.getItem("token"),o=localStorage.getItem("token_time"),a=(new Date).getTime();n&&a-o<72e5?e():(localStorage.removeItem("token"),localStorage.removeItem("token_time"),t())})}Object.defineProperty(t,"__esModule",{value:!0});var l={};n.d(l,"timeAgo",function(){return s}),n.d(l,"parseTime",function(){return r}),n.d(l,"formatTime",function(){return i}),n.d(l,"nFormatter",function(){return c}),n.d(l,"parseDate",function(){return u});var m=n("fZjL"),h=n.n(m),f=n("7+uW"),v={name:"APP"},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},w=[],k={render:g,staticRenderFns:w},b=k,_=n("VU/8"),y=o,S=_(v,b,!1,y,null,null),j=S.exports,E=n("YaEn"),T=n("IcnI"),O=n("pFYg"),x=n.n(O),I=n("//Fk"),V=n.n(I),M=n("Dd8w"),C=n.n(M),R=n("Y81h"),L=n.n(R),P=(n("UVIz"),n("zL8q")),N=n.n(P),D=["/login"];E.c.beforeEach(function(e,t,n){L.a.start(),localStorage.getItem("token")?d().then(function(t){"/login"===e.path?(n({path:"/"}),L.a.done()):0===T.a.getters.role.length?T.a.dispatch("GetUserInfo").then(function(t){var o=T.a.getters.role,a=T.a.getters.menus;T.a.dispatch("GenerateRoutes",{role:o,menus:a}).then(function(){E.c.addRoutes(T.a.getters.addRouters),n(C()({},e,{replace:!0}))})}).catch(function(){T.a.dispatch("FedLogOut").then(function(){P.Message.error("验证失败,请重新登录"),console.log("not found groups"),n({path:"/login"})})}):p(T.a.getters.groups,e.meta.group)?n():(n({path:"/403",query:{noGoBack:!0}}),L.a.done())}).catch(function(){n({path:"/login",query:{redirect:e.fullPath}})}):(console.log("haven't token"),-1!==D.indexOf(e.path)?n():(n({path:"/login",query:{redirect:e.fullPath}}),L.a.done()))}),E.c.afterEach(function(){L.a.done()});var U=(n("EG2h"),n("tvR6"),n("D/PP"),n("D4uH")),A=(n("e0XP"),n("OS1Z")),$=n.n(A),B=(n("pw1w"),n("xzgZ")),z=n.n(B);f.default.use(N.a),f.default.component("icon",U.a),f.default.use($.a),f.default.component("full-calendar",z.a),h()(l).forEach(function(e){f.default.filter(e,l[e])}),f.default.config.productionTip=!1,new f.default({el:"#app",router:E.c,store:T.a,template:"<App/>",components:{App:j}})},OPpm:function(e,t){},OibT:function(e,t){},Opzk:function(e,t,n){function o(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./components/addgroup.vue":["zsKB",0],"./components/editgroup.vue":["4lE6",0],"./components/hosttransfer.vue":["8TIX",0],"./dashboard/components/calendar.vue":["MgDL",0,59],"./dashboard/index.vue":["ARoL",0,2],"./errorPage/403.vue":["6XGN",19],"./errorPage/404.vue":["AejC",16],"./hosts/assetrecords.vue":["Suvk",0,15],"./hosts/components/addhost.vue":["3jMH",0,81],"./hosts/components/addidc.vue":["LK+4",80],"./hosts/components/addrecord.vue":["GBk+",79],"./hosts/components/edithost.vue":["EeTk",0,78],"./hosts/components/editidc.vue":["hfX5",77],"./hosts/hosts.vue":["QT8Y",0,14],"./hosts/idcs.vue":["9eVK",0,13],"./jobs/components/editjob.vue":["yTcb",0,58],"./jobs/components/runjob.vue":["hB7h",0,57],"./jobs/jobs.vue":["RmA3",0,56],"./layout/Layout.vue":["AkUR"],"./layout/components/AppMain.vue":["BoPo"],"./layout/components/Navbar.vue":["6k2e"],"./layout/components/Sidebar/SidebarItem.vue":["tlvQ"],"./layout/components/Sidebar/index.vue":["WTox"],"./layout/components/TagsView.vue":["Vg/Y"],"./login/index.vue":["T+/8",55],"./opstasks/components/adddemand.vue":["t8eB",0,54],"./opstasks/components/addproject.vue":["HQ/U",0,53],"./opstasks/components/changestatus.vue":["u0UT",76],"./opstasks/components/editdemand.vue":["nD+A",0,52],"./opstasks/components/editproject.vue":["qMZt",0,51],"./opstasks/components/showproject.vue":["RnNi",75],"./opstasks/components/viewdemand.vue":["Zthv",0,50],"./opstasks/components/viewproject.vue":["4bMg",0,49],"./opstasks/demands.vue":["t9aM",0,48],"./opstasks/projects.vue":["3PNK",0,47],"./opstasks/projecttypes.vue":["YkQK",0,46],"./perms/components/addhostperm.vue":["uxAV",0,74],"./perms/components/addwikiperm.vue":["ChfA",0,73],"./perms/components/edithostperm.vue":["OJIY",0,72],"./perms/components/editwikiperm.vue":["flTi",0,71],"./perms/components/wikitransfer.vue":["3tto",0],"./perms/hostperm.vue":["bfJg",0,12],"./perms/menuperm.vue":["IVJ8",0,1],"./perms/menus.vue":["7xM7",18],"./perms/wikiperm.vue":["Iqyy",0,11],"./projects/bugmanagers.vue":["uR2v",0,17],"./projects/components/addbug.vue":["TDrc",0],"./projects/components/adddemand.vue":["WpqJ",0,45],"./projects/components/addproject.vue":["B9mW",0,44],"./projects/components/addtest.vue":["6HvL",0],"./projects/components/changestatus.vue":["aFkl",70],"./projects/components/editbug.vue":["3oPl",0],"./projects/components/editdemand.vue":["PeDL",0,43],"./projects/components/editproject.vue":["gDzi",0,42],"./projects/components/edittest.vue":["M34/",0],"./projects/components/showbug.vue":["6d/X",69],"./projects/components/showproject.vue":["28C8",0],"./projects/components/showtest.vue":["1Mgu",68],"./projects/components/viewdemand.vue":["7nVu",0,41],"./projects/components/viewproject.vue":["5S43",0,10],"./projects/demands.vue":["NF3V",0,40],"./projects/projects.vue":["/W/R",0,39],"./projects/projecttypes.vue":["D07e",0,38],"./projects/testmanagers.vue":["WoBn",0,37],"./salts/cmdrun.vue":["IwO3",0,36],"./salts/index.vue":["lkyS",35],"./threepays/components/addMerchant.vue":["b11G",0,67],"./threepays/components/addPaychannel.vue":["DQwc",0,66],"./threepays/components/editMerchant.vue":["KF07",0,65],"./threepays/components/editPaychannel.vue":["VPNs",0,64],"./threepays/merchant.vue":["0epf",0,9],"./threepays/paychannel.vue":["xYlS",0,8],"./threepays/paychannelname.vue":["rpgY",0,34],"./threepays/platform.vue":["y6sr",0,33],"./threepays/platformpaychannels.vue":["g1v/",0,5],"./tools/test.vue":["z8an",32],"./tools/upload.vue":["6ohx",0,31],"./users/components/adduser.vue":["h+OL",0,30],"./users/components/edituser.vue":["n4T2",0,29],"./users/components/viewgroup.vue":["CLtd",0,28],"./users/roles.vue":["U+3Q",0,27],"./users/usergroups.vue":["URAK",0,7],"./users/users.vue":["Vt6Z",0,3],"./wikis/components/addopswiki.vue":["cjc7",0,63],"./wikis/components/addwiki.vue":["3qKL",0,62],"./wikis/components/editopswiki.vue":["LOok",0,61],"./wikis/components/editwiki.vue":["5cvz",0,60],"./wikis/components/viewopswiki.vue":["eJB1",0,26],"./wikis/components/viewwiki.vue":["eNlX",0,25],"./wikis/opswikiadmin.vue":["5nEU",0,24],"./wikis/wikiadmin.vue":["bkNQ",0,23],"./wikis/wikilist.vue":["fkPN",0,22],"./worktickets/components/addworkticket.vue":["Guws",0,21],"./worktickets/components/editworkticket.vue":["/pPl",0,4],"./worktickets/tickettype.vue":["rySo",0,20],"./worktickets/workticket.vue":["CH+q",0,6]};o.keys=function(){return Object.keys(a)},o.id="Opzk",e.exports=o},"PE+y":function(e,t){},QmSG:function(e,t,n){var o=void 0,a="https:"===window.location.protocol?"wss":"ws";o={apiUrl:"",super_group:"OMS_Super_Admin",wsurl:a+"://oms.tb-gaming.local/ws"};var s=o.apiUrl;e.exports={apiUrl:o.apiUrl,ws_url:o.wsurl,super_group:o.super_group,LIMIT:20,pagesize:[20,50,100],pageformat:"total, prev, pager, next, sizes",uploads:s+"/api/upload/",uploadurl:"https://httpbin.org/post",login:s+"/api/api-token-auth/",logout:s+"/api/api-auth/logout/",changePassword:s+"/api/changepasswd/",hosts:s+"/api/hosts/",idcs:s+"/api/idcs/",users:s+"/api/users/",groups:s+"/api/groups/",roles:s+"/api/roles/",worktickers:s+"/api/worktickers/",ticketcomments:s+"/api/ticketcomments/",ticketenclosures:s+"/api/ticketenclosures/",tickettypes:s+"/api/tickettypes/",records:s+"/api/records/",platforms:s+"/api/platforms/",merchants:s+"/api/merchants/",threepayenclosures:s+"/api/threepayenclosures/",paychannels:s+"/api/paychannels/",paychannelnames:s+"/api/paychannelnames/",threepaycomments:s+"/api/threepaycomments/",platformpaychannels:s+"/api/platformpaychannels/",usermenuperms:s+"/api/usermenuperms/",userhostperms:s+"/api/userhostperms/",userwikiperms:s+"/api/userwikiperms/",routerinfo:s+"/api/routers/",firstmenus:s+"/api/firstmenus/",secondmenus:s+"/api/secondmenus/",menumetas:s+"/api/menumetas/",sendmail:s+"/api/sendmail/",sendmessage:s+"/api/sendmessage/",calenders:s+"/api/calenders/",wikis:s+"/api/wikis/",opswikis:s+"/api/opswikis/",jobs:s+"/api/jobs/",deployenvs:s+"/api/deployenvs/",deployjobs:s+"/api/deployjobs/",updaejobsstatus:s+"/api/update_jobs_status/",deploycmds:s+"/api/deploycmds/",get_all_key:s+"/api/salts/get_all_key/",minions_status:s+"/api/salts/minions_status/",get_minion_info:s+"/api/salts/get_minion_info/",cmdrun:s+"/api/salts/cmdrun/",get_result:s+"/api/salts/get_result/",sync_remote_server:s+"/api/salts/sync_remote_server/",projects:s+"/api/projects/",projectcomments:s+"/api/projectcomments/",projectenclosures:s+"/api/projectenclosures/",projecttypes:s+"/api/projecttypes/",bugmanagers:s+"/api/bugmanagers/",testmanagers:s+"/api/testmanagers/",demandmanagers:s+"/api/demandmanagers/",demandenclosures:s+"/api/demandenclosures/",opsprojects:s+"/api/opsprojects/",opsprojectenclosures:s+"/api/opsprojectenclosures/",opsprojecttypes:s+"/api/opsprojecttypes/",opsdemandmanagers:s+"/api/opsdemandmanagers/",opsdemandenclosures:s+"/api/opsdemandenclosures/"}},TI3O:function(e,t){},UVIz:function(e,t){},"Vg/Y":function(e,t,n){"use strict";function o(e){n("k1KJ")}function a(e){n("75bo"),n("ohq5")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("BO1k"),r=n.n(s),i={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(e){e.preventDefault();var t=this.$refs.scrollContainer,n=t.offsetWidth,o=this.$refs.scrollWrapper,a=o.offsetWidth;e.wheelDelta>0?this.left=Math.min(0,this.left+e.wheelDelta):n-15<a?this.left<-(a-n+15)?this.left=this.left:this.left=Math.max(this.left+e.wheelDelta,n-a-15):this.left=0},moveToTarget:function(e){var t=this.$refs.scrollContainer,n=t.offsetWidth,o=e.offsetLeft,a=e.offsetWidth;o<-this.left?this.left=15-o:o+15>-this.left&&o+a<-this.left+n-15||(this.left=-(o-(n-a)+15))}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{mousewheel:e.handleScroll}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:e.left+"px"}},[e._t("default")],2)])},u=[],p={render:c,staticRenderFns:u},d=p,l=n("VU/8"),m=o,h=l(i,d,!1,m,"data-v-7ce31019",null),f=h.exports,v={components:{ScrollPane:f},computed:{visitedViews:function(){return this.$store.state.app.visitedViews}},mounted:function(){this.addViewTags()},methods:{closeViewTags:function(e,t){var n=this;this.$store.dispatch("delVisitedViews",e).then(function(t){if(n.isActive(e)){var o=t.slice(-1)[0];o?n.$router.push(o.path):n.$router.push("/")}}),t.preventDefault()},generateRoute:function(){return!!this.$route.name&&this.$route},addViewTags:function(){var e=this.generateRoute();if(!e)return!1;this.$store.dispatch("addVisitedViews",e)},isActive:function(e){return e.path===this.$route.path||e.name===this.$route.name},moveToCurrentTag:function(){var e=this,t=this.$refs.tag;this.$nextTick(function(){var n=!0,o=!1,a=void 0;try{for(var s,i=r()(t);!(n=(s=i.next()).done);n=!0){var c=s.value;if(c.to===e.$route.path){e.$refs.scrollPane.moveToTarget(c.$el);break}}}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}})}},watch:{$route:function(){this.addViewTags(),this.moveToCurrentTag()}}},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-container"},e._l(Array.from(e.visitedViews),function(t){return n("a",{key:t.path,staticClass:"tags-view-item",class:e.isActive(t)?"active":""},[n("router-link",{ref:"tag",refInFor:!0,attrs:{to:t.path}},[e._v("\n      "+e._s(t.name)+"\n      "),n("span",{staticClass:"el-icon-close",on:{click:function(n){e.closeViewTags(t,n)}}})])],1)}))},w=[],k={render:g,staticRenderFns:w},b=k,_=n("VU/8"),y=a,S=_(v,b,!1,y,"data-v-e723b52e",null);t.default=S.exports},WTox:function(e,t,n){"use strict";function o(e){n("OPpm")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),r=n("NYxO"),i=n("tlvQ"),c={name:"scrollBar",data:function(){return{top:0}},methods:{handleScroll:function(e){e.preventDefault();var t=this.$refs.scrollContainer,n=t.offsetHeight,o=this.$refs.scrollWrapper,a=o.offsetHeight;e.wheelDelta>0?this.top=Math.min(0,this.top+e.wheelDelta):n-15<a?this.top<-(a-n+15)?this.top=this.top:this.top=Math.max(this.top+e.wheelDelta,n-a-15):this.top=0}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{mousewheel:e.handleScroll}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{top:e.top+"px"}},[e._t("default")],2)])},p=[],d={render:u,staticRenderFns:p},l=d,m=n("VU/8"),h=o,f=m(c,l,!1,h,"data-v-46ac4d68",null),v=f.exports,g={components:{SidebarItem:i.default,ScrollBar:v},computed:s()({},Object(r.b)(["permission_routers","sidebar"]),{isCollapse:function(){return!this.sidebar.opened}})},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-bar",[n("el-menu",{attrs:{mode:"vertical","default-active":e.$route.path,collapse:e.isCollapse,"background-color":"#304156","text-color":"#fff","active-text-color":"#409EFF","unique-opened":!0}},[n("sidebar-item",{attrs:{routes:e.permission_routers}})],1)],1)},k=[],b={render:w,staticRenderFns:k},_=b,y=n("VU/8"),S=y(g,_,!1,null,null,null);t.default=S.exports},YaEn:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return u});var o=n("7+uW"),a=n("/ocq"),s=n("AkUR"),r=n("A66B");o.default.use(a.a);var i=[{path:"/login",component:r("login/index"),hidden:!0},{path:"/404",component:r("errorPage/404"),hidden:!0},{path:"/403",component:r("errorPage/403"),hidden:!0},{path:"",component:s.default,icon:"dashboard",redirect:"dashboard",children:[{path:"dashboard",component:r("dashboard/index"),name:"首页",icon:"dashboard",meta:{noCache:!0}}]},{name:"文档系统",path:"/wikis",component:s.default,icon:"paper-plane",redirect:"noredirect",children:[{path:"wikiadmin",component:r("wikis/wikiadmin"),name:"文档管理"},{path:"addwiki",hidden:!0,component:r("wikis/components/addwiki"),name:"添加文档"},{path:"editwiki/:wikiid",hidden:!0,component:r("wikis/components/editwiki"),name:"编辑文档"},{path:"viewwiki/:wikiid",hidden:!0,component:r("wikis/components/viewwiki"),name:"查看文档"},{path:"wikilist",component:r("wikis/wikilist"),name:"文档中心"}]}];t.c=new a.a({scrollBehavior:function(){return{y:0}},routes:i});var c=[{name:"工单系统",path:"/worktickets",component:s.default,icon:"leaf",redirect:"workticket",children:[{path:"workticket",component:r("worktickets/workticket"),name:"工单列表"},{path:"tickettype",component:r("worktickets/tickettype"),name:"工单类型"},{path:"addworkticket",hidden:!0,component:r("worktickets/components/addworkticket"),name:"添加工单"},{path:"editworkticket/:pid",hidden:!0,component:r("worktickets/components/editworkticket"),name:"编辑工单"}]},{name:"第三支付对接",path:"/threepays",component:s.default,icon:"bitcoin",redirect:"threepay",children:[{path:"paychannel",component:r("threepays/paychannel"),name:"支付通道列表"},{path:"platformpaychannels",component:r("threepays/platformpaychannels"),name:"对接通道进度"},{path:"merchant",component:r("threepays/merchant"),name:"商户列表"},{path:"paychannelname",component:r("threepays/paychannelname"),name:"通道类型"}]},{name:"系统研发",path:"/projects",component:s.default,icon:"bug",redirect:"projects",children:[{path:"demands",component:r("projects/demands"),name:"需求列表"},{path:"adddemand",hidden:!0,component:r("projects/components/adddemand"),name:"添加需求"},{path:"editdemand/:id",hidden:!0,component:r("projects/components/editdemand"),name:"编辑需求"},{path:"viewdemand/:id",hidden:!0,component:r("projects/components/viewdemand"),name:"查看需求"},{path:"projects",component:r("projects/projects"),name:"任务列表"},{path:"projecttypes",component:r("projects/projecttypes"),name:"任务类型"},{path:"addproject",hidden:!0,component:r("projects/components/addproject"),name:"添加任务"},{path:"editproject/:id",hidden:!0,component:r("projects/components/editproject"),name:"编辑任务"},{path:"viewproject/:id",hidden:!0,component:r("projects/components/viewproject"),name:"查看任务"},{path:"testmanagers",component:r("projects/testmanagers"),name:"测试用例"},{path:"bugmanagers",component:r("projects/bugmanagers"),name:"bug管理"}]},{name:"发布系统",path:"/jobs",component:s.default,icon:"tasks",redirect:"jobs",children:[{path:"jobs",component:r("jobs/jobs"),name:"项目列表"},{path:"editjob/:job_id",hidden:!0,component:r("jobs/components/editjob"),name:"编辑项目"},{path:"runjob/:job_id",hidden:!0,component:r("jobs/components/runjob"),name:"构建项目"}]},{name:"运维任务",path:"/opstasks",component:s.default,icon:"angellist",redirect:"demands",children:[{path:"opsdemands",component:r("opstasks/demands"),name:"运维项目列表"},{path:"addopsdemand",hidden:!0,component:r("opstasks/components/adddemand"),name:"添加运维项目"},{path:"editopsdemand/:id",hidden:!0,component:r("opstasks/components/editdemand"),name:"编辑运维项目"},{path:"viewopsdemand/:id",hidden:!0,component:r("opstasks/components/viewdemand"),name:"查看运维项目"},{path:"opsprojects",component:r("opstasks/projects"),name:"运维任务列表"},{path:"opsprojecttypes",component:r("opstasks/projecttypes"),name:"运维任务类型"},{path:"addopsproject",hidden:!0,component:r("opstasks/components/addproject"),name:"添加运维任务"},{path:"editopsproject/:id",hidden:!0,component:r("opstasks/components/editproject"),name:"编辑运维任务"},{path:"viewopsproject/:id",hidden:!0,component:r("opstasks/components/viewproject"),name:"查看运维任务"}]},{name:"用户管理",path:"/users",component:s.default,icon:"user",redirect:"users",children:[{path:"users",component:r("users/users"),name:"用户列表"},{path:"usergroups",component:r("users/usergroups"),name:"用户组列表"},{path:"roles",component:r("users/roles"),name:"角色列表"}]},{name:"权限管理",path:"/perms",component:s.default,icon:"fire",redirect:"menuperm",children:[{path:"menus",component:r("perms/menus"),name:"菜单列表"},{path:"menuperm",component:r("perms/menuperm"),name:"用户菜单权限"},{path:"hostperm",component:r("perms/hostperm"),name:"用户主机权限"},{path:"wikiperm",component:r("perms/wikiperm"),name:"用户文档权限"}]},{name:"主机管理",path:"/hosts",component:s.default,icon:"desktop",redirect:"hosts",children:[{path:"hosts",component:r("hosts/hosts"),name:"主机列表"},{path:"assetrecords",component:r("hosts/assetrecords"),name:"资产修改记录"},{path:"idcs",component:r("hosts/idcs"),name:"机房列表"}]},{name:"工具管理",path:"/tools",component:s.default,icon:"cogs",redirect:"upload",children:[{path:"upload",component:r("tools/upload"),name:"上传列表"},{path:"opswikiadmin",component:r("wikis/opswikiadmin"),name:"运维文档管理"},{path:"addopswiki",hidden:!0,component:r("wikis/components/addopswiki"),name:"添加运维文档"},{path:"editopswiki/:wikiid",hidden:!0,component:r("wikis/components/editopswiki"),name:"编辑运维文档"},{path:"viewopswiki/:wikiid",hidden:!0,component:r("wikis/components/viewopswiki"),name:"查看运维文档"},{path:"test",component:r("tools/test"),name:"测试页面"}]},{name:"salt管理",path:"/salts",component:s.default,icon:"cube",redirect:"cmdrun",children:[{path:"index",component:r("salts/index"),name:"salt状态"},{path:"cmdrun",component:r("salts/cmdrun"),name:"远程执行命令"}]}],u=[{path:"*",redirect:"/404",hidden:!0}]},cJIv:function(e,t){},e0XP:function(e,t){},k1KJ:function(e,t){},ohq5:function(e,t){},prwc:function(e,t){},pw1w:function(e,t){},tlvQ:function(e,t,n){"use strict";function o(e){n("PE+y")}Object.defineProperty(t,"__esModule",{value:!0});var a={name:"SidebarItem",props:{routes:{type:Array}},data:function(){return{iconsize:1.4}},methods:{}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.routes,function(t){return!t.hidden&&t.children.length>0?[1!==t.children.length||t.children[0].children||"dashboard"!=t.children[0].icon?n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.icon?n("icon",{staticClass:"wscn-icon",attrs:{name:t.icon,scale:e.iconsize}}):e._e(),e._v(" "),t&&t.name?n("span",[e._v(e._s(t.name))]):e._e()],1),e._v(" "),e._l(t.children,function(o){return o.hidden?e._e():[o.children&&o.children.length>0?n("sidebar-item",{key:o.path,staticClass:"nest-menu",attrs:{routes:[o]}}):n("router-link",{key:o.name,attrs:{to:t.path+"/"+o.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+o.path}},[n("icon",{staticClass:"child-icon",attrs:{name:"diamond",scale:"1"}}),e._v(" "),o&&o.name?n("span",[e._v(e._s(o.name))]):e._e()],1)],1)]})],2):n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{staticClass:"submenu-title-noDropdown",attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].icon?n("icon",{staticClass:"wscn-icon",attrs:{name:t.children[0].icon,scale:e.iconsize}}):e._e(),e._v(" "),t.children[0]&&t.children[0].name?n("span",[e._v(e._s(t.children[0].name))]):e._e()],1)],1)]:e._e()})],2)},r=[],i={render:s,staticRenderFns:r},c=i,u=n("VU/8"),p=o,d=u(a,c,!1,p,"data-v-74a8b2ec",null);t.default=d.exports},tvR6:function(e,t){},vLgD:function(e,t,n){"use strict";var o=n("//Fk"),a=n.n(o),s=n("mtWM"),r=n.n(s),i=n("IcnI");r.a.defaults.xsrfCookieName="csrftoken",r.a.defaults.xsrfHeaderName="X-CSRFToken",r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";var c=r.a.create({baseURL:"http://oms.tb-gaming.local",timeout:5e4});c.interceptors.request.use(function(e){if(i.a.getters.token){var t=i.a.getters.token;e.headers.Authorization="token "+t,e.headers["X-CSRFToken"]=t}return e},function(e){console.log(e),a.a.reject(e)}),c.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),a.a.reject(e)}),t.a=c},wLjJ:function(e,t,n){"use strict";function o(){return Object(c.a)({url:p.a.get_all_key,method:"get"})}function a(){return Object(c.a)({url:p.a.minions_status,method:"get"})}function s(e){return Object(c.a)({url:p.a.cmdrun,method:"post",data:e})}function r(e){return Object(c.a)({url:p.a.get_result+e,method:"get"})}function i(e){return Object(c.a)({url:p.a.sync_remote_server+e,method:"get"})}t.b=o,t.a=a,t.c=s,t.d=r,t.e=i;var c=n("vLgD"),u=n("QmSG"),p=n.n(u)},zp1X:function(e,t,n){"use strict";function o(e){return Object(f.a)({url:g.a.usermenuperms,method:"post",data:e})}function a(e,t){return Object(f.a)({url:g.a.usermenuperms,method:"get",params:e})}function s(e,t){return Object(f.a)({url:g.a.usermenuperms+e+"/",method:"put",data:t})}function r(e){return Object(f.a)({url:g.a.routerinfo+e,method:"get"})}function i(e){return Object(f.a)({url:g.a.userhostperms,method:"post",data:e})}function c(e,t){return Object(f.a)({url:g.a.userhostperms,method:"get",params:e})}function u(e,t){return Object(f.a)({url:g.a.userhostperms+e+"/",method:"put",data:t})}function p(e){return Object(f.a)({url:g.a.userhostperms+e+"/",method:"delete"})}function d(e){return Object(f.a)({url:g.a.userwikiperms,method:"post",data:e})}function l(e,t){return Object(f.a)({url:g.a.userwikiperms,method:"get",params:e})}function m(e,t){return Object(f.a)({url:g.a.userwikiperms+e+"/",method:"put",data:t})}function h(e){return Object(f.a)({url:g.a.userwikiperms+e+"/",method:"delete"})}t.h=o,t.d=a,t.k=s,t.e=r,t.g=i,t.c=c,t.j=u,t.a=p,t.i=d,t.f=l,t.l=m,t.b=h;var f=n("vLgD"),v=n("QmSG"),g=n.n(v)}},["NHnr"]);