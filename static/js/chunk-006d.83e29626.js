(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-006d"],{"/gXl":function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return l});var o=n("t3Un");function r(t){return Object(o.a)({url:"/vue/api/dept",method:"get",params:t})}function a(t){return Object(o.a)({url:"/vue/api/dept",method:"post",data:t})}function i(t){return Object(o.a)({url:"/vue/api/dept/"+t,method:"delete"})}function l(t){return Object(o.a)({url:"/vue/api/dept",method:"put",data:t})}},"2oBl":function(t,e,n){"use strict";var o=n("6qgA");n.n(o).a},"5IoS":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"[data-v-6683953e] .el-input-number .el-input__inner {\n  text-align: left;\n}\n",""])},"6qgA":function(t,e,n){var o=n("5IoS");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("07e4b38a",o,!0,{})},MmD4:function(t,e,n){"use strict";n.r(e);var o=n("/gXl"),r=n("zF5t"),a=n("cCY5"),i=n.n(a),l=(n("VCwm"),{components:{Treeselect:i.a},props:{isAdd:{type:Boolean,required:!0}},data:function(){return{dateScopes:["全部","本级","自定义"],loading:!1,dialog:!1,depts:[],deptIds:[],form:{name:"",depts:[],remark:"",dataScope:"本级",level:3},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;if("自定义"===this.form.dataScope&&0===this.deptIds.length)this.$message({message:"自定义数据权限不能为空",type:"warning"});else{if(this.form.depts=[],"自定义"===this.form.dataScope)for(var e=0;e<this.deptIds.length;e++)this.form.depts.push({id:this.deptIds[e]});this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.isAdd?t.doAdd():t.doEdit()})}},doAdd:function(){var t=this;Object(r.a)(this.form).then(function(e){t.resetForm(),t.$notify({title:"添加成功",type:"success",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},doEdit:function(){var t=this;Object(r.c)(this.form).then(function(e){t.resetForm(),t.$notify({title:"修改成功",type:"success",duration:2500}),t.loading=!1,t.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={name:"",depts:[],remark:"",dataScope:"本级",level:3}},getDepts:function(){var t=this;Object(o.d)({enabled:!0}).then(function(e){t.depts=e.content})},changeScope:function(){"自定义"===this.form.dataScope&&this.getDepts()}}}),s=(n("2oBl"),n("KHd+")),u=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.dialog,title:t.isAdd?"新增角色":"编辑角色","append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialog=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"80px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{staticStyle:{width:"370px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"角色级别",prop:"sort"}},[n("el-input-number",{staticStyle:{width:"370px"},attrs:{min:1,"controls-position":"right"},model:{value:t.form.level,callback:function(e){t.$set(t.form,"level",t._n(e))},expression:"form.level"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"数据范围"}},[n("el-select",{staticStyle:{width:"370px"},attrs:{placeholder:"请选择数据范围"},on:{change:t.changeScope},model:{value:t.form.dataScope,callback:function(e){t.$set(t.form,"dataScope",e)},expression:"form.dataScope"}},t._l(t.dateScopes,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),"自定义"===t.form.dataScope?n("el-form-item",{attrs:{label:"数据权限"}},[n("treeselect",{staticStyle:{width:"370px"},attrs:{options:t.depts,multiple:"",placeholder:"请选择"},model:{value:t.deptIds,callback:function(e){t.deptIds=e},expression:"deptIds"}})],1):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"描述信息"}},[n("el-input",{staticStyle:{width:"370px"},attrs:{rows:"5",type:"textarea"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"6683953e",null);u.options.__file="form.vue";e.default=u.exports},zF5t:function(t,e,n){"use strict";n.d(e,"g",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"f",function(){return i}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u}),n.d(e,"e",function(){return c}),n.d(e,"d",function(){return d});var o=n("t3Un");function r(){return Object(o.a)({url:"/vue/api/roles/all",method:"get"})}function a(t){return Object(o.a)({url:"/vue/api/roles",method:"post",data:t})}function i(t){return Object(o.a)({url:"/vue/api/roles/"+t,method:"get"})}function l(){return Object(o.a)({url:"/vue/api/roles/level",method:"get"})}function s(t){return Object(o.a)({url:"/vue/api/roles/"+t,method:"delete"})}function u(t){return Object(o.a)({url:"/vue/api/roles",method:"put",data:t})}function c(t){return Object(o.a)({url:"/vue/api/roles/permission",method:"put",data:t})}function d(t){return Object(o.a)({url:"/vue/api/roles/menu",method:"put",data:t})}}}]);