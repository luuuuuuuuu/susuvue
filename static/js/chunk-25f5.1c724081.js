(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25f5","chunk-24c2","chunk-0078"],{"4aF8":function(n,t,e){var r=e("nDHm");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e("SZ7m").default)("46d9c697",r,!0,{})},CB6D:function(n,t,e){"use strict";e.r(t);var r=e("xs8T"),i={name:"Config",data:function(){return{loading:!1,form:{appID:"",sysServiceProviderId:"",privateKey:"",publicKey:"",returnUrl:"",notifyUrl:""},rules:{appID:[{required:!0,message:"请输入appID",trigger:"blur"}],sysServiceProviderId:[{required:!0,message:"请输入商家账号",trigger:"blur"}],privateKey:[{required:!0,message:"商户私钥不能为空",trigger:"blur"}],publicKey:[{required:!0,message:"支付宝公钥不能为空",trigger:"blur"}],returnUrl:[{required:!0,message:"回调地址不能为空",trigger:"blur"}],notifyUrl:[{required:!0,message:"回调地址不能为空",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var n=this;Object(r.a)().then(function(t){n.form=t})},doSubmit:function(){var n=this;this.$refs.form.validate(function(t){if(!t)return!1;n.loading=!0,Object(r.c)(n.form).then(function(t){n.$notify({title:"修改成功",type:"success",duration:2500}),n.loading=!1}).catch(function(t){n.loading=!1,console.log(t.response.data.message)})})}}},a=(e("Pqqx"),e("KHd+")),o=Object(a.a)(i,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-form",{ref:"form",staticStyle:{"margin-top":"6px"},attrs:{model:n.form,rules:n.rules,size:"small","label-width":"100px"}},[e("el-form-item",{attrs:{label:"appID",prop:"appID"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.appID,callback:function(t){n.$set(n.form,"appID",t)},expression:"form.appID"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("应用APPID,收款账号既是APPID对应支付宝账号")])],1),n._v(" "),e("el-form-item",{attrs:{label:"商家账号",prop:"sysServiceProviderId"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.sysServiceProviderId,callback:function(t){n.$set(n.form,"sysServiceProviderId",t)},expression:"form.sysServiceProviderId"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("商家账号")])],1),n._v(" "),e("el-form-item",{attrs:{label:"商户私钥",prop:"privateKey"}},[e("el-input",{staticStyle:{width:"40%"},attrs:{type:"password"},model:{value:n.form.privateKey,callback:function(t){n.$set(n.form,"privateKey",t)},expression:"form.privateKey"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("商户私钥，你的PKCS8格式RSA2私钥")])],1),n._v(" "),e("el-form-item",{attrs:{label:"支付宝公钥",prop:"publicKey"}},[e("el-input",{staticStyle:{width:"40%"},attrs:{type:"password"},model:{value:n.form.publicKey,callback:function(t){n.$set(n.form,"publicKey",t)},expression:"form.publicKey"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("支付宝公钥")])],1),n._v(" "),e("el-form-item",{attrs:{label:"回调地址",prop:"returnUrl"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.returnUrl,callback:function(t){n.$set(n.form,"returnUrl",t)},expression:"form.returnUrl"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("订单完成后返回的地址")])],1),n._v(" "),e("el-form-item",{attrs:{label:"异步通知",prop:"notifyUrl"}},[e("el-input",{staticStyle:{width:"40%"},model:{value:n.form.notifyUrl,callback:function(t){n.$set(n.form,"notifyUrl",t)},expression:"form.notifyUrl"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("支付结果异步通知地址")])],1),n._v(" "),e("el-form-item",{attrs:{label:""}},[e("el-button",{attrs:{loading:n.loading,size:"medium",type:"primary"},on:{click:n.doSubmit}},[n._v("保存配置")])],1)],1)},[],!1,null,"5b80ab14",null);o.options.__file="config.vue";t.default=o.exports},Di7W:function(n,t,e){var r=e("qK3n");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e("SZ7m").default)("70405aef",r,!0,{})},KES2:function(n,t,e){"use strict";e.r(t);var r=e("xs8T"),i={data:function(){return{url:"",newWin:null,loading:!1,form:{subject:"",totalAmount:"",body:""},rules:{subject:[{required:!0,message:"商品名称不能为空",trigger:"blur"}],totalAmount:[{required:!0,message:"商品价格不能为空",trigger:"blur"}],body:[{required:!0,message:"商品描述不能为空",trigger:"blur"}]}}},watch:{url:function(n,t){n&&this.newWin&&(this.newWin.sessionStorage.clear(),this.newWin.location.href=n,this.url="",this.newWin=null)}},methods:{doSubmit:function(){var n=this;this.$refs.form.validate(function(t){if(!t)return!1;n.loading=!0,n.newWin=window.open();var e="";e=/(Android)/i.test(navigator.userAgent)?"aliPay/toPayAsWeb":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"aliPay/toPayAsWeb":"aliPay/toPayAsPC",Object(r.b)(e,n.form).then(function(t){n.loading=!1,n.url=t}).catch(function(t){n.loading=!1,console.log(t.response.data.message)})})}}},a=(e("pHzU"),e("KHd+")),o=Object(a.a)(i,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("el-form",{ref:"form",staticStyle:{"margin-top":"6px"},attrs:{model:n.form,rules:n.rules,size:"small","label-width":"90px"}},[e("el-form-item",{attrs:{label:"商品名称",prop:"subject"}},[e("el-input",{staticStyle:{width:"35%"},model:{value:n.form.subject,callback:function(t){n.$set(n.form,"subject",t)},expression:"form.subject"}})],1),n._v(" "),e("el-form-item",{attrs:{label:"商品价格",prop:"totalAmount"}},[e("el-input",{staticStyle:{width:"35%"},model:{value:n.form.totalAmount,callback:function(t){n.$set(n.form,"totalAmount",t)},expression:"form.totalAmount"}}),n._v(" "),e("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[n._v("测试允许区间(0,5000]")])],1),n._v(" "),e("el-form-item",{attrs:{label:"商品描述",prop:"body"}},[e("el-input",{staticStyle:{width:"35%"},attrs:{rows:"8",type:"textarea"},model:{value:n.form.body,callback:function(t){n.$set(n.form,"body",t)},expression:"form.body"}})],1),n._v(" "),e("el-form-item",{attrs:{label:""}},[e("el-button",{attrs:{loading:n.loading,size:"medium",type:"primary"},on:{click:n.doSubmit}},[n._v("去支付")])],1)],1)],1)},[],!1,null,"2aef334e",null);o.options.__file="toPay.vue";t.default=o.exports},Pqqx:function(n,t,e){"use strict";var r=e("Di7W");e.n(r).a},QkaN:function(n,t,e){"use strict";e.r(t);var r=e("CB6D"),i=e("KES2"),a=(e("zkOn"),{components:{Config:r.default,ToPay:i.default},data:function(){return{activeName:"second"}}}),o=(e("pD8H"),e("KHd+")),l=Object(o.a)(a,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-tabs",{staticStyle:{"padding-left":"5px"},model:{value:n.activeName,callback:function(t){n.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"参数配置",name:"first"}},[e("Config")],1),n._v(" "),e("el-tab-pane",{attrs:{label:"支付测试",name:"second"}},[e("ToPay")],1),n._v(" "),e("el-tab-pane",{attrs:{label:"使用说明",name:"third"}},[e("div",[e("blockquote",{staticClass:"my-blockquote"},[n._v("注意")]),n._v(" "),e("pre",{staticClass:"my-code"},[n._v("测试所用参数都是沙箱环境，仅供测试使用，申请地址："),e("a",{staticStyle:{color:"#00a0e9"},attrs:{href:"https://openhome.alipay.com/platform/appDaily.htm?tab=info",target:"_blank"}},[n._v("支付宝开发平台")]),n._v("\n如需付款测试，请使用\n账号：uuxesw9745@sandbox.com\n密码与支付密码：111111")]),n._v(" "),e("blockquote",{staticClass:"my-blockquote"},[n._v(" 支付设置")]),n._v(" "),e("pre",{staticClass:"my-code"},[n._v('// 支付提供两个接口，\n// PC端与手机端，并且在前端使用代码识别\nif (/(Android)/i.test(navigator.userAgent)){     // 判断是否为Android手机\n    url = "/aliPay/toPayAsWeb"\n}else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){  // 判断是否为苹果手机\n    url = "/aliPay/toPayAsWeb"\n} else {\n    url = "/aliPay/toPayAsPC"\n}')])])])],1)},[],!1,null,"3223878e",null);l.options.__file="index.vue";t.default=l.exports},UsiR:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,".my-blockquote {\n  margin: 0px 0px 10px;\n  padding: 15px;\n  line-height: 22px;\n  border-left: 5px solid #00437B;\n  border-radius: 0 2px 2px 0;\n  background-color: #f2f2f2; }\n\n.my-code {\n  position: relative;\n  padding: 15px;\n  line-height: 20px;\n  border-left: 5px solid #ddd;\n  color: #333;\n  font-family: Courier New;\n  font-size: 12px; }\n",""])},haYP:function(n,t,e){var r=e("kTFI");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e("SZ7m").default)("08cfa854",r,!0,{})},kTFI:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},nDHm:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},pD8H:function(n,t,e){"use strict";var r=e("haYP");e.n(r).a},pHzU:function(n,t,e){"use strict";var r=e("4aF8");e.n(r).a},qK3n:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},xs8T:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"b",function(){return o});var r=e("t3Un");function i(){return Object(r.a)({url:"api/aliPay",method:"get"})}function a(n){return Object(r.a)({url:"api/aliPay",data:n,method:"put"})}function o(n,t){return Object(r.a)({url:"api/"+n,data:t,method:"post"})}},zkOn:function(n,t,e){var r=e("UsiR");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e("SZ7m").default)("734a8ef2",r,!0,{})}}]);