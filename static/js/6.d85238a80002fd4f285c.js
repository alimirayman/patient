webpackJsonp([6],{"6B6W":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:!0,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",t._l(t.items,function(e,n){return i("v-list-tile",{key:n,on:{click:function(i){t.changeRoute(e.route)}}},[i("v-list-tile-action",[i("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),i("v-toolbar",{attrs:{app:"","clipped-left":!0}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[i("v-icon",[t._v("menu")])],1),t._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[i("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),i("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[i("v-btn",{attrs:{flat:""}},[i("v-avatar",{attrs:{color:"grey lighten-4"}},[i("img",{attrs:{src:"http://icons.iconarchive.com/icons/visualpharm/must-have/128/User-icon.png",alt:"avatar"}})]),t._v(" "),i("span",[t._v("\n          Mir Ayman Ali \n        ")])],1)],1)],1),t._v(" "),i("v-content",[i("router-view")],1),t._v(" "),i("v-footer",{attrs:{fixed:t.fixed,app:""}},[i("span",[t._v("© 2017")])])],1)},staticRenderFns:[]},r=i("VU/8")({data:function(){return{drawer:!0,fixed:!1,items:[{icon:"person",title:"Profile",route:"Profile"},{icon:"history",title:"Patient's History",route:"History"},{icon:"insert_drive_file",title:"Reports",route:"Reports"},{icon:"schedule",title:"Appointment",route:"Appoinment"},{icon:"exit_to_app",title:"Logout",route:"404"}],miniVariant:!1,title:"Patient Hub"}},methods:{changeRoute:function(t){this.$router.push({name:t})}},name:"App"},n,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=6.d85238a80002fd4f285c.js.map