export default {
  install(app, options) {
    // configure the app
    console.log(app, options);
    let store = options.store;
    console.log(store);
    // observeDeep(store.todos, this.y_storeChanged);
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
