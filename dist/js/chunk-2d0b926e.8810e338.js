(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b926e"],{3270:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{attrs:{flat:"",tile:""}},[o("v-toolbar",{attrs:{color:"orange darken-1",dark:""}},[o("v-toolbar-title",[e._v("Edit Course")])],1),o("v-container",{attrs:{fluid:"","grid-list-md":"",grey:"","lighten-4":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:""}},[o("v-form",[o("v-text-field",{attrs:{"prepend-icon":"face",name:"title",label:"หัวข้อเรื่อง",type:"text"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),o("v-text-field",{attrs:{"prepend-icon":"dialpad",name:"number",label:"รหัสวิชา",type:"text"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),o("v-text-field",{attrs:{"prepend-icon":"perm_identity",name:"professor",label:"อาจารย์ประจำวิชา",type:"text"},model:{value:e.professor,callback:function(t){e.professor=t},expression:"professor"}}),o("v-text-field",{attrs:{"prepend-icon":"location_city",name:"branch",label:"สาขา",type:"text"},model:{value:e.branch,callback:function(t){e.branch=t},expression:"branch"}}),o("v-text-field",{attrs:{"prepend-icon":"domain",name:"sector",label:"ภาควิชา ",type:"text"},model:{value:e.sector,callback:function(t){e.sector=t},expression:"sector"}}),o("v-text-field",{attrs:{"prepend-icon":"school",name:"faculty",label:"คณะ ",type:"text"},model:{value:e.faculty,callback:function(t){e.faculty=t},expression:"faculty"}}),o("v-text-field",{attrs:{"prepend-icon":"add_to_photos",name:"image",label:"อัพโหลดไฟล์ภาพ",type:"file"},on:{change:e.onFileChange},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1)],1),o("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:""}},[o("v-textarea",{attrs:{solo:"",name:"Description",label:"รายละเอียด",value:"รายละเอียด: "},model:{value:e.Description,callback:function(t){e.Description=t},expression:"Description"}})],1)],1),o("v-layout",[o("form",{on:{submit:function(t){return t.preventDefault(),e.addNewTodo(t)}}},[o("label",{attrs:{for:"new-todo"}},[e._v("Link video From Youtube")]),o("v-text-field",{attrs:{"prepend-icon":"add_to_queue",id:"new-todo",placeholder:"Add Link video"},model:{value:e.newTodoText,callback:function(t){e.newTodoText=t},expression:"newTodoText"}}),o("v-btn",{attrs:{color:"orange darken-1"},on:{click:e.addNewTodo}},[e._v("Add Video")])],1),o("ul",e._l(e.todos,function(t,a){return o("todo-item",{key:t.id,tag:"li",attrs:{title:t.title},on:{remove:function(t){e.todos.splice(a,1)}}},[e._v(e._s(t.title)),o("br")])}))]),o("v-layout",[o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"orange darken-1"},on:{click:e.save}},[e._v("Save Course")])],1)],1)],1)],1)},n=[],l={data:function(){return{title:"หัวข้อคอร์ส",number:"6515",professor:"test",branch:"วิทยาคอม",sector:"วิทยาคอม",faculty:"วิทยาศาสตร์",Description:"รายละเอียดพอคราวๆเกี่ยวกับคอร์ส",image:"",newTodoText:"",todos:[{id:1,title:"link test 1"},{id:2,title:"link test 2"}],nextTodoId:3}},methods:{save:function(){},addNewTodo:function(){this.todos.push({id:this.nextTodoId++,title:this.newTodoText}),this.newTodoText=""}}},r=l,i=o("2877"),s=o("6544"),d=o.n(s),c=o("8336"),u=o("b0af"),p=o("99d9"),f=o("a523"),v=o("0e8f"),b=o("4bd4"),x=o("a722"),m=o("9910"),k=o("2677"),T=o("a844"),y=o("71d9"),h=o("2a7f"),w=Object(i["a"])(r,a,n,!1,null,null,null);w.options.__file="editcourse.vue";t["default"]=w.exports;d()(w,{VBtn:c["a"],VCard:u["a"],VCardActions:p["a"],VContainer:f["a"],VFlex:v["a"],VForm:b["a"],VLayout:x["a"],VSpacer:m["a"],VTextField:k["a"],VTextarea:T["a"],VToolbar:y["a"],VToolbarTitle:h["b"]})}}]);
//# sourceMappingURL=chunk-2d0b926e.8810e338.js.map