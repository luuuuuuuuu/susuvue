(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-32f6","chunk-fa3d"],{"14Xm":function(t,e,n){t.exports=n("ls82")},"1tk0":function(t,e,n){"use strict";n.r(e);var a=n("3ADX"),o=n("t3Un");var i={name:"Generator",mixins:[a.a],props:{name:{type:String,required:!0}},data:function(){return{genLoading:!1,dialog:!1,columnQuery:""}},methods:{toGen:function(){var t=this;this.dialog=!0,this.time=130,this.$nextTick(function(){t.init()})},beforeInit:function(){this.url="api/generator/columns";var t=this.name;return this.params={tableName:t},!0},cancel:function(){this.dialog=!1},doSubmit:function(){var t=this;this.genLoading=!0,function(t,e){return Object(o.a)({url:"/vue/api/generator?tableName="+e,data:t,method:"post"})}(this.data,this.name).then(function(e){t.$notify({title:"生成成功",type:"success",duration:2500}),t.dialog=!1,t.genLoading=!1}).catch(function(e){t.dialog=!1,t.genLoading=!1,console.log(e.response.data.message)})}}},l=(n("e7KL"),n("KHd+")),r=Object(l.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.toGen}},[t._v("生成代码")]),t._v(" "),n("el-dialog",{attrs:{visible:t.dialog,title:"代码生成配置","append-to-body":"",width:"800px"},on:{"update:visible":function(e){t.dialog=e}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,size:"small"}},[n("el-table-column",{attrs:{label:"序号",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"columnName",label:"字段名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"columnType",label:"字段类型"}}),t._v(" "),n("el-table-column",{attrs:{prop:"columnComment",label:"字段标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{staticClass:"edit-input",model:{value:t.data[e.$index].columnComment,callback:function(n){t.$set(t.data[e.$index],"columnComment",n)},expression:"data[scope.$index].columnComment"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"查询方式"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{staticClass:"edit-input",attrs:{clearable:"",placeholder:"请选择"},model:{value:t.data[e.$index].columnQuery,callback:function(n){t.$set(t.data[e.$index],"columnQuery",n)},expression:"data[scope.$index].columnQuery"}},[n("el-option",{attrs:{label:"模糊查询",value:"1"}}),t._v(" "),n("el-option",{attrs:{label:"精确查询",value:"2"}})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"columnShow",label:"列表显示"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{attrs:{content:"true"===e.row.columnShow?"显示":"不显示",placement:"top"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"true","inactive-value":"false"},model:{value:t.data[e.$index].columnShow,callback:function(n){t.$set(t.data[e.$index],"columnShow",n)},expression:"data[scope.$index].columnShow"}})],1)]}}])})],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{loading:t.genLoading,type:"primary"},on:{click:t.doSubmit}},[t._v("生成")])],1)],1)],1)},[],!1,null,null,null);r.options.__file="generator.vue";e.default=r.exports},"3ADX":function(t,e,n){"use strict";var a=n("14Xm"),o=n.n(a),i=n("4d7F"),l=n.n(i),r=n("D3Ub"),s=n.n(r),u=n("t3Un");function c(t,e){return Object(u.a)({url:t,method:"get",params:e})}e.a={data:function(){return{loading:!0,data:[],page:0,size:10,total:0,url:"",params:{},query:{},time:10,isAdd:!1}},methods:{init:function(){var t=this;return s()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeInit();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",new l.a(function(e,n){t.loading=!0,c(t.url,t.params).then(function(n){0===n.status?(t.total=n.obj.total,t.data=n.obj.list):(t.total=n.totalElements,t.data=n.content),setTimeout(function(){t.loading=!1},t.time),e(n)}).catch(function(e){t.loading=!1,n(e)})}));case 5:case"end":return e.stop()}},e,t)}))()},beforeInit:function(){return!0},pageChange:function(t){this.page=t-1,this.init()},sizeChange:function(t){this.page=0,this.size=t,this.init()},dleChangePage:function(t){void 0===t&&(t=1),this.data.length===t&&0!==this.page&&(this.page=this.page-1)},toQuery:function(){this.page=0,this.init()}}}},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var a=function(t){return t&&t.__esModule?t:{default:t}}(n("4d7F"));e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,n){return function o(i,l){try{var r=e[i](l),s=r.value}catch(t){return void n(t)}if(!r.done)return a.default.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}("next")})}}},PJ67:function(t,e,n){var a=n("SdnP");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("SZ7m").default)("5cfb1923",a,!0,{})},SdnP:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".edit-input .el-input__inner {\n  border: none;\n}\n",""])},U9al:function(t,e,n){"use strict";n.r(e);var a=n("t3Un");var o=n("3ADX"),i=n("7Qib"),l={components:{Generator:n("1tk0").default},mixins:[o.a],data:function(){return{loading:!1,dialog:!1,form:{author:"",pack:"",path:"",moduleName:"",cover:"false",apiPath:"",prefix:""},rules:{author:[{required:!0,message:"作者不能为空",trigger:"blur"}],pack:[{required:!0,message:"包路径不能为空",trigger:"blur"}],moduleName:[{required:!0,message:"包路径不能为空",trigger:"blur"}],path:[{required:!0,message:"前端代码生成路径不能为空",trigger:"blur"}],apiPath:[{required:!0,message:"前端Api文件生成路径不能为空",trigger:"blur"}],cover:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{parseTime:i.d,beforeInit:function(){this.url="api/generator/tables";var t=this.query.name;return this.params={page:this.page,size:this.size},t&&(this.params.name=t),!0},openConfig:function(){var t=this;Object(a.a)({url:"/vue/api/genConfig",method:"get"}).then(function(e){t.form=e,t.form.cover=t.form.cover.toString()}),this.dialog=!0},cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.doUpdate()})},doUpdate:function(){var t=this;(function(t){return Object(a.a)({url:"/vue/api/genConfig",data:t,method:"put"})})(this.form).then(function(e){t.resetForm(),t.$notify({title:"更新成功",type:"success",duration:2500}),t.loading=!1}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={author:"",pack:"",path:"",moduleName:"",cover:"false",apiPath:"",prefix:""}}}},r=(n("eQ7A"),n("KHd+")),s=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"head-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入表名"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.toQuery(e):null}},model:{value:t.query.name,callback:function(e){t.$set(t.query,"name",e)},expression:"query.name"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"success",icon:"el-icon-search"},on:{click:t.toQuery}},[t._v("搜索")]),t._v(" "),n("div",{staticStyle:{display:"inline-block",margin:"0px 2px"}},[n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:t.openConfig}},[t._v("生成器配置")])],1)],1),t._v(" "),n("el-dialog",{attrs:{visible:t.dialog,title:"生成器配置","append-to-body":"",width:"550px"},on:{"update:visible":function(e){t.dialog=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"78px"}},[n("el-form-item",{attrs:{label:"作者名称",prop:"author"}},[n("el-input",{staticStyle:{width:"420px"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"去表前缀",prop:"prefix"}},[n("el-input",{staticStyle:{width:"420px"},attrs:{placeholder:"默认不去除表前缀"},model:{value:t.form.prefix,callback:function(e){t.$set(t.form,"prefix",e)},expression:"form.prefix"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[n("el-input",{staticStyle:{width:"420px"},model:{value:t.form.moduleName,callback:function(e){t.$set(t.form,"moduleName",e)},expression:"form.moduleName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"至于包下",prop:"pack"}},[n("el-input",{staticStyle:{width:"420px"},model:{value:t.form.pack,callback:function(e){t.$set(t.form,"pack",e)},expression:"form.pack"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"前端路径",prop:"path"}},[n("el-input",{staticStyle:{width:"420px"},model:{value:t.form.path,callback:function(e){t.$set(t.form,"path",e)},expression:"form.path"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"API路径",prop:"apiPath"}},[n("el-input",{staticStyle:{width:"420px"},model:{value:t.form.apiPath,callback:function(e){t.$set(t.form,"apiPath",e)},expression:"form.apiPath"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"是否覆盖",prop:"cover"}},[n("el-radio",{attrs:{label:"true"},model:{value:t.form.cover,callback:function(e){t.$set(t.form,"cover",e)},expression:"form.cover"}},[t._v("是")]),t._v(" "),n("el-radio",{attrs:{label:"false"},model:{value:t.form.cover,callback:function(e){t.$set(t.form,"cover",e)},expression:"form.cover"}},[t._v("否")])],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,size:"small"}},[n("el-table-column",{attrs:{label:"序号",width:"85",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"tableName",label:"表名"}}),t._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"engine",label:"数据库引擎"}}),t._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"coding",label:"字符编码集"}}),t._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"remark",label:"备注"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createTime",label:"创建日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.parseTime(e.row.createTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"140px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("Generator",{attrs:{name:t.row.tableName}})]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:t.total,"current-page":t.page+1,layout:"total, prev, pager, next, sizes"},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1)},[],!1,null,"0823fd1c",null);s.options.__file="index.vue";e.default=s.exports},e7KL:function(t,e,n){"use strict";var a=n("PJ67");n.n(a).a},eQ7A:function(t,e,n){"use strict";var a=n("ldsl");n.n(a).a},ldsl:function(t,e,n){var a=n("tdHQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("SZ7m").default)("ed0fa830",a,!0,{})},tdHQ:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}}]);