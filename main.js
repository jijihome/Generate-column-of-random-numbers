const uiComponents = require("./scripts/ui/uiComponents");
const heightCalculator = require("./scripts/ui/heightCalculator"); // 引入高度计算模块

// 创建UI界面
const components = uiComponents.createUIComponents();
const {
  title,
  promptText,
  input,
  output,
  pasteButton,
  copyButton,
  clearButton,
  calculateButton
} = components;

$ui.render({
  props: {
    title: "取列随机数"
  },
  views: [
    title,
    promptText,
    pasteButton,
    copyButton,
    clearButton, // 确保清空按钮在视图中
    calculateButton, // 确保计算按钮在视图中,
    input,
    output
  ],
  events: {
    // 界面渲染完成后的回调函数
    appeared: function() {
      // 使用模块中的函数计算高度并设置高度

      //heightCalculator.setHeights();

      //console.log($("text_input").frame.height ); 
    }
  }
});