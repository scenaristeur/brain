import {
  getSolidDataset,
  getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  //getSolidDatasetWithAcl,
  //getPublicAccess,
  //getAgentAccess,
  // getFile,
  // isRawData,
  // getContentType,
  //saveFileInContainer,
  // getContainedResourceUrlAll,
  // getStringNoLocaleAll,
  // createContainerAt,
  // getSourceUrl,
  // deleteFile,
  //removeThing,
  // removeAll,
  //removeStringNoLocale,
  //deleteContainer,
  //addStringNoLocale,
  //setThing,
  //saveSolidDatasetAt,
  //createSolidDataset,
  //createThing,
  //addUrl,
  //buildThing,
  //overwriteFile,
  getStringNoLocale,
  getThing,
  getUrlAll,
  getUrl,
  //addDatetime,
  //  getDatetime,
  //setUrl,
  //setStringNoLocale,
  //setDecimal,
  //setInteger,
  //  getDecimal,
  //getInteger,
  // setDatetime
} from "@inrupt/solid-client";
import { FOAF, /*LDP,*/ VCARD, /*RDF,*/ AS, /*RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
import { WS, SOLID } from "@inrupt/vocab-solid-common";

import * as sc from '@inrupt/solid-client-authn-browser'
const LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL = "solid_session_restore_url"
// import { fetch as node_fetch } from 'node-fetch';

const plugin = {
  install(app, opts = {}) {
    let store = opts.store

    app.config.globalProperties.$checkSolidSession = async function(){
      localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, window.location.toString())
      // console.log("check session", document.location)
      // localStorage.setItem(Date.now, document.location)

      sc.onSessionRestore((url) => {
        history.replaceState(null, "", url)
      });


      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then((info) => {
        if(info.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${info.webId}]`)
          store.commit('solid/setSession',info)
          let session = sc.getDefaultSession()
          this.$getPodInfosFromSession(session)
          // This line is not reached until you are successfully logged in
          localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, "")
        }
      })

    },

    app.config.globalProperties.$login = async function(issuer){
      console.log("login", issuer)
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "Brain"
        });
      }
    },

    app.config.globalProperties.$logout = async function(){
      let session = sc.getDefaultSession()
      await session.logout()
      store.commit('solid/setSession',null)
      store.commit('solid/setPod', null)
      //store.dispatch('nodes/clearStore')
    },
    app.config.globalProperties.$getPodInfosFromSession = async function(session){
      // try{
      let pod = {}
      pod.logged = session.info.isLoggedIn
      if (pod.logged) {
        pod.webId = session.info.webId
        pod = await this.$getPodInfos(pod)
        pod.neuroneStore == undefined ? pod.neuroneStore = pod.storage+'public/neurones/' : ""
        pod.workspaces == undefined ? pod.workspaces = [] : ""

        store.commit('solid/setPod', pod)
        //  this.$checkChanges()
        //this.$synchronize()
        //  await this.$getVerses(pod)

        if (pod.storage != null){
          pod.brains = pod.storage+'workspaces.json'
          app.config.globalProperties.$checkBrains()
          //  this.$setCurrentThingUrl(pod.storage)
          //  store.commit('booklice/setPath', pod.storage+'public/bookmarks/')
          //let publicTagFile = pod.storage+'public/tags.ttl'
          //let privateTagFile = podStorage+'private/tags.ttl'
          // let tags = await this.$getTags(publicTagFile)
          // console.log("############################tags",tags)
        }
      }else{
        store.commit('solid/setPod', null)
        //  store.commit('solid/setThings', [])
      }
      // } catch(e){
      //   alert("$getPodInfosFromSession "+e)
      // }
    },
    app.config.globalProperties.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);

        if (pod.storage == null){
          // let storage = await getLink(pod.webId)
          // console.log("storage", storage)
          // for community solid server with no pim:storage
          pod.storage = pod.webId.split('/').slice(0,-2).join('/')+'/'
        }


        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        pod.neuroneStore == undefined ? pod.neuroneStore = pod.storage+'public/neurones/' : ""
        pod.workspaces = []

        let publicTypeIndexUtl = pod.storage+'settings/publicTypeIndex.ttl'
        const pti_ds = await getSolidDataset( publicTypeIndexUtl, { fetch: sc.fetch });
        let indexes = await getThingAll(pti_ds)
        for await (const i of indexes){
          let types = await getUrlAll(i, "http://www.w3.org/ns/solid/terms#forClass");
          //console.log(types)
          if(types.includes("https://scenaristeur.github.io/verse#Workspace")){
            console.log(i)
            let ws = {}
            ws.name =  await getStringNoLocale(i, AS.name)
            ws.url = await getUrl(i,SOLID.instance)
            pod.workspaces.push(ws)
          }
        }
        //console.log(ws)
        //  pod.workspaces = await getUrlAll(pti_ds, "http://www.w3.org/ns/solid/terms#forClass", "https://www.w3.org/ns/activitystreams#Collection");
        // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        // store.commit("vatch/addToNetwork", pod.publicTags)
        //this.$subscribe(pod.storage)
        //  console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      console.log(pod)
      return await pod
    }

    // async function getLink(url){
    //   console.log('url', url)
    //   const response = await fetch(url);
    //   // const r1 = response.clone();
    //   //
    //   // const results = await Promise.all([response.json(), r1.text()]);
    //   //
    //   // console.log("json headers",results[0]);
    //   return response.headers.get('link').split(',').map(function(v) {
    //     let link = v.split(';')[0]
    //     console.log(link)
    //     if (link == "<http://www.w3.org/ns/pim/space#Storage>"){
    //       return url
    //     }else{
    //       let new_url = url.split('/').slice(0,-1).join('/')
    //       console.log(new_url)
    //        return getLink(new_url)
    //       //return "stop"
    //     }
    //   });
    // }




  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
