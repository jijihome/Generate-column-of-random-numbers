function createPromptTitle() {
  return {
    type: "label",
    props: {
      id: "prompt_title",
      text: "提示",
      font: $font("bold", 18)
    },
    layout: function (make, view) {
      make.top.equalTo(10);
      make.centerX.equalTo(view.super);
    }
  };
}

function createPromptText() {
  return {
    type: "label",
    props: {
      id: "prompt_text",
      text: "将从Excel复制的列数据粘贴到此",
      font: $font(16)
    },
    layout: function (make, view) {
      make.top.equalTo($("prompt_title").bottom).offset(5);
      make.centerX.equalTo(view.super);
    }
  };
}

module.exports = {
  createPromptTitle,
  createPromptText
};