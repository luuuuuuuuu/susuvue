(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-16ec","chunk-3625"],{"/gXl":function(n,e,t){"use strict";t.d(e,"d",function(){return a}),t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o}),t.d(e,"c",function(){return s});var i=t("t3Un");function a(n){return Object(i.a)({url:"/vue/api/dept",method:"get",params:n})}function r(n){return Object(i.a)({url:"/vue/api/dept",method:"post",data:n})}function o(n){return Object(i.a)({url:"/vue/api/dept/"+n,method:"delete"})}function s(n){return Object(i.a)({url:"/vue/api/dept",method:"put",data:n})}},"14Xm":function(n,e,t){n.exports=t("ls82")},"24Mc":function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"3ADX":function(n,e,t){"use strict";var i=t("14Xm"),a=t.n(i),r=t("4d7F"),o=t.n(r),s=t("D3Ub"),l=t.n(s),u=t("t3Un");function d(n,e){return Object(u.a)({url:n,method:"get",params:e})}e.a={data:function(){return{loading:!0,data:[],page:0,size:10,total:0,url:"",params:{},query:{},time:10,isAdd:!1}},methods:{init:function(){var n=this;return l()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.beforeInit();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",new o.a(function(e,t){n.loading=!0,d(n.url,n.params).then(function(t){0===t.status?(n.total=t.obj.total,n.data=t.obj.list):(n.total=t.totalElements,n.data=t.content),setTimeout(function(){n.loading=!1},n.time),e(t)}).catch(function(e){n.loading=!1,t(e)})}));case 5:case"end":return e.stop()}},e,n)}))()},beforeInit:function(){return!0},pageChange:function(n){this.page=n-1,this.init()},sizeChange:function(n){this.page=0,this.size=n,this.init()},dleChangePage:function(n){void 0===n&&(n=1),this.data.length===n&&0!==this.page&&(this.page=this.page-1)},toQuery:function(){this.page=0,this.init()}}}},"41Be":function(n,e,t){"use strict";t.d(e,"a",function(){return a});var i=t("Q2AE");function a(n){if(n&&n instanceof Array&&n.length>0){var e=n;return!!(i.a.getters&&i.a.getters.roles).some(function(n){return e.includes(n)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},BDRA:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},D3Ub:function(n,e,t){"use strict";e.__esModule=!0;var i=function(n){return n&&n.__esModule?n:{default:n}}(t("4d7F"));e.default=function(n){return function(){var e=n.apply(this,arguments);return new i.default(function(n,t){return function a(r,o){try{var s=e[r](o),l=s.value}catch(n){return void t(n)}if(!s.done)return i.default.resolve(l).then(function(n){a("next",n)},function(n){a("throw",n)});n(l)}("next")})}}},HzRm:function(n,e,t){"use strict";t.r(e);var i=t("41Be"),a=t("3ADX"),r=t("amOd"),o=t("wk8/"),s=t("/gXl"),l=t("7Qib"),u={components:{eForm:t("zL/z").default},mixins:[a.a,r.a],data:function(){return{height:document.documentElement.clientHeight-180+"px;",isAdd:!1,delLoading:!1,deptName:"",depts:[],deptId:null,defaultProps:{children:"children",label:"name"},downloadLoading:!1,queryTypeOptions:[{key:"username",display_name:"用户名"},{key:"email",display_name:"邮箱"}],enabledTypeOptions:[{key:"true",display_name:"激活"},{key:"false",display_name:"锁定"}]}},created:function(){var n=this;this.getDeptDatas(),this.$nextTick(function(){n.init(),n.getDict("user_status")})},mounted:function(){var n=this;window.onresize=function(){n.height=document.documentElement.clientHeight-180+"px;"}},methods:{parseTime:l.d,checkPermission:i.a,beforeInit:function(){this.url="/vue/api/users";var n=this.query,e=n.type,t=n.value,i=n.enabled;return this.params={page:this.page,size:this.size,sort:"id,desc",deptId:this.deptId},e&&t&&(this.params[e]=t),""!==i&&null!==i&&(this.params.enabled=i),!0},subDelete:function(n){var e=this;this.delLoading=!0,Object(o.b)(n).then(function(t){e.delLoading=!1,e.$refs[n].doClose(),e.dleChangePage(),e.init(),e.$notify({title:"删除成功",type:"success",duration:2500})}).catch(function(t){e.delLoading=!1,e.$refs[n].doClose(),console.log(t.response.data.message)})},getDeptDatas:function(){var n=this,e={sort:"id,desc"};this.deptName&&(e.name=this.deptName),Object(s.d)(e).then(function(e){n.depts=e.content})},handleNodeClick:function(n){0===n.pid?this.deptId=null:this.deptId=n.id,this.init()},add:function(){this.isAdd=!0;var n=this.$refs.form;n.roleIds=[],n.roles=[],n.depts=[],n.deptId=null,n.jobId=null,n.jobs=[],n.dialog=!0,n.getDepts(),n.getRoles(),n.getRoleLevel()},download:function(){var n=this;this.downloadLoading=!0,Promise.all([t.e("chunk-0d49"),t.e("chunk-7651")]).then(t.bind(null,"BfKX")).then(function(e){var t=n.formatJson(["id","username","email","avatar","enabled","createTime","lastPasswordResetTime"],n.data);e.export_json_to_excel({header:["ID","用户名","邮箱","头像地址","状态","注册日期","最后修改密码日期"],data:t,filename:"table-list"}),n.downloadLoading=!1})},formatJson:function(n,e){return e.map(function(e){return n.map(function(n){return"createTime"===n||"lastPasswordResetTime"===n?Object(l.d)(e[n]):"enabled"===n?Object(l.d)(e[n])?"启用":"禁用":e[n]})})},edit:function(n){this.isAdd=!1;var e=this.$refs.form;e.getRoles(),e.getDepts(),e.getRoleLevel(),e.roleIds=[],e.form={id:n.id,username:n.username,phone:n.phone,email:n.email,enabled:n.enabled.toString(),roles:[],dept:{id:n.dept.id},job:{id:n.job.id}},n.roles.forEach(function(n,t){e.roleIds.push(n.id)}),e.deptId=n.dept.id,e.jobId=n.job.id,e.getJobs(e.deptId),e.dialog=!0}}},d=(t("Tkly"),t("KHd+")),c=Object(d.a)(u,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("eForm",{ref:"form",attrs:{"is-add":n.isAdd,dicts:n.dicts}}),n._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{xs:7,sm:6,md:4,lg:4,xl:4}},[t("div",{staticClass:"head-container"},[t("el-input",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"输入部门名称搜索","prefix-icon":"el-icon-search"},on:{input:n.getDeptDatas},model:{value:n.deptName,callback:function(e){n.deptName=e},expression:"deptName"}})],1),n._v(" "),t("el-tree",{attrs:{data:n.depts,props:n.defaultProps,"expand-on-click-node":!1,"default-expand-all":""},on:{"node-click":n.handleNodeClick}})],1),n._v(" "),t("el-col",{attrs:{xs:17,sm:18,md:20,lg:20,xl:20}},[t("div",{staticClass:"head-container"},[t("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"输入关键字搜索"},nativeOn:{keyup:function(e){return"button"in e||!n._k(e.keyCode,"enter",13,e.key,"Enter")?n.toQuery(e):null}},model:{value:n.query.value,callback:function(e){n.$set(n.query,"value",e)},expression:"query.value"}}),n._v(" "),t("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"类型"},model:{value:n.query.type,callback:function(e){n.$set(n.query,"type",e)},expression:"query.type"}},n._l(n.queryTypeOptions,function(n){return t("el-option",{key:n.key,attrs:{label:n.display_name,value:n.key}})})),n._v(" "),t("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"状态"},on:{change:n.toQuery},model:{value:n.query.enabled,callback:function(e){n.$set(n.query,"enabled",e)},expression:"query.enabled"}},n._l(n.enabledTypeOptions,function(n){return t("el-option",{key:n.key,attrs:{label:n.display_name,value:n.key}})})),n._v(" "),t("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"success",icon:"el-icon-search"},on:{click:n.toQuery}},[n._v("搜索")]),n._v(" "),t("div",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_CREATE"],expression:"['ADMIN','USER_ALL','USER_CREATE']"}],staticStyle:{display:"inline-block",margin:"0px 2px"}},[t("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:n.add}},[n._v("新增")])],1),n._v(" "),t("div",{staticStyle:{display:"inline-block"}},[t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN"],expression:"['ADMIN']"}],staticClass:"filter-item",attrs:{loading:n.downloadLoading,size:"mini",type:"warning",icon:"el-icon-download"},on:{click:n.download}},[n._v("导出")])],1)],1),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:n.data,size:"small"}},[t("el-table-column",{attrs:{prop:"username",label:"用户名"}}),n._v(" "),t("el-table-column",{attrs:{prop:"phone",label:"电话"}}),n._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"email",label:"邮箱"}}),n._v(" "),t("el-table-column",{attrs:{label:"部门 / 岗位"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("div",[n._v(n._s(e.row.dept.name)+" / "+n._s(e.row.job.name))])]}}])}),n._v(" "),t("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return n._l(n.dicts,function(i){return t("div",{key:i.id},[e.row.enabled.toString()===i.value?t("el-tag",{attrs:{type:e.row.enabled?"":"info"}},[n._v(n._s(i.label))]):n._e()],1)})}}])}),n._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"createTime",label:"创建日期"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("span",[n._v(n._s(n.parseTime(e.row.createTime)))])]}}])}),n._v(" "),n.checkPermission(["ADMIN","USER_ALL","USER_EDIT","USER_DELETE"])?t("el-table-column",{attrs:{label:"操作",width:"125",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_EDIT"],expression:"['ADMIN','USER_ALL','USER_EDIT']"}],attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(t){n.edit(e.row)}}}),n._v(" "),t("el-popover",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_DELETE"],expression:"['ADMIN','USER_ALL','USER_DELETE']"}],ref:e.row.id,attrs:{placement:"top",width:"180"}},[t("p",[n._v("确定删除本条数据吗？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){n.$refs[e.row.id].doClose()}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{loading:n.delLoading,type:"primary",size:"mini"},on:{click:function(t){n.subDelete(e.row.id)}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini"},slot:"reference"})],1)]}}])}):n._e()],1),n._v(" "),t("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:n.total,"current-page":n.page+1,layout:"total, prev, pager, next, sizes"},on:{"size-change":n.sizeChange,"current-change":n.pageChange}})],1)],1)],1)},[],!1,null,"9dd32b5c",null);c.options.__file="index.vue";e.default=c.exports},QbtA:function(n,e,t){var i=t("24Mc");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,t("SZ7m").default)("70fac492",i,!0,{})},Raav:function(n,e,t){var i=t("BDRA");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,t("SZ7m").default)("16dd03d5",i,!0,{})},Tkly:function(n,e,t){"use strict";var i=t("Raav");t.n(i).a},amOd:function(n,e,t){"use strict";var i=t("14Xm"),a=t.n(i),r=t("4d7F"),o=t.n(r),s=t("D3Ub"),l=t.n(s),u=t("tyLx");e.a={data:function(){return{dicts:[],dictMap:{}}},methods:{getDict:function(n){var e=this;return l()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new o.a(function(t,i){Object(u.d)(n).then(function(n){e.dicts=n.content,t(n)}).catch(function(n){i(n)})}));case 1:case"end":return t.stop()}},t,e)}))()},getDictMap:function(n){var e=this;return l()(a.a.mark(function t(){var i,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(i=n.split(","),r=0;r<i.length;r++)e.dictMap[i[r]]=[];return t.abrupt("return",new o.a(function(t,i){Object(u.e)(n).then(function(n){e.dictMap=n,t(n)}).catch(function(n){i(n)})}));case 3:case"end":return t.stop()}},t,e)}))()}}}},dv4G:function(n,e,t){"use strict";t.d(e,"d",function(){return a}),t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o}),t.d(e,"c",function(){return s});var i=t("t3Un");function a(n){var e={deptId:n,page:0,size:9999};return Object(i.a)({url:"/vue/api/job",method:"get",params:e})}function r(n){return Object(i.a)({url:"/vue/api/job",method:"post",data:n})}function o(n){return Object(i.a)({url:"/vue/api/job/"+n,method:"delete"})}function s(n){return Object(i.a)({url:"/vue/api/job",method:"put",data:n})}},tyLx:function(n,e,t){"use strict";t.d(e,"d",function(){return a}),t.d(e,"e",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"b",function(){return s}),t.d(e,"c",function(){return l});var i=t("t3Un");function a(n){var e={dictName:n,page:0,size:9999};return Object(i.a)({url:"/vue/api/dictDetail",method:"get",params:e})}function r(n){var e={dictName:n,page:0,size:9999};return Object(i.a)({url:"/vue/api/dictDetail/map",method:"get",params:e})}function o(n){return Object(i.a)({url:"/vue/api/dictDetail",method:"post",data:n})}function s(n){return Object(i.a)({url:"/vue/api/dictDetail/"+n,method:"delete"})}function l(n){return Object(i.a)({url:"/vue/api/dictDetail",method:"put",data:n})}},"wk8/":function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r}),t.d(e,"c",function(){return o}),t.d(e,"e",function(){return s}),t.d(e,"d",function(){return l});var i=t("t3Un");function a(n){return Object(i.a)({url:"/vue/api/users",method:"post",data:n})}function r(n){return Object(i.a)({url:"/vue/api/users/"+n,method:"delete"})}function o(n){return Object(i.a)({url:"/vue/api/users",method:"put",data:n})}function s(n){var e={oldPass:n.oldPass,newPass:n.newPass};return Object(i.a)({url:"/vue/api/users/updatePass/",method:"post",data:e})}function l(n,e){return Object(i.a)({url:"/vue/api/users/updateEmail/"+n,method:"post",data:e})}},xtAv:function(n,e,t){"use strict";var i=t("QbtA");t.n(i).a},zF5t:function(n,e,t){"use strict";t.d(e,"g",function(){return a}),t.d(e,"a",function(){return r}),t.d(e,"f",function(){return o}),t.d(e,"h",function(){return s}),t.d(e,"b",function(){return l}),t.d(e,"c",function(){return u}),t.d(e,"e",function(){return d}),t.d(e,"d",function(){return c});var i=t("t3Un");function a(){return Object(i.a)({url:"/vue/api/roles/all",method:"get"})}function r(n){return Object(i.a)({url:"/vue/api/roles",method:"post",data:n})}function o(n){return Object(i.a)({url:"/vue/api/roles/"+n,method:"get"})}function s(){return Object(i.a)({url:"/vue/api/roles/level",method:"get"})}function l(n){return Object(i.a)({url:"/vue/api/roles/"+n,method:"delete"})}function u(n){return Object(i.a)({url:"/vue/api/roles",method:"put",data:n})}function d(n){return Object(i.a)({url:"/vue/api/roles/permission",method:"put",data:n})}function c(n){return Object(i.a)({url:"/vue/api/roles/menu",method:"put",data:n})}},"zL/z":function(n,e,t){"use strict";t.r(e);var i=t("wk8/"),a=t("/gXl"),r=t("zF5t"),o=t("dv4G"),s=t("cCY5"),l=t.n(s),u=(t("VCwm"),{components:{Treeselect:l.a},props:{isAdd:{type:Boolean,required:!0},dicts:{type:Array,required:!0}},data:function(){var n=this;return{dialog:!1,loading:!1,form:{username:"",email:"",enabled:"false",roles:[],job:{id:""},dept:{id:""},phone:null},roleIds:[],roles:[],depts:[],deptId:null,jobId:null,jobs:[],style:"width: 184px",level:3,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],phone:[{required:!0,trigger:"blur",validator:function(e,t,i){t?n.isvalidPhone(t)?i():i(new Error("请输入正确的11位手机号码")):i(new Error("请输入电话号码"))}}],enabled:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},created:function(){navigator.userAgent.indexOf("Chrome")>=0?this.style="width: 184px":this.style="width: 172px"},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var n=this;this.form.dept.id=this.deptId,this.form.job.id=this.jobId,this.$refs.form.validate(function(e){if(!e)return!1;if(null===n.deptId||void 0===n.deptId)n.$message({message:"部门不能为空",type:"warning"});else if(null===n.jobId)n.$message({message:"岗位不能为空",type:"warning"});else if(0===n.roleIds.length)n.$message({message:"角色不能为空",type:"warning"});else{n.loading=!0,n.form.roles=[];var t=n;n.roleIds.forEach(function(n,e){var i={id:n};t.form.roles.push(i)}),n.isAdd?n.doAdd():n.doEdit()}})},doAdd:function(){var n=this;Object(i.a)(this.form).then(function(e){n.resetForm(),n.$notify({title:"添加成功",message:"默认密码：111111",type:"success",duration:2500}),n.loading=!1,n.$parent.init()}).catch(function(e){n.loading=!1,console.log(e.response.data.message)})},doEdit:function(){var n=this;Object(i.c)(this.form).then(function(e){n.resetForm(),n.$notify({title:"修改成功",type:"success",duration:2500}),n.loading=!1,n.$parent.init()}).catch(function(e){n.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.deptId=null,this.jobId=null,this.roleIds=[],this.form={username:"",email:"",enabled:"false",roles:[],job:{id:""},dept:{id:""},phone:null}},getRoles:function(){var n=this;Object(r.g)().then(function(e){n.roles=e}).catch(function(n){console.log(n.response.data.message)})},getJobs:function(n){var e=this;Object(o.d)(n).then(function(n){e.jobs=n.content,n.content.length>0?e.jobId=n.content[0].id:e.jobId=null}).catch(function(n){console.log(n.response.data.message)})},getDepts:function(){var n=this;Object(a.d)({enabled:!0}).then(function(e){n.depts=e.content})},isvalidPhone:function(n){return/^1[3|4|5|7|8][0-9]\d{8}$/.test(n)},selectFun:function(n,e){this.getJobs(n.id)},getRoleLevel:function(){var n=this;Object(r.h)().then(function(e){n.level=e.level}).catch(function(n){console.log(n.response.data.message)})}}}),d=(t("xtAv"),t("KHd+")),c=Object(d.a)(u,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("el-dialog",{attrs:{visible:n.dialog,title:n.isAdd?"新增用户":"编辑用户","append-to-body":"",width:"570px"},on:{"update:visible":function(e){n.dialog=e}}},[t("el-form",{ref:"form",attrs:{inline:!0,model:n.form,rules:n.rules,size:"small","label-width":"66px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:n.form.username,callback:function(e){n.$set(n.form,"username",e)},expression:"form.username"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"状态",prop:"enabled"}},n._l(n.dicts,function(e){return t("el-radio",{key:e.id,attrs:{label:e.value},model:{value:n.form.enabled,callback:function(e){n.$set(n.form,"enabled",e)},expression:"form.enabled"}},[n._v(n._s(e.label))])})),n._v(" "),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{model:{value:n.form.phone,callback:function(e){n.$set(n.form,"phone",n._n(e))},expression:"form.phone"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:n.form.email,callback:function(e){n.$set(n.form,"email",e)},expression:"form.email"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"部门"}},[t("treeselect",{style:n.style,attrs:{options:n.depts,placeholder:"选择部门"},on:{select:n.selectFun},model:{value:n.deptId,callback:function(e){n.deptId=e},expression:"deptId"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"岗位"}},[t("el-select",{style:n.style,attrs:{placeholder:null==n.jobId?"无数据":"请先选择部门"},model:{value:n.jobId,callback:function(e){n.jobId=e},expression:"jobId"}},n._l(n.jobs,function(n,e){return t("el-option",{key:n.name+e,attrs:{label:n.name,value:n.id}})}))],1),n._v(" "),t("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"角色"}},[t("el-select",{staticStyle:{width:"450px"},attrs:{multiple:"",placeholder:"请选择"},model:{value:n.roleIds,callback:function(e){n.roleIds=e},expression:"roleIds"}},n._l(n.roles,function(e,i){return t("el-option",{key:e.name+i,attrs:{disabled:1!==n.level&&e.level<=n.level,label:e.name,value:e.id}})}))],1)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"text"},on:{click:n.cancel}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{loading:n.loading,type:"primary"},on:{click:n.doSubmit}},[n._v("确认")])],1)],1)},[],!1,null,"cb531070",null);c.options.__file="form.vue";e.default=c.exports}}]);