(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5b40","chunk-061b","chunk-be61"],{"/yl8":function(t,e,a){},"14Xm":function(t,e,a){t.exports=a("ls82")},"3ADX":function(t,e,a){"use strict";var s=a("14Xm"),i=a.n(s),r=a("4d7F"),n=a.n(r),o=a("D3Ub"),l=a.n(o),c=a("t3Un");function u(t,e){return Object(c.a)({url:t,method:"get",params:e})}e.a={data:function(){return{loading:!0,data:[],page:0,size:10,total:0,url:"",params:{},query:{},time:10,isAdd:!1}},methods:{init:function(){var t=this;return l()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeInit();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",new n.a(function(e,a){t.loading=!0,u(t.url,t.params).then(function(a){0===a.status?(t.total=a.obj.total,t.data=a.obj.list):(t.total=a.totalElements,t.data=a.content),setTimeout(function(){t.loading=!1},t.time),console.log("initData"),e(a)}).catch(function(e){t.loading=!1,a(e)})}));case 5:case"end":return e.stop()}},e,t)}))()},beforeInit:function(){return!0},pageChange:function(t){this.page=t-1,this.init()},sizeChange:function(t){this.page=0,this.size=t,this.init()},dleChangePage:function(t){void 0===t&&(t=1),this.data.length===t&&0!==this.page&&(this.page=this.page-1)},toQuery:function(){this.page=0,this.init()}}}},"3oz2":function(t,e,a){"use strict";var s=a("/yl8");a.n(s).a},"99or":function(t,e,a){"use strict";a.r(e);var s=a("QbLZ"),i=a.n(s),r=a("L2JU"),n=a("7Qib"),o=a("dUbn"),l=a("q4Ke"),c=a("X4fA"),u=a("Q2AE"),d=a("3ADX"),f={name:"Center",components:{updatePass:o.default,updateEmail:l.default},mixins:[d.a],data:function(){return{ico:"el-icon-refresh",headers:{Authorization:"Bearer "+Object(c.a)()}}},computed:i()({},Object(r.b)(["user","updateAvatarApi"])),created:function(){var t=this;this.$nextTick(function(){t.init()}),u.a.dispatch("GetInfo").then(function(){})},methods:{parseTime:n.d,formatEmail:function(t){return Object(n.e)(t)},beforeInit:function(){this.url="api/logs/user";return this.params={page:this.page,size:this.size,sort:"id,desc"},!0},handleSuccess:function(t,e,a){this.$notify({title:"头像修改成功",type:"success",duration:2500}),u.a.dispatch("GetInfo").then(function(){})},handleError:function(t,e,a){var s=JSON.parse(t.message);this.$notify({title:s.message,type:"error",duration:2500})},refresh:function(){var t=this;this.ico="el-icon-loading",this.$refs.log.init(),setTimeout(function(){t.ico="el-icon-refresh"},300)}}},m=(a("fnfW"),a("KHd+")),p=Object(m.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:8,lg:6,xl:5}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("个人信息")])]),t._v(" "),a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,action:t.updateAvatarApi}},[t.user.avatar?a("img",{staticClass:"avatar",attrs:{src:t.user.avatar,title:"点击上传头像"}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("ul",{staticClass:"user-info"},[a("li",[a("svg-icon",{attrs:{"icon-class":"user1"}}),t._v(" 用户名称 "),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.username))])],1),t._v(" "),a("li",[a("svg-icon",{attrs:{"icon-class":"phone"}}),t._v(" 手机号码 "),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.phone))])],1),t._v(" "),a("li",[a("svg-icon",{attrs:{"icon-class":"email"}}),t._v(" 用户邮箱 "),a("div",{staticClass:"user-right"},[t._v(t._s(t.user.email))])],1),t._v(" "),a("li",[a("svg-icon",{attrs:{"icon-class":"dept"}}),t._v(" 所属部门 "),a("div",{staticClass:"user-right"},[t._v(" "+t._s(t.user.dept)+" / "+t._s(t.user.job))])],1),t._v(" "),a("li",[a("svg-icon",{attrs:{"icon-class":"date"}}),t._v(" 创建日期 "),a("div",{staticClass:"user-right"},[t._v(t._s(t.parseTime(t.user.createTime)))])],1),t._v(" "),a("li",[a("svg-icon",{attrs:{"icon-class":"anq"}}),t._v(" 安全设置\n              "),a("div",{staticClass:"user-right"},[a("a",{on:{click:function(e){t.$refs.pass.dialog=!0}}},[t._v("修改密码")]),t._v(" "),a("a",{on:{click:function(e){t.$refs.email.dialog=!0}}},[t._v("修改邮箱")])])],1)])])])],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:16,lg:18,xl:19}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("操作日志")]),t._v(" "),a("div",{staticStyle:{display:"inline-block",float:"right",cursor:"pointer"},on:{click:t.refresh}},[a("i",{class:t.ico})])]),t._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,size:"small"}},[a("el-table-column",{attrs:{prop:"description",label:"行为"}}),t._v(" "),a("el-table-column",{attrs:{prop:"requestIp",label:"IP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"请求耗时",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.time<=300?a("el-tag",[t._v(t._s(e.row.time)+"ms")]):e.row.time<=1e3?a("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.time)+"ms")]):a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.time)+"ms")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建日期",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.parseTime(e.row.createTime)))])]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:t.total,"current-page":t.page+1,layout:"total, prev, pager, next, sizes"},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1)])],1)],1),t._v(" "),a("updateEmail",{ref:"email",attrs:{email:t.user.email}}),t._v(" "),a("updatePass",{ref:"pass"})],1)},[],!1,null,null,null);p.options.__file="center.vue";e.default=p.exports},D3Ub:function(t,e,a){"use strict";e.__esModule=!0;var s=function(t){return t&&t.__esModule?t:{default:t}}(a("4d7F"));e.default=function(t){return function(){var e=t.apply(this,arguments);return new s.default(function(t,a){return function i(r,n){try{var o=e[r](n),l=o.value}catch(t){return void a(t)}if(!o.done)return s.default.resolve(l).then(function(t){i("next",t)},function(t){i("throw",t)});t(l)}("next")})}}},HZIk:function(t,e,a){},JWCd:function(t,e,a){"use strict";var s=a("x7yj");a.n(s).a},Yfch:function(t,e,a){"use strict";function s(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)}a.d(e,"a",function(){return s})},dUbn:function(t,e,a){"use strict";a.r(e);var s=a("Q2AE"),i=a("wk8/"),r={data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改密码",form:{oldPass:"",newPass:"",confirmPass:""},rules:{oldPass:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPass:[{required:!0,validator:function(e,a,s){a?t.form.newPass!==a?s(new Error("两次输入的密码不一致")):s():s(new Error("请再次输入密码"))},trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,Object(i.e)(t.form).then(function(e){t.resetForm(),t.$notify({title:"密码修改成功，请重新登录",type:"success",duration:1500}),setTimeout(function(){s.a.dispatch("LogOut").then(function(){location.reload()})},1500)}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={oldPass:"",newPass:"",confirmPass:""}}}},n=(a("3oz2"),a("KHd+")),o=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline-block"}},[a("el-dialog",{attrs:{visible:t.dialog,"close-on-click-modal":!1,title:t.title,"append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialog=e},close:t.cancel}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[a("el-form-item",{attrs:{label:"旧密码",prop:"oldPass"}},[a("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.oldPass,callback:function(e){t.$set(t.form,"oldPass",e)},expression:"form.oldPass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新密码",prop:"newPass"}},[a("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.newPass,callback:function(e){t.$set(t.form,"newPass",e)},expression:"form.newPass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"confirmPass"}},[a("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.confirmPass,callback:function(e){t.$set(t.form,"confirmPass",e)},expression:"form.confirmPass"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"be6df2a6",null);o.options.__file="updatePass.vue";e.default=o.exports},fnfW:function(t,e,a){"use strict";var s=a("HZIk");a.n(s).a},q4Ke:function(t,e,a){"use strict";a.r(e);var s=a("Q2AE"),i=a("Yfch"),r=a("wk8/"),n=a("t3Un");var o={props:{email:{type:String,required:!0}},data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改邮箱",form:{pass:"",email:"",code:""},user:{email:"",password:""},codeLoading:!1,codeData:{type:"email",value:""},buttonName:"获取验证码",isDisabled:!1,time:60,rules:{pass:[{required:!0,message:"当前密码不能为空",trigger:"blur"}],email:[{required:!0,validator:function(e,a,s){""===a||null===a?s(new Error("新邮箱不能为空")):a===t.email?s(new Error("新邮箱不能与旧邮箱相同")):Object(i.a)(a)?s():s(new Error("邮箱格式错误"))},trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},sendCode:function(){var t=this;if(this.form.email&&this.form.email!==this.email){this.codeLoading=!0,this.buttonName="验证码发送中",this.codeData.value=this.form.email;var e=this;(function(t){return Object(n.a)({url:"api/code/resetEmail",method:"post",data:t})})(this.codeData).then(function(a){t.$message({showClose:!0,message:"发送成功，验证码有效期5分钟",type:"success"}),t.codeLoading=!1,t.isDisabled=!0,t.buttonName=t.time--+"秒后重新发送",t.timer=window.setInterval(function(){e.buttonName=e.time+"秒后重新发送",--e.time,e.time<0&&(e.buttonName="重新发送",e.time=60,e.isDisabled=!1,window.clearInterval(e.timer))},1e3)}).catch(function(e){t.resetForm(),t.codeLoading=!1,console.log(e.response.data.message)})}},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.user={email:t.form.email,password:t.form.pass},Object(r.d)(t.form.code,t.user).then(function(e){t.loading=!1,t.resetForm(),t.$notify({title:"邮箱修改成功",type:"success",duration:1500}),s.a.dispatch("GetInfo").then(function(){})}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),window.clearInterval(this.timer),this.time=60,this.buttonName="获取验证码",this.isDisabled=!1,this.form={pass:"",email:"",code:""}}}},l=(a("JWCd"),a("KHd+")),c=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline-block"}},[a("el-dialog",{attrs:{visible:t.dialog,"close-on-click-modal":!1,title:t.title,"append-to-body":"",width:"475px"},on:{"update:visible":function(e){t.dialog=e},close:t.cancel}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[a("el-form-item",{attrs:{label:"新邮箱",prop:"email"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{"auto-complete":"on"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),a("el-button",{attrs:{loading:t.codeLoading,disabled:t.isDisabled,size:"small"},on:{click:t.sendCode}},[t._v(t._s(t.buttonName))])],1),t._v(" "),a("el-form-item",{attrs:{label:"验证码",prop:"code"}},[a("el-input",{staticStyle:{width:"320px"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"当前密码",prop:"pass"}},[a("el-input",{staticStyle:{width:"320px"},attrs:{type:"password"},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"2388c3d7",null);c.options.__file="updateEmail.vue";e.default=c.exports},"wk8/":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r}),a.d(e,"c",function(){return n}),a.d(e,"e",function(){return o}),a.d(e,"d",function(){return l});var s=a("t3Un");function i(t){return Object(s.a)({url:"/vue/api/users",method:"post",data:t})}function r(t){return Object(s.a)({url:"/vue/api/users/"+t,method:"delete"})}function n(t){return Object(s.a)({url:"/vue/api/users",method:"put",data:t})}function o(t){var e={oldPass:t.oldPass,newPass:t.newPass};return Object(s.a)({url:"/vue/api/users/updatePass/",method:"post",data:e})}function l(t,e){return Object(s.a)({url:"/vue/api/users/updateEmail/"+t,method:"post",data:e})}},x7yj:function(t,e,a){}}]);