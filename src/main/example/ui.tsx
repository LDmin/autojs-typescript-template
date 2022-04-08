$ui.layout(
  <frame>
    <text id="example" text="Hello" />
  </frame>
);

// 5秒后执行
$ui.post(() => {
  const $example: AutoJs.View = ($ui as any).example;
  console.log($example);
  // 修改文本
  $example.attr("text", "Hello, Auto.js UI");
  // 修改背景
  $example.attr("bg", "#ff00ff");
  // 修改高度
  $example.attr("h", "500dp");
}, 5000);
