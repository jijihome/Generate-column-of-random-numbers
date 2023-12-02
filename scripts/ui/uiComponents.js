const promptElements = require("./promptElements");
const textInputElements = require("./textInputElements");
const buttonElements = require("./buttonElements");

function createUIComponents() {
  const title = promptElements.createPromptTitle();
  const promptText = promptElements.createPromptText();
  const input = textInputElements.createTextInput();
  const output = textInputElements.createTextOutput();
  const pasteButton = buttonElements.createPasteButton();
  const copyButton = buttonElements.createCopyButton();

  // 新增清空按钮和计算按钮
  const clearButton = buttonElements.createClearButton();
  const calculateButton = buttonElements.createCalculateButton();

  return {
    title,
    promptText,
    input,
    output,
    pasteButton,
    copyButton,
    clearButton, // 清空按钮
    calculateButton // 计算按钮
  };
}

module.exports = {
  createUIComponents
};