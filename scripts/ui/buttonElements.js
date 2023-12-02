const eventHandlers = require("./eventHandlers");

function createButton(title, id, centerXMultiplier) {
  return {
    type: "button",
    props: {
      id: id,
      title: title
    },
    layout: function (make, view) {
      make.top.equalTo($("prompt_text").bottom).offset(10);
      make.centerX.equalTo(view.super).multipliedBy(centerXMultiplier);
      make.width.equalTo(view.super.width).multipliedBy(0.2).offset(-10);
    }
  };
}

function createPasteButton() {
  let button = createButton("粘贴", "paste_button", 0.25);
  button.events = {
    tapped: eventHandlers.handlePaste
  };
  return button;
}

function createCopyButton() {
  let button = createButton("复制", "copy_button", 0.75);
  button.events = {
    tapped: eventHandlers.handleCopy
  };
  return button;
}

function createClearButton() {
  let button = createButton("清空", "clear_button", 1.25);
  button.events = {
    tapped: eventHandlers.handleClear
  };
  return button;
}

function createCalculateButton() {
  let button = createButton("计算", "calculate_button", 1.75);
  button.events = {
    tapped: eventHandlers.handleCalculate
  };
  return button;
}

module.exports = {
  createPasteButton,
  createCopyButton,
  createClearButton,
  createCalculateButton
};