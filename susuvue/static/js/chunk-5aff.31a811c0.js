(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5aff"],{IaHB:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},LxGK:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"c",function(){return s}),e.d(t,"b",function(){return a});var r=e("t3Un");function o(){return Object(r.a)({url:"/vue/api/email",method:"get"})}function s(n){return Object(r.a)({url:"/vue/api/email",data:n,method:"put"})}function a(n){return Object(r.a)({url:"/vue/api/email",data:n,method:"post"})}},dKb8:function(n,t,e){var r=e("IaHB");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e("SZ7m").default)("7f67d123",r,!0,{})},leE3:function(n,t,e){"use strict";e.r(t);var r=e("LxGK"),o={name:"Config",data:function(){return{loading:!1,form:{id:1,fromUser:"",user:"",pass:"",host:"",port:"",sslEnable:""},rules:{fromUser:[{required:!0,message:"请输入发件人邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],user:[{required:!0,message:"请输入发件用户名",trigger:"blur"}],pass:[{required:!0,message:"密码不能为空",trigger:"blur"}],host:[{required:!0,message:"SMTP地址不能为空",trigger:"blur"}],port:[{required:!0,message:"SMTP端口不能为空",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var n=this;Object(r.a)().then(function(t){n.form=t})},doSubmit:function(){var n=this;this.$refs.form.validate(function(t){if(!t)return!1;n.loading=!0,Object(r.c)(n.form).then(function(t){n.$notify({title:"修改成功",type:"success",duration:2500}),n.loading=!1}).catch(function(t){n.loading=!1,console.log(t.response.data.message)})})}}},s=(e("xy53"),e("KHd+")),a=Object(s.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-form",{ref:"form",staticStyle:{"margin-top":"6px"},attrs:{model:n.form,rules:n.rules,size:"small","label-width":"100px"}},[e("el-form-item",{attrs:{label:"发件人邮箱",prop:"fromUser"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.fromUser,callback:function(t){n.$set(n.form,"fromUser",t)},expression:"form.fromUser"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("Sender mailbox")])],1),n._v(" "),e("el-form-item",{attrs:{label:"发件用户名",prop:"user"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.user,callback:function(t){n.$set(n.form,"user",t)},expression:"form.user"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("Sender usernamex")])],1),n._v(" "),e("el-form-item",{attrs:{label:"邮箱密码",prop:"pass"}},[e("el-input",{staticStyle:{width:"40%"},attrs:{type:"password"},model:{value:n.form.pass,callback:function(t){n.$set(n.form,"pass",t)},expression:"form.pass"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("email Password")])],1),n._v(" "),e("el-form-item",{attrs:{label:"SMTP地址",prop:"host"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.host,callback:function(t){n.$set(n.form,"host",t)},expression:"form.host"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("SMTP address")])],1),n._v(" "),e("el-form-item",{attrs:{label:"SMTP端口",prop:"port"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.port,callback:function(t){n.$set(n.form,"port",t)},expression:"form.port"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("SMTP port")])],1),n._v(" "),e("el-form-item",{attrs:{label:""}},[e("el-button",{attrs:{loading:n.loading,size:"medium",type:"primary"},on:{click:n.doSubmit}},[n._v("保存配置")])],1)],1)},[],!1,null,"dc16d5d2",null);a.options.__file="config.vue";t.default=a.exports},xy53:function(n,t,e){"use strict";var r=e("dKb8");e.n(r).a}}]);