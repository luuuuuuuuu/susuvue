(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2f62"],{A2Om:function(t,e,o){"use strict";var i=o("W465");o.n(i).a},H9dA:function(t,e,o){"use strict";o.r(e);var i=o("JCNI"),r={props:{isAdd:{type:Boolean,required:!0}},data:function(){return{loading:!1,dialog:!1,form:{id:"",content:"",createTime:"",del:"",pushUserAvatar:"",pushUserId:"",pushUserName:"",title:"",type:"",updateTime:"",version:""},rules:{}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){this.loading=!0,this.isAdd?this.doAdd():this.doEdit()},doAdd:function(){var t=this;Object(i.a)(this.form).then(function(e){t.resetForm(),t.$notify({title:"添加成功",type:"success",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},doEdit:function(){var t=this;Object(i.c)(this.form).then(function(e){t.resetForm(),t.$notify({title:"修改成功",type:"success",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={id:"",content:"",createTime:"",del:"",pushUserAvatar:"",pushUserId:"",pushUserName:"",title:"",type:"",updateTime:"",version:""}}}},l=(o("A2Om"),o("KHd+")),s=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:t.isAdd?"新增":"编辑",width:"500px"},on:{"update:visible":function(e){t.dialog=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"80px"}},[o("el-form-item",{attrs:{label:"内容"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"发布时间"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.createTime,callback:function(e){t.$set(t.form,"createTime",e)},expression:"form.createTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"del"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.del,callback:function(e){t.$set(t.form,"del",e)},expression:"form.del"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"发布人头像"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.pushUserAvatar,callback:function(e){t.$set(t.form,"pushUserAvatar",e)},expression:"form.pushUserAvatar"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"发布人id"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.pushUserId,callback:function(e){t.$set(t.form,"pushUserId",e)},expression:"form.pushUserId"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"发布人名称"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.pushUserName,callback:function(e){t.$set(t.form,"pushUserName",e)},expression:"form.pushUserName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"标题"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"类型"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"更新时间"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.updateTime,callback:function(e){t.$set(t.form,"updateTime",e)},expression:"form.updateTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"version"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"12e27f03",null);s.options.__file="form.vue";e.default=s.exports},JCNI:function(t,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return l}),o.d(e,"c",function(){return s});var i=o("t3Un");function r(t){return Object(i.a)({url:"api/article",method:"post",data:t})}function l(t){return Object(i.a)({url:"api/article/"+t,method:"delete"})}function s(t){return Object(i.a)({url:"api/article",method:"put",data:t})}},W465:function(t,e,o){}}]);