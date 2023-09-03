import { v4 as uuidv4 } from "uuid";

export default class Workspace {
  constructor(opts = {}) {
    this.id = opts.id || uuidv4();
    this.name = opts.name || Date.now();
    this.type = opts.type || "solid";
    this.urls = opts.urls || [];
    this.subspaces = opts.subspaces || [];
    this.bases = opts.bases || [];
    this['@context']= {
      "name": "http://xmlns.com/foaf/0.1/name",
      "knows": "http://xmlns.com/foaf/0.1/knows",
      "@base": "http://local/",
      "@vocab": "https://scenaristeur.github.io/agent/",
      "id": "@id",
      "type": "@type",
      "reverse": "@reverse",
      "homepage": {
        "@id": "http://xmlns.com/foaf/0.1/homepage",
        "@type": "@id"
      }
    },
    this.homepage = "https://scenaristeur.github.io/brain"
  }
  test() {
    console.log("hello world");
  }
}
