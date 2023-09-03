import {
  // getSolidDataset,
  // getThingAll,
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
  //getStringNoLocaleAll,
  createContainerAt,
   getSourceUrl,
  // deleteFile,
  //removeThing,
  // removeAll,
  //removeStringNoLocale,
  //deleteContainer,
  // addStringNoLocale,
  // setThing,
  // saveSolidDatasetAt,
  //createSolidDataset,
  // createThing,
  // addUrl,
  //buildThing,

  overwriteFile,
  // getStringNoLocale,
  // getThing,
  // getUrlAll,
  // getUrl,
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
import * as sc from "@inrupt/solid-client-authn-browser";

export default {
  install(app, options) {
    // configure the app
    console.log(app, options);
    let store = options.store;
    console.log(store);
    // observeDeep(store.todos, this.y_storeChanged);
    app.config.globalProperties.$createWorkspace = async (w) => {
      console.log(w);
      if (store.state.solid.pod == null) {
        alert("Please Login to your pod before trying to save this brain");
      } else {
        let suggestedpath = store.state.solid.pod.storage + "public/";
        console.log(suggestedpath);

        let path = prompt(
          "Please confirm the path where to store the workspace",
          suggestedpath
        );
        console.log(path);
        if (path != null) {
          path = !path.endsWith("/") ? (path += "/") : path;
          w.path = path + w.id+'/'
          const container = await createContainerAt(w.path, {
            fetch: sc.fetch,
          });
          console.log("container created", container);
          const savedFileMeta = await overwriteFile(
            w.path+'.meta.json',
            new Blob([JSON.stringify('{}')], { type: "application/ld+json" }),
            { contentType: "application/ld+json", fetch: sc.fetch }
          );
          //  console.log(savedFile)

          console.log(`File saved at ${getSourceUrl(savedFileMeta)}`);
          const savedFileAcl = await overwriteFile(
            w.path+'.acl.json',
            new Blob([JSON.stringify('{}')], { type: "application/ld+json" }),
            { contentType: "application/ld+json", fetch: sc.fetch }
          );
          //  console.log(savedFile)

          console.log(`File saved at ${getSourceUrl(savedFileAcl)}`);
        
          const savedFileMain = await overwriteFile(
            w.path+'main.json',
            new Blob([JSON.stringify(w)], { type: "application/ld+json" }),
            { contentType: "application/ld+json", fetch: sc.fetch }
          );
          //  console.log(savedFile)

          console.log(`File saved at ${getSourceUrl(savedFileMain)}`);
          //   store.state.core.nodes.forEach(n => {
          //     app.config.globalProperties.$spinnerAdd({id: "saving "+n.id})
          //   });
        }
      }
    };

    app.config.globalProperties.$getData = async (w) => {
      let data = {};
      switch (w.type) {
        case "solid":
          data = await app.config.globalProperties.$getDataForSolid(w);
          break;
        case "gdrive":
          data = await app.config.globalProperties.$getDataForGdrive(w);
          break;
        case "ipfs":
          data = await app.config.globalProperties.$getDataForIpfs(w);
          break;

        default:
          break;
      }

      return { w: w, data: data };
    };

    app.config.globalProperties.$getDataForSolid = async (w) => {
      return { comment: "data from Solid", w: w };
    };

    app.config.globalProperties.$getDataForGdrive = async (w) => {
      return { comment: "data from GDrive", w: w };
    };

    app.config.globalProperties.$getDataForIpfs = async (w) => {
      return { comment: "data from IPFS", w: w };
    };
  },
};
