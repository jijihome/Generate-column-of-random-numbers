const eventHandlers = require("./eventHandlers"); // 请确保路径正确



function createTextInput() {
  return {
    type: "text",
    props: {
      id: "text_input",
      placeholder: "在此粘贴数据"
    },
    layout: function (make) {
      // 假设按钮的ID是 "calculate_button"
      make.top.equalTo($("calculate_button").bottom).offset(10);
      make.left.equalTo(10);
      make.right.equalTo($ui.window.centerX).offset(-5);
      // 可以调整高度以适应屏幕空间
      make.bottom.equalTo(10); // 或者使用其他合适的值
    },
    events: {
      changed: eventHandlers.handleTextInputChange
    }
  };
}

function createTextOutput() {
  return {
    type: "text",
    props: {
      id: "text_output",
      editable: false
    },
    layout: function (make) {
      make.top.equalTo($("calculate_button").bottom).offset(10);
      make.left.equalTo($ui.window.centerX).offset(5);
      make.right.equalTo(-10);
      // 同样调整高度
      make.bottom.equalTo(10); // 或者使用其他合适的值
    }
  };
}

module.exports = {
  createTextInput,
  createTextOutput
};