import Project from "../base/project";

export default class Example extends Project {
  packageName = "example";

  async start() {
    toast("这是纯净的模板...");
  }
}

// run
new Example().start();
