(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6128"],{"14Xm":function(n,t,e){n.exports=e("ls82")},"1XeS":function(n,t,e){var i=e("1oVs");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e("SZ7m").default)("d191800c",i,!0,{})},"1oVs":function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"3ADX":function(n,t,e){"use strict";var i=e("14Xm"),o=e.n(i),a=e("4d7F"),s=e.n(a),r=e("D3Ub"),l=e.n(r),u=e("t3Un");function c(n,t){return Object(u.a)({url:n,method:"get",params:t})}t.a={data:function(){return{loading:!0,data:[],page:0,size:10,total:0,url:"",params:{},query:{},time:10,isAdd:!1}},methods:{init:function(){var n=this;return l()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.beforeInit();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.abrupt("return",new s.a(function(t,e){n.loading=!0,c(n.url,n.params).then(function(e){0===e.status?(n.total=e.obj.total,n.data=e.obj.list):(n.total=e.totalElements,n.data=e.content),setTimeout(function(){n.loading=!1},n.time),console.log("initData"),t(e)}).catch(function(t){n.loading=!1,e(t)})}));case 5:case"end":return t.stop()}},t,n)}))()},beforeInit:function(){return!0},pageChange:function(n){this.page=n-1,this.init()},sizeChange:function(n){this.page=0,this.size=n,this.init()},dleChangePage:function(n){void 0===n&&(n=1),this.data.length===n&&0!==this.page&&(this.page=this.page-1)},toQuery:function(){this.page=0,this.init()}}}},"41Be":function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e("Q2AE");function o(n){if(n&&n instanceof Array&&n.length>0){var t=n;return!!(i.a.getters&&i.a.getters.roles).some(function(n){return t.includes(n)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},"9OQC":function(n,t,e){"use strict";var i=e("1XeS");e.n(i).a},D3Ub:function(n,t,e){"use strict";t.__esModule=!0;var i=function(n){return n&&n.__esModule?n:{default:n}}(e("4d7F"));t.default=function(n){return function(){var t=n.apply(this,arguments);return new i.default(function(n,e){return function o(a,s){try{var r=t[a](s),l=r.value}catch(n){return void e(n)}if(!r.done)return i.default.resolve(l).then(function(n){o("next",n)},function(n){o("throw",n)});n(l)}("next")})}}},GgrG:function(n,t,e){"use strict";e.r(t);var i=e("QbLZ"),o=e.n(i),a=e("41Be"),s=e("3ADX"),r=e("MSNs"),l=e("7Qib"),u=e("L2JU"),c=e("X4fA"),d={mixins:[s.a],data:function(){return{icon:"el-icon-refresh",delAllLoading:!1,url:"",headers:{Authorization:"Bearer "+Object(c.a)()},dialog:!1,dialogImageUrl:"",dialogVisible:!1,fileList:[],files:[],newWin:null,downloadLoading:!1,delLoading:!1}},computed:o()({},Object(u.b)(["qiNiuUploadApi"])),watch:{url:function(n,t){n&&this.newWin&&(this.newWin.sessionStorage.clear(),this.newWin.location.href=n,this.url="",this.newWin=null)}},created:function(){var n=this;this.$nextTick(function(){n.init()})},methods:{parseTime:l.d,checkPermission:a.a,beforeInit:function(){this.url="api/qiNiuContent";var n=this.query.value;return this.params={page:this.page,size:this.size,sort:"id,desc"},n&&(this.params.key=n),!0},subDelete:function(n){var t=this;this.delLoading=!0,Object(r.a)(n).then(function(e){t.delLoading=!1,t.$refs[n].doClose(),t.init(),t.$notify({title:"删除成功",type:"success",duration:2500})}).catch(function(e){t.delLoading=!1,t.$refs[n].doClose(),console.log(e.response.data.message)})},download:function(n){var t=this;this.downloadLoading=!0,this.newWin=window.open(),Object(r.c)(n).then(function(n){t.downloadLoading=!1,t.url=n.url}).catch(function(n){t.downloadLoading=!1,console.log(n.response.data.message)})},getExtensionName:function(n){var t=n.lastIndexOf(".");return t>-1&&t<n.length-1?n.substring(t+1):n},handleSuccess:function(n,t,e){var i=t.uid,o=n.id;this.files.push({uid:i,id:o})},handleBeforeRemove:function(n,t){for(var e=0;e<this.files.length;e++)if(this.files[e].uid===n.uid)return Object(r.a)(this.files[e].id).then(function(n){}),!0},handlePictureCardPreview:function(n){this.dialogImageUrl=n.url,this.dialogVisible=!0},doSubmit:function(){this.fileList=[],this.dialogVisible=!1,this.dialogImageUrl="",this.dialog=!1,this.init()},handleError:function(n,t,e){var i=JSON.parse(n.message);this.$notify({title:i.message,type:"error",duration:2500})},synchronize:function(){var n=this;this.icon="el-icon-loading",this.buttonName="同步中",Object(r.e)().then(function(t){n.icon="el-icon-refresh",n.buttonName="同步数据",n.$message({showClose:!0,message:"数据同步成功",type:"success",duration:1500}),n.toQuery()}).catch(function(t){n.icon="el-icon-refresh",n.buttonName="同步数据",console.log(t.response.data.message)})},doDelete:function(){var n=this;this.delAllLoading=!0;for(var t=this.$refs.table.selection,e=[],i=0;i<t.length;i++)e.push(t[i].id);Object(r.b)(e).then(function(t){n.delAllLoading=!1,n.dleChangePage(e.length),n.init(),n.$notify({title:"删除成功",type:"success",duration:2500})}).catch(function(t){n.delAllLoading=!1,console.log(t.response.data.message)})},open:function(){var n=this;this.$confirm("你确定删除选中的数据吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.doDelete()})}}},f=(e("9OQC"),e("KHd+")),p=Object(f.a)(d,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container",staticStyle:{padding:"8px"}},[e("div",{staticClass:"head-container"},[e("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"输入文件名称搜索"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.toQuery(t):null}},model:{value:n.query.value,callback:function(t){n.$set(n.query,"value",t)},expression:"query.value"}}),n._v(" "),e("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"success",icon:"el-icon-search"},on:{click:n.toQuery}},[n._v("搜索")]),n._v(" "),e("div",{staticStyle:{display:"inline-block",margin:"0px 2px"}},[e("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-upload"},on:{click:function(t){n.dialog=!0}}},[n._v("上传文件")])],1),n._v(" "),e("el-button",{staticClass:"filter-item",attrs:{icon:n.icon,size:"mini",type:"warning"},on:{click:n.synchronize}},[n._v("同步数据")]),n._v(" "),e("div",{staticStyle:{display:"inline-block",margin:"0px 2px"}},[e("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","PICTURE_ALL","PICTURE_DELETE"],expression:"['ADMIN','PICTURE_ALL','PICTURE_DELETE']"}],staticClass:"filter-item",attrs:{loading:n.delAllLoading,disabled:0===n.data.length||0===n.$refs.table.selection.length,size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:n.open}},[n._v("删除")])],1)],1),n._v(" "),e("el-dialog",{attrs:{visible:n.dialog,"append-to-body":"",width:"500px"},on:{"update:visible":function(t){n.dialog=t},close:n.doSubmit}},[e("el-upload",{staticClass:"upload-demo",attrs:{"before-remove":n.handleBeforeRemove,"on-success":n.handleSuccess,"on-error":n.handleError,"file-list":n.fileList,headers:n.headers,action:n.qiNiuUploadApi,multiple:""}},[e("el-button",{attrs:{size:"small",type:"primary"}},[n._v("点击上传")]),n._v(" "),e("div",{staticClass:"el-upload__tip",staticStyle:{display:"block"},attrs:{slot:"tip"},slot:"tip"},[n._v("请勿上传违法文件，且文件不超过15M")])],1),n._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:n.doSubmit}},[n._v("确认")])],1)],1),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:n.data,size:"small"}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"文件名"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",[n._v(n._s(t.row.key))])]}}])}),n._v(" "),e("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"文件类型"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",[n._v(n._s(n.getExtensionName(t.row.key)))])]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"bucket",label:"空间名称"}}),n._v(" "),e("el-table-column",{attrs:{prop:"size",label:"文件大小"}}),n._v(" "),e("el-table-column",{attrs:{prop:"type",label:"空间类型"}}),n._v(" "),e("el-table-column",{attrs:{width:"180px",prop:"updateTime",label:"创建日期"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",[n._v(n._s(n.parseTime(t.row.updateTime)))])]}}])}),n._v(" "),n.checkPermission(["ADMIN","PICTURE_ALL","PICTURE_DELETE"])?e("el-table-column",{attrs:{label:"操作",width:"130px",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{loading:n.downloadLoading,size:"mini",type:"primary",icon:"el-icon-download"},on:{click:function(e){n.download(t.row.id)}}}),n._v(" "),e("el-popover",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","PICTURE_ALL","PICTURE_DELETE"],expression:"['ADMIN','PICTURE_ALL','PICTURE_DELETE']"}],ref:t.row.id,attrs:{placement:"top",width:"180"}},[e("p",[n._v("确定删除本条数据吗？")]),n._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){n.$refs[t.row.id].doClose()}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{loading:n.delLoading,type:"primary",size:"mini"},on:{click:function(e){n.subDelete(t.row.id)}}},[n._v("确定")])],1),n._v(" "),e("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini"},slot:"reference"})],1)]}}])}):n._e()],1),n._v(" "),e("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:n.total,"current-page":n.page+1,layout:"total, prev, pager, next, sizes"},on:{"size-change":n.sizeChange,"current-change":n.pageChange}})],1)},[],!1,null,"cdeba02c",null);p.options.__file="list.vue";t.default=p.exports},MSNs:function(n,t,e){"use strict";e.d(t,"d",function(){return o}),e.d(t,"f",function(){return a}),e.d(t,"a",function(){return s}),e.d(t,"c",function(){return r}),e.d(t,"e",function(){return l}),e.d(t,"b",function(){return u});var i=e("t3Un");function o(){return Object(i.a)({url:"api/qiNiuConfig",method:"get"})}function a(n){return Object(i.a)({url:"api/qiNiuConfig",data:n,method:"put"})}function s(n){return Object(i.a)({url:"api/qiNiuContent/"+n,method:"delete"})}function r(n){return Object(i.a)({url:"api/qiNiuContent/download/"+n,method:"get"})}function l(){return Object(i.a)({url:"api/qiNiuContent/synchronize",method:"post"})}function u(n){return Object(i.a)({url:"api/qiNiuContent/",method:"delete",data:n})}}}]);