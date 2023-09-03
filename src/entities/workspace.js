import { v4 as uuidv4 } from "uuid";

export default class Workspace {
  constructor(opts = {}) {
    this.id = opts.id || uuidv4();
    this.name = opts.name || "new work space " + Date.now();
    this.type = opts.type || "memory";
    this.urls = opts.urls || [];
    this.subspaces = opts.subspaces || [];
    this.bases = opts.bases || [];
  }
  test() {
    console.log("hello world");
  }
}
