import { v4 as uuidv4 } from "uuid";

export default class Workspace {
  constructor() {
    this.type = "memory";
    this.name = "new work space " + Date.now();
    this.id = uuidv4();
    this.url = "";
  }
  test() {
    console.log("hello world");
  }
}
