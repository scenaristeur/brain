"use strict";(self["webpackChunkbrain"]=self["webpackChunkbrain"]||[]).push([[443],{833:function(t,a,e){e.r(a),e.d(a,{default:function(){return k}});var r=e(3396);const n={class:"about"},s=(0,r._)("h1",null,"This is an about page",-1),u=[s];function o(t,a){return(0,r.wg)(),(0,r.iD)("div",n,u)}var l=e(89);const c={},i=(0,l.Z)(c,[["render",o]]);var k=i},9009:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var r=e(3396),n=e(7139);const s=(0,r._)("hr",null,null,-1),u=["href"],o=(0,r._)("hr",null,null,-1),l=(0,r._)("hr",null,null,-1);function c(t,a,e,c,i,k){const w=(0,r.up)("b-button"),p=(0,r.up)("b-button-group"),h=(0,r.up)("b-button-toolbar");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Uk)(" WORK "),(0,r._)("div",null,[(0,r.Wm)(h,{"key-nav":"","aria-label":"Toolbar with button groups"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"mx-1"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Uk)("subspaces")])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Uk)("bases")])),_:1}),(0,r.Wm)(w,{onClick:k.getData},{default:(0,r.w5)((()=>[(0,r.Uk)("Get Data")])),_:1},8,["onClick"])])),_:1})])),_:1})]),s,(0,r._)("h3",null,(0,n.zw)(t.workspace.name),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.workspace.urls,(t=>((0,r.wg)(),(0,r.iD)("span",{key:t},[(0,r._)("a",{href:t,target:"_blank"},(0,n.zw)(t),9,u)])))),128)),o,(0,r.Uk)(" "+(0,n.zw)(k.workspaces)+" ",1),l,(0,r.Uk)(" #"+(0,n.zw)(t.workspace),1)])}var i={name:"WorkspaceView",created(){this.workspace=this.$store.state.core.currentWorkspace},data(){return{}},props:{},methods:{async getData(){this.data=await this.$getData(this.workspace),console.log(this.data)}},computed:{workspaces(){return this.$store.state.core.workspaces}},workspace(){return this.$store.state.core.currentWorkspace}},k=e(89);const w=(0,k.Z)(i,[["render",c]]);var p=w}}]);
//# sourceMappingURL=about.c6bdf67c.js.map