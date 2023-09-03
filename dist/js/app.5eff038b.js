(function(){"use strict";var e={4632:function(e,o,t){var n=t(9242),s=t(3396);function i(e,o,t,n,i,r){const a=(0,s.up)("router-link"),l=(0,s.up)("SolidLogin"),c=(0,s.up)("SpinnerComp"),d=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",null,[(0,s.Wm)(a,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(a,{to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(l),(0,s.Wm)(c)]),(0,s.Wm)(d)],64)}const r={class:"login"},a={key:0,class:"d-flex align-items-center"},l={key:0},c={key:1,class:"d-flex align-items-center"},d=["href"];function u(e,o,t,n,i,u){const p=(0,s.up)("b-form-select-option"),g=(0,s.up)("b-form-select"),f=(0,s.up)("b-form-input"),h=(0,s.up)("b-form-group"),m=(0,s.up)("b-button");return(0,s.wg)(),(0,s.iD)("span",r,[null==u.session||0==u.session.isLoggedIn?((0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g,{autofocus:"",size:"sm",modelValue:i.issuer,"onUpdate:modelValue":o[0]||(o[0]=e=>i.issuer=e),options:i.issuers,onChange:u.login},{first:(0,s.w5)((()=>[(0,s.Wm)(p,{value:null,disabled:""},{default:(0,s.w5)((()=>[(0,s.Uk)("-- Login / Connexion --")])),_:1})])),_:1},8,["modelValue","options","onChange"]),"other"==i.issuer?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(h,{id:"fieldset-1",description:"ex: `https://solidcommunity.net`",label:"url of your pod provider","label-for":"input-1","valid-feedback":"Thxs!","invalid-feedback":u.invalidFeedback,state:u.state},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{id:"input-1",modelValue:i.other,"onUpdate:modelValue":o[1]||(o[1]=e=>i.other=e),state:u.state,onChange:u.onChange,trim:""},null,8,["modelValue","state","onChange"])])),_:1},8,["invalid-feedback","state"]),(0,s.Wm)(m,{size:"sm",variant:"info"},{default:(0,s.w5)((()=>[(0,s.Uk)("Login / connexion")])),_:1})])):(0,s.kq)("",!0)])),_:1})])):((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(m,{onClick:u.logout,variant:"outline-danger",size:"sm"},{default:(0,s.w5)((()=>[(0,s.Uk)("Logout")])),_:1},8,["onClick"]),(0,s._)("a",{href:u.session.webId,target:"_blank"},"pod",8,d)]))])}var p={name:"SolidLogin",data(){return{issuers:[{value:"https://solidcommunity.net",text:"SolidCommunity.net (NSS)"},{value:"https://solidweb.org",text:"Solidweb.org (NSS)"},{value:"https://solidweb.me/",text:"Solidweb.me (CSS)"},{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net (NSS)"},{value:"https://dev.inrupt.net",text:"dev.inrupt.net (NSS)"},{value:"https://trinpod.us/",text:"Trinpod.us (hs ?)"},{value:"other",text:"Autre / Other"}],issuer:null,restore:!0,other:""}},methods:{onInput(){console.log("input",this.other)},onChange(){console.log("change",this.other),void 0!=this.other&&void 0!=this.other.length&&(this.issuer=this.other,this.login(this.issuer))},login(e){console.log(e),this.issuer=e,null!=this.issuer&&"other"!=this.issuer&&(console.log(this.issuer),this.$login(this.issuer))},logout(){this.$logout()}},computed:{session:{get(){return this.$store.state.solid.session},set(){}},state(){return this.other.startsWith("http")},invalidFeedback(){return this.other.length>0&&!this.other.startsWith("http")?"the url of your pod provider should start with `http`":"the url of your pod provider, not your webId ! "}}},g=t(89);const f=(0,g.Z)(p,[["render",u]]);var h=f,m=t(7139);const b={key:0};function w(e,o,t,n,i,r){const a=(0,s.up)("b-spinner"),l=(0,s.up)("b-badge"),c=(0,s.up)("b-button");return(0,s.wg)(),(0,s.iD)("span",null,[r.spinner.length>0?((0,s.wg)(),(0,s.iD)("span",b,[(0,s.Wm)(c,{variant:"warning",disabled:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{small:"",type:"grow"}),(0,s.Wm)(l,{variant:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,m.zw)(r.spinner.length),1)])),_:1})])),_:1})])):(0,s.kq)("",!0)])}var v={name:"SpinnerComp",methods:{reset(){this.$store.commit("core/resetSpinner")}},computed:{spinner(){return this.$store.state.core.spinner}}};const y=(0,g.Z)(v,[["render",w]]);var k=y,S={name:"App",components:{SolidLogin:h,SpinnerComp:k},created(){this.$checkSolidSession()}};const P=(0,g.Z)(S,[["render",i]]);var $=P,W=t(5431);(0,W.z)("/brain/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("This app has been updated, please close the app & re-open")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var x=t(2483);const _={class:"home"},j=(0,s._)("hr",null,null,-1);function I(e,o,t,n,i,r){const a=(0,s.up)("b-dropdown-item"),l=(0,s.up)("b-dropdown-divider"),c=(0,s.up)("b-dropdown"),d=(0,s.up)("b-col"),u=(0,s.up)("b-button"),p=(0,s.up)("b-button-group"),g=(0,s.up)("b-button-toolbar"),f=(0,s.up)("b-row"),h=(0,s.up)("b-form-input"),b=(0,s.up)("b-form-group"),w=(0,s.up)("b-form"),v=(0,s.up)("b-container"),y=(0,s.up)("WorkspaceList");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s.Wm)(v,{fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(c,{id:"dropdown-1",text:"Workspaces",class:"m-md-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{onClick:r.workspaceCreate},{default:(0,s.w5)((()=>[(0,s.Uk)("New Workspace")])),_:1},8,["onClick"]),(0,s.Wm)(l),(0,s.Wm)(a,{disabled:""},{default:(0,s.w5)((()=>[(0,s.Uk)("Disabled action")])),_:1})])),_:1})])])),_:1}),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(g,{"key-nav":"","aria-label":"Toolbar with button groups"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"mx-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)("new already exists")])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Undo")])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Redo")])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1}),null!=i.nw?((0,s.wg)(),(0,s.j4)(f,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{onSubmit:r.onSubmit,onReset:r.onReset},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{id:"input-group-1",label:"Workspace name:","label-for":"input-1",description:"Enter the name of the new workspace you want to create."},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{id:"input-1",modelValue:i.nw.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.nw.name=e),type:"text",placeholder:"Enter name",required:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(u,{type:"submit",variant:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Submit")])),_:1}),(0,s.Wm)(u,{type:"reset",variant:"danger"},{default:(0,s.w5)((()=>[(0,s.Uk)("Reset")])),_:1})])),_:1},8,["onSubmit","onReset"])])),_:1})):(0,s.kq)("",!0)])),_:1}),(0,s.Uk)(" session "+(0,m.zw)(r.session&&r.session.webId)+" , "+(0,m.zw)(r.pod&&r.pod.photo)+" ",1),j,(0,s.Wm)(y)])}const O={key:0};function C(e,o,t,n,i,r){const a=(0,s.up)("b-list-group-item"),l=(0,s.up)("b-list-group");return(0,s.wg)(),(0,s.iD)("div",null,[void 0==r.brains?((0,s.wg)(),(0,s.iD)("div",O," Please first create a Workspace, if it does not work, look for error message in the js console with Ctrl+Maj+I. ")):((0,s.wg)(),(0,s.j4)(l,{key:1},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.brains.brains,(e=>((0,s.wg)(),(0,s.j4)(a,{button:"",key:e.id,onClick:o=>r.workspaceRouter(e),class:"d-flex justify-content-between align-items-center"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,m.zw)(e.name)+" / "+(0,m.zw)(e.path),1)])),_:2},1032,["onClick"])))),128))])),_:1}))])}t(7658);var F={name:"WorkspaceList",created(){},data(){return{}},props:{},methods:{workspaceRouter(e){this.$store.commit("core/currentWorkspace",e),this.$router.push({name:"workspace"})}},computed:{brains(){return this.$store.state.core.brains}}};const N=(0,g.Z)(F,[["render",C]]);var T=N,B=t(3029);class A{constructor(e={}){this.id=e.id||(0,B.Z)(),this.name=e.name||Date.now(),this.type=e.type||"solid",this.urls=e.urls||[],this.subspaces=e.subspaces||[],this.bases=e.bases||[],this["@context"]={name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows","@base":"http://local/","@vocab":"https://scenaristeur.github.io/agent/",id:"@id",type:"@type",reverse:"@reverse",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},this.homepage="https://scenaristeur.github.io/brain"}test(){console.log("hello world")}}var R={name:"HomeView",components:{WorkspaceList:T},data(){return{nw:null}},async created(){},methods:{updateDir(e){console.log("up",e)},workspaceSelected(e){console.log(e.name,e.url)},workspaceCreate(){this.nw=new A,console.log(this.nw)},onSubmit(){console.log(this.nw),this.$createWorkspace(this.nw),this.onReset()},onReset(){this.nw=null},typeChanged(){"memory"==this.nw.type&&(this.nw.url="")}},computed:{session(){return this.$store.state.solid.session},pod(){return this.$store.state.solid.pod},brains(){return this.$store.state.core.brains}}};const D=(0,g.Z)(R,[["render",I]]);var L=D;const U=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,833))},{path:"/workspace",name:"workspace",component:()=>t.e(443).then(t.bind(t,9009))}],E=(0,x.p7)({history:(0,x.PO)("/brain/"),routes:U});var V=E,J=t(65);const z=()=>({workspaces:[],currentWorkspace:null,spinner:[],brain:void 0,brains:void 0}),M={addWorkspace(e,o){e.workspaces.push(o),console.log(e.workspaces)},currentWorkspace(e,o){e.currentWorkspace=o},spinnerAdd(e,o){e.spinner.push(o)},spinnerRemove(e,o){e.spinner=e.spinner.filter((e=>e.id!=o.id))},resetSpinner(e){e.spinner=[]},setBrain(e,o){console.log(o),e.brain=o},setBrains(e,o){e.brains=o,e.showBrainLoader=!0}},H={};var Z={namespaced:!0,state:z,actions:H,mutations:M};const G=()=>({session:null,pod:null}),Y={setSession(e,o){console.log("session",o),e.session=o},setPod(e,o){console.log("pod",o),e.pod=o}},q={};var Q={namespaced:!0,state:G,actions:q,mutations:Y},X=(0,J.MT)({state:{workspaces:[]},getters:{},mutations:{},actions:{},modules:{core:Z,solid:Q}}),K=t(2026),ee=t(2841),oe=t(7541),te=t(4786),ne=t(8439),se={install(e,o){console.log(e,o);let t=o.store;console.log(t),e.config.globalProperties.$createWorkspace=async o=>{if(console.log(o),null==t.state.solid.pod)alert("Please Login to your pod before trying to save this brain");else{let n=t.state.solid.pod.storage+"public/";console.log(n);let s=prompt("Please confirm the path where to store the workspace",n);if(console.log(s),null!=s){s=s.endsWith("/")?s:s+="/",o.path=s+o.id+"/";const t=await(0,ee.Mf)(o.path,{fetch:ne.he});console.log("container created",t);const n=await(0,oe._u)(o.path+".meta.json",new Blob([JSON.stringify("{}")],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he});console.log(`File saved at ${(0,te.LH)(n)}`);const i=await(0,oe._u)(o.path+".acl.json",new Blob([JSON.stringify("{}")],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he});console.log(`File saved at ${(0,te.LH)(i)}`);const r=await(0,oe._u)(o.path+"main.json",new Blob([JSON.stringify(o)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he});console.log(`File saved at ${(0,te.LH)(r)}`),e.config.globalProperties.$addToIndex(o)}}},e.config.globalProperties.$addToIndex=async o=>{console.log(o);try{const e=await(0,oe.hn)(t.state.solid.pod.brains,{fetch:ne.he}),n=new FileReader;n.onload=async()=>{try{let e=JSON.parse(n.result);console.log("brains index",e),e.brains.push({name:o.name,path:o.path}),t.commit("core/setBrains",e);let s=await(0,oe._u)(t.state.solid.pod.brains,new Blob([JSON.stringify(e)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he});console.log("indexUpdated",s)}catch(e){console.log(e)}},n.onerror=e=>{console.log(e)},n.readAsText(e)}catch(n){console.log(n)}finally{e.config.globalProperties.$spinnerRemove({id:"checkBrains"})}},e.config.globalProperties.$getData=async o=>{let t={};switch(o.type){case"solid":t=await e.config.globalProperties.$getDataForSolid(o);break;case"gdrive":t=await e.config.globalProperties.$getDataForGdrive(o);break;case"ipfs":t=await e.config.globalProperties.$getDataForIpfs(o);break;default:break}return{w:o,data:t}},e.config.globalProperties.$getDataForSolid=async e=>({comment:"data from Solid",w:e}),e.config.globalProperties.$getDataForGdrive=async e=>({comment:"data from GDrive",w:e}),e.config.globalProperties.$getDataForIpfs=async e=>({comment:"data from IPFS",w:e})}};const ie={install(e,o={}){let t=o.store;e.config.globalProperties.$spinnerAdd=function(e){t.commit("core/spinnerAdd",e)},e.config.globalProperties.$spinnerRemove=function(e){t.commit("core/spinnerRemove",e)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ie);var re=ie,ae=t(4651),le=t(5902),ce=t(96),de=t(9740);const ue="solid_session_restore_url",pe={install(e,o={}){let t=o.store;e.config.globalProperties.$checkSolidSession=async function(){localStorage.setItem(ue,window.location.toString()),ne.vl((e=>{history.replaceState(null,"",e)})),await ne.zr({restorePreviousSession:!0}).then((e=>{if(1==e.isLoggedIn){console.log(`Logged in with WebID [${e.webId}]`),t.commit("solid/setSession",e);let o=ne.Cb();this.$getPodInfosFromSession(o),localStorage.setItem(ue,"")}}))},e.config.globalProperties.$login=async function(e){console.log("login",e),ne.Cb().info.isLoggedIn||await ne.x4({oidcIssuer:e,redirectUrl:window.location.href,clientName:"Brain"})},e.config.globalProperties.$logout=async function(){let e=ne.Cb();await e.logout(),t.commit("solid/setSession",null),t.commit("solid/setPod",null)},e.config.globalProperties.$getPodInfosFromSession=async function(o){let n={};n.logged=o.info.isLoggedIn,n.logged?(n.webId=o.info.webId,n=await this.$getPodInfos(n),void 0==n.neuroneStore&&(n.neuroneStore=n.storage+"public/neurones/"),void 0==n.workspaces&&(n.workspaces=[]),t.commit("solid/setPod",n),null!=n.storage&&(n.brains=n.storage+"workspaces.json",e.config.globalProperties.$checkBrains())):t.commit("solid/setPod",null)},e.config.globalProperties.$getPodInfos=async function(e){try{const o=await(0,ee.OE)(e.webId,{fetch:ne.he});let t=await(0,ae.YY)(o,e.webId);e.name=await(0,le.oX)(t,ce.xY.name),e.friends=await(0,le.MQ)(t,ce.xY.knows).map((e=>({webId:e}))),e.storage=await(0,le.Gr)(t,de.WS.storage),null==e.storage&&(e.storage=e.webId.split("/").slice(0,-2).join("/")+"/"),e.photo=await(0,le.Gr)(t,ce.Fv.hasPhoto),void 0==e.neuroneStore&&(e.neuroneStore=e.storage+"public/neurones/"),e.workspaces=[];let n=e.storage+"settings/publicTypeIndex.ttl";const s=await(0,ee.OE)(n,{fetch:ne.he});let i=await(0,ae.oY)(s);for await(const r of i){let o=await(0,le.MQ)(r,"http://www.w3.org/ns/solid/terms#forClass");if(o.includes("https://scenaristeur.github.io/verse#Workspace")){console.log(r);let o={};o.name=await(0,le.oX)(r,ce.AS.name),o.url=await(0,le.Gr)(r,de.UG.instance),e.workspaces.push(o)}}}catch(o){console.log("erreur",o,e)}return console.log(e),await e}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(pe);var ge=pe;const fe={install(e,o={}){let t=o.store;async function n(o){const n=o.map((async function(o){if(o.endsWith("/"))return void e.config.globalProperties.$loadBrainFromSolid(o);e.config.globalProperties.$spinnerAdd({id:"loading "+o});const n=await(0,oe.hn)(o,{fetch:ne.he});return new Promise((function(s,i){const r=new FileReader;r.onload=async()=>{try{let n=JSON.parse(r.result);await t.dispatch("core/saveNode",n),e.config.globalProperties.$spinnerRemove({id:"loading "+o}),s(n)}catch(n){i(n)}},r.onerror=e=>{i(e)},r.readAsText(n)}))}));await Promise.all(n),t.dispatch("core/getNodes")}function s(e){var o=e.lastIndexOf("/"),t=e.substring(o+1);return 0==t.length?s(e.slice(0,-1)):t}e.config.globalProperties.$saveBrainToSolid=async function(){if(console.log(t.state.core.nodes),null==t.state.solid.pod)alert("Please Login to your pod before trying to save this brain");else{let o=t.state.solid.pod.storage+"brains/";console.log(o);let n=prompt("Please confirm the path where to store the nodes",o);if(console.log(n),null!=n){n=n.endsWith("/")?n:n+="/",t.state.core.nodes.forEach((o=>{e.config.globalProperties.$spinnerAdd({id:"saving "+o.id})}));for await(const r of t.state.core.nodes){console.log(r.id,r),r["@context"]["@base"]=n;const o=await(0,oe._u)(n+s(r.id),new Blob([JSON.stringify(r)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he});console.log(`File saved at ${(0,te.LH)(o)}`),e.config.globalProperties.$spinnerRemove({id:"saving "+r.id})}e.config.globalProperties.$spinnerAdd({id:"saving "+t.state.solid.pod.brains});const o=await(0,oe.hn)(t.state.solid.pod.brains,{fetch:ne.he}),i=new FileReader;i.onload=async()=>{try{let r=JSON.parse(i.result),a=Date.now(),l={id:n,name:s(n),updated:a,checksum:1e3*Math.random()};var o=r.brains.findIndex((e=>e.id==l.id));-1===o?(l.created=a,r.brains.push(l)):Object.assign(r.brains[o],l),await(0,oe._u)(t.state.solid.pod.brains,new Blob([JSON.stringify(r)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he}),e.config.globalProperties.$checkBrains(),e.config.globalProperties.$spinnerRemove({id:"saving "+t.state.solid.pod.brains})}catch(r){console.log(r)}},i.onerror=e=>{console.log(e)},i.readAsText(o)}else alert("saving to Solid Pod aborted")}},e.config.globalProperties.$loadBrainsFromWikidata=async function(e){console.log(e),e.forEach((async function(e){console.log(e);let o={id:e.url,name:e.item.aliases&&e.item.aliases[0]||e.item.label||e.text,color:"lightblue",url:e.url,source:"https://wikidata.org"};await t.dispatch("core/saveNode",o)})),await t.dispatch("core/getNodes")},e.config.globalProperties.$brainsFromPod=async function(o){let t=o.storage+"public/brains/";e.config.globalProperties.$spinnerAdd({id:"loading "+t});let n=null;try{n=await(0,ee.OE)(t,{fetch:ne.he});let e=await(0,ee.kQ)(n,{fetch:ne.he});return console.log(e),e}catch(s){console.log(s)}e.config.globalProperties.$spinnerRemove({id:"loading "+t})},e.config.globalProperties.$loadBrainFromSolid=async function(o){if(void 0==o){let e=null!=t.state.solid.pod?t.state.solid.pod.storage+"brains/":"https://solid.provider/brains_folder or example...";console.log(e),o=prompt("Load brain from ",e)}if(null!=o){console.log("load brain from",o),e.config.globalProperties.$spinnerAdd({id:"loading "+o});let t=null;try{t=await(0,ee.OE)(o,{fetch:ne.he});let e=await(0,ee.kQ)(t,{fetch:ne.he});console.log(e),await n(e)}catch(s){alert(s)}e.config.globalProperties.$spinnerRemove({id:"loading "+o})}},e.config.globalProperties.$checkBrains=async function(){e.config.globalProperties.$spinnerAdd({id:"checkBrains"});try{const e=await(0,oe.hn)(t.state.solid.pod.brains,{fetch:ne.he});console.log(e)}catch(o){let e={"@context":{name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows","@base":"http://local/","@vocab":"https://scenaristeur.github.io/agent/",id:"@id",type:"@type",reverse:"@reverse",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},id:(0,B.Z)(),name:"Brain Index",type:"brainIndex",brains:[],homepage:"https://scenaristeur.github.io/agent"};await(0,oe._u)(t.state.solid.pod.brains,new Blob([JSON.stringify(e)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:ne.he})}try{const e=await(0,oe.hn)(t.state.solid.pod.brains,{fetch:ne.he}),o=new FileReader;o.onload=async()=>{try{let e=JSON.parse(o.result);t.commit("core/setBrains",e)}catch(e){console.log(e)}},o.onerror=e=>{console.log(e)},o.readAsText(e)}catch(o){console.log(o)}finally{e.config.globalProperties.$spinnerRemove({id:"checkBrains"})}},e.config.globalProperties.$loadNeurone=async function(o){e.config.globalProperties.$spinnerAdd({id:"loading "+o});const t=await(0,oe.hn)(o,{fetch:ne.he});return new Promise((function(n,s){const i=new FileReader;i.onload=async()=>{try{let t=JSON.parse(i.result);e.config.globalProperties.$spinnerRemove({id:"loading "+o}),n(t)}catch(t){s(t)}},i.onerror=e=>{s(e)},i.readAsText(t)}))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(fe);var he=fe;(0,n.ri)($).use(X).use(V).use(K.ZP).use(re,{store:X}).use(ge,{store:X}).use(he,{store:X}).use(se,{store:X}).mount("#app")}},o={};function t(n){var s=o[n];if(void 0!==s)return s.exports;var i=o[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,n,s,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],i=e[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(d--,1);var c=s();void 0!==c&&(o=c)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/about.c6bdf67c.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="brain:";t.l=function(n,s,i,r){if(e[n])e[n].push(s);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==o+i){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",o+i),a.src=n),e[n]=[s];var p=function(o,t){a.onerror=a.onload=null,clearTimeout(g);var s=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((function(e){return e(t)})),o)return o(t)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/brain/"}(),function(){var e={143:0};t.f.j=function(o,n){var s=t.o(e,o)?e[o]:void 0;if(0!==s)if(s)n.push(s[2]);else{var i=new Promise((function(t,n){s=e[o]=[t,n]}));n.push(s[2]=i);var r=t.p+t.u(o),a=new Error,l=function(n){if(t.o(e,o)&&(s=e[o],0!==s&&(e[o]=void 0),s)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+o+" failed.\n("+i+": "+r+")",a.name="ChunkLoadError",a.type=i,a.request=r,s[1](a)}};t.l(r,l,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var s,i,r=n[0],a=n[1],l=n[2],c=0;if(r.some((function(o){return 0!==e[o]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(l)var d=l(t)}for(o&&o(n);c<r.length;c++)i=r[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},n=self["webpackChunkbrain"]=self["webpackChunkbrain"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(4632)}));n=t.O(n)})();
//# sourceMappingURL=app.5eff038b.js.map