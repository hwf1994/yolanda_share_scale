(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-017efef9"],{"0ecc":function(e,t,a){"use strict";var r=a("3930"),s=a.n(r);s.a},3930:function(e,t,a){},b13b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticStyle:{"text-align":"left"}},[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),a("el-form",{ref:"form",staticStyle:{width:"70%","text-align":"left"},attrs:{model:e.form,"label-width":"80px"}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基本信息"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://upload-z2.qiniup.com","show-file-list":!1,data:e.uploadToken,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess}},[e.form.avatar?a("img",{staticClass:"avatar",attrs:{src:e.form.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"背景图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://upload-z2.qiniup.com","show-file-list":!1,data:e.uploadToken,"before-upload":e.beforeAvatarUpload,"on-success":function(t){return e.$set(e.form,"background","http://qcbslioi0.bkt.clouddn.com/"+t.key)}}},[e.form.background?a("img",{staticClass:"avatar",attrs:{src:e.form.background}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"称号"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"分类"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.categories,callback:function(t){e.$set(e.form,"categories",t)},expression:"form.categories"}},e._l(e.categories,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("h4",{staticStyle:{"margin-left":"80px"}},[e._v("评分")]),a("el-form-item",{attrs:{label:"难度"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{"show-score":"",max:9},model:{value:e.form.scores.difficult,callback:function(t){e.$set(e.form.scores,"difficult",t)},expression:"form.scores.difficult"}})],1),a("el-form-item",{attrs:{label:"技能"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{"show-score":"",max:9},model:{value:e.form.scores.skill,callback:function(t){e.$set(e.form.scores,"skill",t)},expression:"form.scores.skill"}})],1),a("el-form-item",{attrs:{label:"攻击"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{"show-score":"",max:9},model:{value:e.form.scores.attack,callback:function(t){e.$set(e.form.scores,"attack",t)},expression:"form.scores.attack"}})],1),a("el-form-item",{attrs:{label:"生存"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{"show-score":"",max:9},model:{value:e.form.scores.servive,callback:function(t){e.$set(e.form.scores,"servive",t)},expression:"form.scores.servive"}})],1),a("h4",{staticStyle:{"margin-left":"80px"}},[e._v("出装")]),a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.items1,callback:function(t){e.$set(e.form,"items1",t)},expression:"form.items1"}},e._l(e.items,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"逆风出装"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.items2,callback:function(t){e.$set(e.form,"items2",t)},expression:"form.items2"}},e._l(e.items,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("h4",{staticStyle:{"margin-left":"80px"}},[e._v("技巧")]),a("el-form-item",{attrs:{label:"使用技巧"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.form.usageTips,callback:function(t){e.$set(e.form,"usageTips",t)},expression:"form.usageTips"}})],1),a("el-form-item",{attrs:{label:"对抗技巧"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.form.battleTips,callback:function(t){e.$set(e.form,"battleTips",t)},expression:"form.battleTips"}})],1),a("el-form-item",{attrs:{label:"团战思路"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.form.teamTips,callback:function(t){e.$set(e.form,"teamTips",t)},expression:"form.teamTips"}})],1)],1),a("el-tab-pane",{attrs:{label:"技能"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.form.skills.push({icon:""})}}},[e._v("添加技能")]),a("el-row",{attrs:{gutter:20}},e._l(e.form.skills,(function(t,r){return a("el-col",{key:r,staticStyle:{"margin-top":"10px"},attrs:{span:10}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{type:"input",rows:2,placeholder:"请输入内容"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"技能图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://upload-z2.qiniup.com","show-file-list":!1,data:e.uploadToken,"before-upload":e.beforeAvatarUpload,"on-success":function(a){return e.$set(t,"icon","http://qcbslioi0.bkt.clouddn.com/"+a.filename)}}},[t.icon?a("img",{staticClass:"avatar",attrs:{src:t.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"技能描述"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-form-item",{attrs:{label:"技能建议"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.tips,callback:function(a){e.$set(t,"tips",a)},expression:"item.tips"}})],1),a("el-button",{staticStyle:{"margin-left":"45px"},attrs:{type:"danger"},on:{click:function(t){return e.form.skills.splice(r,1)}}},[e._v("删除")])],1)})),1)],1)],1),a("el-form-item",{staticStyle:{"margin-top":"10px"}},[a("el-button",{on:{click:e.onSubmit}},[e._v("立即创建")]),a("el-button",[e._v("取消")])],1)],1)],1)},s=[],o=a("5530"),l=(a("96cf"),a("1da1")),i={data:function(){return{categories:[],items:[],form:{name:"",avatar:"",title:"",categories:[],scores:{difficult:0,skill:0,attack:0,servive:0},skills:[],items1:[],items2:[],usageTips:"",battleTips:"",teamTips:""},uploadToken:{token:""}}},props:{id:{type:String}},created:function(){this.id&&this.getInfo(),this.getCategories(),this.getOption()},methods:{onSubmit:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.form.parent&&delete e.form.parent,!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/heroes/".concat(e.id),e.form);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/heroes",Object(o["a"])({},e.form));case 9:t.sent;case 10:e.$router.push({path:"/heroes/list"}),e.$message({showClose:!0,message:"操作成功！",type:"success"});case 12:case"end":return t.stop()}}),t)})))()},getInfo:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/heroes/".concat(e.id));case 2:a=t.sent,e.form=Object.assign({},e.form,a.data);case 4:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){this.form.avatar="http://qcbslioi0.bkt.clouddn.com/"+e.filename},beforeAvatarUpload:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return"image/jpeg"===e.type,e.size/1024/1024<2,a.next=4,t.$http.get("/upload_token");case 4:r=a.sent,t.uploadToken.token=r.data.uploadToken;case 6:case"end":return a.stop()}}),a)})))()},getOption:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories?type=hero");case 2:return a=t.sent,t.next=5,e.$http.get("/rest/items");case 5:r=t.sent,e.categories=a.data,e.items=r.data;case 8:case"end":return t.stop()}}),t)})))()},getCategories:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories");case 2:a=t.sent,e.categories=a.data,console.log(e.categories);case 5:case"end":return t.stop()}}),t)})))()}}},n=i,c=(a("0ecc"),a("2877")),m=Object(c["a"])(n,r,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-017efef9.4f75cc26.js.map