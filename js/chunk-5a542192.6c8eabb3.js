(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a542192"],{"0f5a":function(e,t,r){},"9eef":function(e,t,r){"use strict";var n=r("0f5a"),a=r.n(n);a.a},bfad:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.id?"编辑":"新建")+"用户")]),r("el-form",{ref:"form",staticStyle:{width:"50%","text-align":"left"},attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),r("el-button",[e._v("取消")])],1)],1)],1)},a=[],s=r("5530"),o=(r("96cf"),r("1da1")),i={data:function(){return{form:{name:"",icon:""}}},props:{id:{type:String}},created:function(){this.id&&this.getInfo()},methods:{onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.form.parent&&delete e.form.parent,!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/users/".concat(e.id),e.form);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/users",Object(s["a"])({},e.form));case 9:t.sent;case 10:e.$router.push({path:"/users/list"}),e.$message({showClose:!0,message:"操作成功！",type:"success"});case 12:case"end":return t.stop()}}),t)})))()},getInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/users/".concat(e.id));case 2:r=t.sent,e.form=r.data;case 4:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){console.log("上传成功！"),console.log(e),this.form.icon="http://localhost:3000/upload/"+e.filename},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r}}},c=i,u=(r("9eef"),r("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5a542192.6c8eabb3.js.map