(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e25","chunk-860a","chunk-6260"],{"14Xm":function(t,n,e){t.exports=e("ls82")},"3ADX":function(t,n,e){"use strict";var a=e("14Xm"),s=e.n(a),i=e("4d7F"),r=e.n(i),o=e("D3Ub"),l=e.n(o),c=e("t3Un");function u(t,n){return Object(c.a)({url:t,method:"get",params:n})}n.a={data:function(){return{loading:!0,data:[],page:0,size:10,total:0,url:"",params:{},query:{},time:10,isAdd:!1}},methods:{init:function(){var t=this;return l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.beforeInit();case 2:if(n.sent){n.next=4;break}return n.abrupt("return");case 4:return n.abrupt("return",new r.a(function(n,e){t.loading=!0,u(t.url,t.params).then(function(e){0===e.status?(t.total=e.obj.total,t.data=e.obj.list):(t.total=e.totalElements,t.data=e.content),setTimeout(function(){t.loading=!1},t.time),console.log("initData"),n(e)}).catch(function(n){t.loading=!1,e(n)})}));case 5:case"end":return n.stop()}},n,t)}))()},beforeInit:function(){return!0},pageChange:function(t){this.page=t-1,this.init()},sizeChange:function(t){this.page=0,this.size=t,this.init()},dleChangePage:function(t){void 0===t&&(t=1),this.data.length===t&&0!==this.page&&(this.page=this.page-1)},toQuery:function(){this.page=0,this.init()}}}},"3oz2":function(t,n,e){"use strict";var a=e("bWjW");e.n(a).a},"99or":function(t,n,e){"use strict";e.r(n);var a=e("QbLZ"),s=e.n(a),i=e("L2JU"),r=e("7Qib"),o=e("dUbn"),l=e("q4Ke"),c=e("X4fA"),u=e("Q2AE"),d=e("3ADX"),f={name:"Center",components:{updatePass:o.default,updateEmail:l.default},mixins:[d.a],data:function(){return{ico:"el-icon-refresh",headers:{Authorization:"Bearer "+Object(c.a)()}}},computed:s()({},Object(i.b)(["user","updateAvatarApi"])),created:function(){var t=this;this.$nextTick(function(){t.init()}),u.a.dispatch("GetInfo").then(function(){})},methods:{parseTime:r.d,formatEmail:function(t){return Object(r.e)(t)},beforeInit:function(){this.url="api/logs/user";return this.params={page:this.page,size:this.size,sort:"id,desc"},!0},handleSuccess:function(t,n,e){this.$notify({title:"头像修改成功",type:"success",duration:2500}),u.a.dispatch("GetInfo").then(function(){})},handleError:function(t,n,e){var a=JSON.parse(t.message);this.$notify({title:a.message,type:"error",duration:2500})},refresh:function(){var t=this;this.ico="el-icon-loading",this.$refs.log.init(),setTimeout(function(){t.ico="el-icon-refresh"},300)}}},p=(e("fnfW"),e("KHd+")),m=Object(p.a)(f,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,md:8,lg:6,xl:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("个人信息")])]),t._v(" "),e("div",[e("div",{staticStyle:{"text-align":"center"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,action:t.updateAvatarApi}},[t.user.avatar?e("img",{staticClass:"avatar",attrs:{src:t.user.avatar,title:"点击上传头像"}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),e("ul",{staticClass:"user-info"},[e("li",[e("svg-icon",{attrs:{"icon-class":"user1"}}),t._v(" 用户名称 "),e("div",{staticClass:"user-right"},[t._v(t._s(t.user.username))])],1),t._v(" "),e("li",[e("svg-icon",{attrs:{"icon-class":"phone"}}),t._v(" 手机号码 "),e("div",{staticClass:"user-right"},[t._v(t._s(t.user.phone))])],1),t._v(" "),e("li",[e("svg-icon",{attrs:{"icon-class":"email"}}),t._v(" 用户邮箱 "),e("div",{staticClass:"user-right"},[t._v(t._s(t.user.email))])],1),t._v(" "),e("li",[e("svg-icon",{attrs:{"icon-class":"dept"}}),t._v(" 所属部门 "),e("div",{staticClass:"user-right"},[t._v(" "+t._s(t.user.dept)+" / "+t._s(t.user.job))])],1),t._v(" "),e("li",[e("svg-icon",{attrs:{"icon-class":"date"}}),t._v(" 创建日期 "),e("div",{staticClass:"user-right"},[t._v(t._s(t.parseTime(t.user.createTime)))])],1),t._v(" "),e("li",[e("svg-icon",{attrs:{"icon-class":"anq"}}),t._v(" 安全设置\n              "),e("div",{staticClass:"user-right"},[e("a",{on:{click:function(n){t.$refs.pass.dialog=!0}}},[t._v("修改密码")]),t._v(" "),e("a",{on:{click:function(n){t.$refs.email.dialog=!0}}},[t._v("修改邮箱")])])],1)])])])],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:16,lg:18,xl:19}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("操作日志")]),t._v(" "),e("div",{staticStyle:{display:"inline-block",float:"right",cursor:"pointer"},on:{click:t.refresh}},[e("i",{class:t.ico})])]),t._v(" "),e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,size:"small"}},[e("el-table-column",{attrs:{prop:"description",label:"行为"}}),t._v(" "),e("el-table-column",{attrs:{prop:"requestIp",label:"IP"}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:"请求耗时",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.time<=300?e("el-tag",[t._v(t._s(n.row.time)+"ms")]):n.row.time<=1e3?e("el-tag",{attrs:{type:"warning"}},[t._v(t._s(n.row.time)+"ms")]):e("el-tag",{attrs:{type:"danger"}},[t._v(t._s(n.row.time)+"ms")])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"createTime",label:"创建日期",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(t.parseTime(n.row.createTime)))])]}}])})],1),t._v(" "),e("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:t.total,"current-page":t.page+1,layout:"total, prev, pager, next, sizes"},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1)])],1)],1),t._v(" "),e("updateEmail",{ref:"email",attrs:{email:t.user.email}}),t._v(" "),e("updatePass",{ref:"pass"})],1)},[],!1,null,null,null);m.options.__file="center.vue";n.default=m.exports},D3Ub:function(t,n,e){"use strict";n.__esModule=!0;var a=function(t){return t&&t.__esModule?t:{default:t}}(e("4d7F"));n.default=function(t){return function(){var n=t.apply(this,arguments);return new a.default(function(t,e){return function s(i,r){try{var o=n[i](r),l=o.value}catch(t){return void e(t)}if(!o.done)return a.default.resolve(l).then(function(t){s("next",t)},function(t){s("throw",t)});t(l)}("next")})}}},Fao6:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},JWCd:function(t,n,e){"use strict";var a=e("mN3r");e.n(a).a},"Ns/3":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Yfch:function(t,n,e){"use strict";function a(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)}e.d(n,"a",function(){return a})},aIE0:function(t,n,e){var a=e("p+U1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("SZ7m").default)("13a6d58c",a,!0,{})},bWjW:function(t,n,e){var a=e("Fao6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("SZ7m").default)("5df5bdf3",a,!0,{})},dUbn:function(t,n,e){"use strict";e.r(n);var a=e("Q2AE"),s=e("wk8/"),i={data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改密码",form:{oldPass:"",newPass:"",confirmPass:""},rules:{oldPass:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPass:[{required:!0,validator:function(n,e,a){e?t.form.newPass!==e?a(new Error("两次输入的密码不一致")):a():a(new Error("请再次输入密码"))},trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(n){if(!n)return!1;t.loading=!0,Object(s.e)(t.form).then(function(n){t.resetForm(),t.$notify({title:"密码修改成功，请重新登录",type:"success",duration:1500}),setTimeout(function(){a.a.dispatch("LogOut").then(function(){location.reload()})},1500)}).catch(function(n){t.loading=!1,console.log(n.response.data.message)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={oldPass:"",newPass:"",confirmPass:""}}}},r=(e("3oz2"),e("KHd+")),o=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"inline-block"}},[e("el-dialog",{attrs:{visible:t.dialog,"close-on-click-modal":!1,title:t.title,"append-to-body":"",width:"500px"},on:{"update:visible":function(n){t.dialog=n},close:t.cancel}},[e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[e("el-form-item",{attrs:{label:"旧密码",prop:"oldPass"}},[e("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.oldPass,callback:function(n){t.$set(t.form,"oldPass",n)},expression:"form.oldPass"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"新密码",prop:"newPass"}},[e("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.newPass,callback:function(n){t.$set(t.form,"newPass",n)},expression:"form.newPass"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"确认密码",prop:"confirmPass"}},[e("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.confirmPass,callback:function(n){t.$set(t.form,"confirmPass",n)},expression:"form.confirmPass"}})],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"be6df2a6",null);o.options.__file="updatePass.vue";n.default=o.exports},fnfW:function(t,n,e){"use strict";var a=e("aIE0");e.n(a).a},mN3r:function(t,n,e){var a=e("Ns/3");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("SZ7m").default)("377d63de",a,!0,{})},"p+U1":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".avatar-uploader-icon {\n  font-size: 28px;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n}\n.avatar {\n  width: 120px;\n  height: 120px;\n  display: block;\n  border-radius: 50%;\n}\n.user-info {\n  padding-left: 0px;\n  list-style: none;\n}\n.user-info li {\n    border-bottom: 1px solid #F0F3F4;\n    border-top: 1px solid #F0F3F4;\n    padding: 11px 0px;\n    font-size: 13px;\n}\n.user-info .user-right {\n    float: right;\n}\n.user-info .user-right a {\n      color: #317EF3;\n}\n",""])},q4Ke:function(t,n,e){"use strict";e.r(n);var a=e("Q2AE"),s=e("Yfch"),i=e("wk8/"),r=e("t3Un");var o={props:{email:{type:String,required:!0}},data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改邮箱",form:{pass:"",email:"",code:""},user:{email:"",password:""},codeLoading:!1,codeData:{type:"email",value:""},buttonName:"获取验证码",isDisabled:!1,time:60,rules:{pass:[{required:!0,message:"当前密码不能为空",trigger:"blur"}],email:[{required:!0,validator:function(n,e,a){""===e||null===e?a(new Error("新邮箱不能为空")):e===t.email?a(new Error("新邮箱不能与旧邮箱相同")):Object(s.a)(e)?a():a(new Error("邮箱格式错误"))},trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},sendCode:function(){var t=this;if(this.form.email&&this.form.email!==this.email){this.codeLoading=!0,this.buttonName="验证码发送中",this.codeData.value=this.form.email;var n=this;(function(t){return Object(r.a)({url:"api/code/resetEmail",method:"post",data:t})})(this.codeData).then(function(e){t.$message({showClose:!0,message:"发送成功，验证码有效期5分钟",type:"success"}),t.codeLoading=!1,t.isDisabled=!0,t.buttonName=t.time--+"秒后重新发送",t.timer=window.setInterval(function(){n.buttonName=n.time+"秒后重新发送",--n.time,n.time<0&&(n.buttonName="重新发送",n.time=60,n.isDisabled=!1,window.clearInterval(n.timer))},1e3)}).catch(function(n){t.resetForm(),t.codeLoading=!1,console.log(n.response.data.message)})}},doSubmit:function(){var t=this;this.$refs.form.validate(function(n){if(!n)return!1;t.loading=!0,t.user={email:t.form.email,password:t.form.pass},Object(i.d)(t.form.code,t.user).then(function(n){t.loading=!1,t.resetForm(),t.$notify({title:"邮箱修改成功",type:"success",duration:1500}),a.a.dispatch("GetInfo").then(function(){})}).catch(function(n){t.loading=!1,console.log(n.response.data.message)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),window.clearInterval(this.timer),this.time=60,this.buttonName="获取验证码",this.isDisabled=!1,this.form={pass:"",email:"",code:""}}}},l=(e("JWCd"),e("KHd+")),c=Object(l.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"inline-block"}},[e("el-dialog",{attrs:{visible:t.dialog,"close-on-click-modal":!1,title:t.title,"append-to-body":"",width:"475px"},on:{"update:visible":function(n){t.dialog=n},close:t.cancel}},[e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[e("el-form-item",{attrs:{label:"新邮箱",prop:"email"}},[e("el-input",{staticStyle:{width:"200px"},attrs:{"auto-complete":"on"},model:{value:t.form.email,callback:function(n){t.$set(t.form,"email",n)},expression:"form.email"}}),t._v(" "),e("el-button",{attrs:{loading:t.codeLoading,disabled:t.isDisabled,size:"small"},on:{click:t.sendCode}},[t._v(t._s(t.buttonName))])],1),t._v(" "),e("el-form-item",{attrs:{label:"验证码",prop:"code"}},[e("el-input",{staticStyle:{width:"320px"},model:{value:t.form.code,callback:function(n){t.$set(t.form,"code",n)},expression:"form.code"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"当前密码",prop:"pass"}},[e("el-input",{staticStyle:{width:"320px"},attrs:{type:"password"},model:{value:t.form.pass,callback:function(n){t.$set(t.form,"pass",n)},expression:"form.pass"}})],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"2388c3d7",null);c.options.__file="updateEmail.vue";n.default=c.exports},"wk8/":function(t,n,e){"use strict";e.d(n,"a",function(){return s}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"e",function(){return o}),e.d(n,"d",function(){return l});var a=e("t3Un");function s(t){return Object(a.a)({url:"/vue/api/users",method:"post",data:t})}function i(t){return Object(a.a)({url:"/vue/api/users/"+t,method:"delete"})}function r(t){return Object(a.a)({url:"/vue/api/users",method:"put",data:t})}function o(t){var n={oldPass:t.oldPass,newPass:t.newPass};return Object(a.a)({url:"/vue/api/users/updatePass/",method:"post",data:n})}function l(t,n){return Object(a.a)({url:"/vue/api/users/updateEmail/"+t,method:"post",data:n})}}}]);