webpackJsonp([47],{"3PNK":function(t,e,a){"use strict";function s(t){a("wohD")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("lLHC"),r=a("QmSG"),o={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:r.pagesize,pageformat:r.pageformat,Project_Status:{0:"未处理",1:"处理中",2:"已上线"},listQuery:{limit:r.LIMIT,offset:"",pid:"",status:"",create_user__username:"",action_user__username:"",search:"",ordering:""},TaskCompleteForm:!1,TestCompleteForm:!1,updateform:{id:"",task_complete:"",test_complete:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(l.h)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},deleteGroup:function(t){var e=this;Object(l.c)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*r.LIMIT,this.fetchData()},changeStatus:function(t){this.listQuery.status=t,this.fetchData()},showAllTicket:function(){this.listQuery.create_user__username="",this.listQuery.action_user__username="",this.listQuery.pid="",this.listQuery.search="",this.listQuery.status="",this.fetchData()},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()},updateTaskComplete:function(t){this.TaskCompleteForm=!0,this.updateform.id=t.id,this.updateform.status=t.status,this.updateform.task_complete=t.task_complete,this.updateform.test_complete=t.test_complete},updateTestComplete:function(t){this.TestCompleteForm=!0,this.updateform.id=t.id,this.updateform.status=t.status,this.updateform.task_complete=t.task_complete,this.updateform.test_complete=t.test_complete},changeComplete:function(){var t=this;Object(l.l)(this.updateform.id,this.updateform).then(function(e){t.$message({type:"success",message:"更新成功!"}),t.TaskCompleteForm=t.TestCompleteForm=!1,t.fetchData()})}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("router-link",{attrs:{to:"addopsproject"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建")])],1),t._v(" "),a("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:t.showAllTicket}},[t._v("全部")]),t._v(" "),a("el-button-group",{model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(Object.keys(t.Project_Status).length,function(e,s){return a("el-button",{key:s,attrs:{plain:"",size:"mini"},on:{click:function(e){t.changeStatus(s)}}},[t._v("\n            "+t._s(t.Project_Status[s])+"\n          ")])}))],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"编号"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.pid,callback:function(e){t.$set(t.listQuery,"pid",e)},expression:"listQuery.pid"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"标题、内容或类型"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.handleSortChange}},[a("el-table-column",{attrs:{prop:"pid",label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"viewopsproject/"+e.row.id}},[a("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.pid))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"level",label:"等级",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:e.row.level,callback:function(a){t.$set(e.row,"level",a)},expression:"scope.row.level"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini"}},[t._v("\n                "+t._s(t.Project_Status[e.row.status])+"\n              ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"task_complete",label:"任务进度",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(e.row.task_complete)+"%\n              "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更新任务进度",placement:"top"}},[a("el-button",{staticClass:"modifychange",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){t.updateTaskComplete(e.row)}}})],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_user",label:"创建人",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"指派人",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},t._l(e.row.action_user,function(e){return a("el-tag",{key:e,attrs:{size:"mini"}},[t._v("\n                "+t._s(e)+"\n              ")])}))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[t._v(t._s(t._f("parseDate")(e.row.create_time)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"editopsproject/"+e.row.id}},[a("el-button",{attrs:{type:"success",size:"small"}},[t._v("修改")])],1),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteGroup(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"}),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"更新任务进度",visible:t.TaskCompleteForm},on:{"update:visible":function(e){t.TaskCompleteForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{model:t.updateform,label:"完成百分比"}},[a("el-slider",{staticStyle:{"margin-right":"50px"},attrs:{step:10},model:{value:t.updateform.task_complete,callback:function(e){t.$set(t.updateform,"task_complete",e)},expression:"updateform.task_complete"}}),t._v(" "),a("a",[t._v(t._s(t.updateform.task_complete)+"%")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.changeComplete}},[t._v("确定")])],1)],1)],1)],1)},n=[],c={render:i,staticRenderFns:n},u=c,p=a("VU/8"),d=s,f=p(o,u,!1,d,null,null);e.default=f.exports},mLvW:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".modifychange{margin:5px}",""])},wohD:function(t,e,a){var s=a("mLvW");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("d7d3f5f4",s,!0)}});