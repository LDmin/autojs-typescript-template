import Project from "@base/project";
import { clickTextCenter } from "@utils/index";

export default class Mihoyo extends Project {
  packageName = "com.mihoyo.hyperion";

  async start() {
    this.signin();
  }

  async signin() {
    toast(this.packageName);
    launch(this.packageName);
    sleep(2000);
    // 关闭青少年模式弹窗
    if ($selector().text("我知道了").exists()) {
      $selector().text("我知道了").findOne().click();
    }
    // 点击签到福利
    textContains("签到福利").waitFor();
    clickTextCenter("签到福利");

    // 等待签到
    $selector()
      .textMatches(/第.+天/)
      .waitFor();
    sleep(2000);
    let drawWidget: AutoJs.UiObject;
    $selector()
      .textMatches(/第.+天/)
      .find()
      .forEach((widget) => {
        if (widget.parent().childCount() === 4) {
          drawWidget = widget;
        }
      });
    drawWidget.clickCenter();
    // 点击关闭
    $selector().id("closeImageButton").findOne().click();
  }
}

// run
new Mihoyo().start();
