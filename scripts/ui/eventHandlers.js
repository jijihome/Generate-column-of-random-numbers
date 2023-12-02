const randomGenerator = require("../randomGenerator");

function handlePaste() {
  const inputText = $clipboard.text;
  $("text_input").text = inputText;

  // 显示粘贴完成的提示
  $ui.toast("粘贴完成");
  
  handleCalculate();
}

function handleTextInputChange(sender) {
  handleCalculate();
}

function handleCopy() {
  $clipboard.text = $("text_output").text;
  $ui.toast("已复制结果到剪贴板");
}

function handleClear() {
  $("text_input").text = "";
  $("text_output").text = "";
}

function handleCalculate() {
  const inputText = $("text_input").text;
  const outputText = randomGenerator.generateRandom(inputText);
  $("text_output").text = outputText;

  const inputSum = randomGenerator.sumOfNumbersInText($("text_input").text);
  const outputSum = randomGenerator.sumOfNumbersInText($("text_output").text);

  $("prompt_text").text = `余额: ${inputSum}       金额: ${outputSum}`;

  $ui.toast("计算完成");
}

module.exports = {
  handlePaste,
  handleTextInputChange,
  handleCopy,
  handleClear, // 新增清空按钮的事件处理
  handleCalculate // 新增计算按钮的事件处理
};
