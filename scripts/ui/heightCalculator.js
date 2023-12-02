/**
 * @module heightCalculator
 * @description 模块用于计算和设置 UI 组件的高度。
 */

/**
 * 计算标签和按钮的总高度。
 *
 * @function
 * @returns {number} 标签和按钮的总高度。
 */
function calculateLabelAndButtonHeight() {
  // 获取标签、提示文本和粘贴按钮的引用
  const title = $("prompt_title");
  const promptText = $("prompt_text");
  const pasteButton = $("paste_button");

  // 获取每个元素的高度
  const titleHeight = title.frame.height;
  const promptTextHeight = promptText.frame.height;
  const pasteButtonHeight = pasteButton.frame.height;

  // 返回总高度
  return titleHeight + promptTextHeight + pasteButtonHeight;
}

/**
 * 设置输入框和输出框的高度。
 *
 * @function
 */
function setHeights() {
  // 调用 calculateLabelAndButtonHeight 函数计算标签和按钮的总高度
  const labelAndButtonHeight = calculateLabelAndButtonHeight();

  // 设置输入框的高度为屏幕高度减去标签和按钮的高度再减去一些间距
  $("text_input").height = $device.info.screen.height - labelAndButtonHeight - 200;

  // 设置输出框的高度与输入框相同
  $("text_output").height = $("text_input").height;
}

// 导出模块中的函数
module.exports = {
  calculateLabelAndButtonHeight,
  setHeights
};