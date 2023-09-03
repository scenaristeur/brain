import { v4 as uuidv4 } from "uuid";

export default class Workspace {
  constructor(opts = {}) {
    this.type = opts.type || "memory";
    this.name = opts.name || "new work space " + Date.now();
    this.id = opts.id || uuidv4();
    this.url = opts.url || "";
  }
  test() {
    console.log("hello world");
  }
}
