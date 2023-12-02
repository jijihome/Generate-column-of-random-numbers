const NO_VALUE_TEXT = ""; // 用于表示没有有效值时的文本

function removeThousandSeparator(text) {
  // 去除千分号，例如将 "1,000" 转换为 "1000"
  return text.replace(/,/g, "");
}

function getRandomInRange(min, max, originalValue) {
  let adjustedMin = Math.max(min, Math.ceil(originalValue / 2));
  let adjustedMax = originalValue - 500;

  // 调整范围以适应最大值限制
  if (adjustedMax > max) {
    adjustedMin = max - 1000;
    adjustedMax = max;
  }

  if (adjustedMax < adjustedMin) {
    return NO_VALUE_TEXT;
  }

  let possibleValues = [];
  for (let i = adjustedMin; i <= adjustedMax; i++) {
    if (i % 100 !== 0) {
      // 确保值不是整百
      possibleValues.push(i);
    }
  }

  if (possibleValues.length === 0) {
    return NO_VALUE_TEXT;
  }

  let randomIndex = Math.floor(Math.random() * possibleValues.length);
  return possibleValues[randomIndex];
}




function generateRandom(inputText) {
  const lines = inputText.split("\n");
  let resultLines = [];

  for (const line of lines) {
    let trimmedLine = line.trim();
    if (trimmedLine !== "") {
      // 去除千分号
      const sanitizedLine = removeThousandSeparator(trimmedLine);
      if (!isNaN(sanitizedLine)) {
        const originalValue = parseFloat(sanitizedLine);
        const randomNum = getRandomInRange(100, 5000, originalValue);
        resultLines.push(
          randomNum !== NO_VALUE_TEXT ? randomNum.toString() : NO_VALUE_TEXT
        );
      } else {
        resultLines.push(trimmedLine); // 非数字的行保持原样
      }
    } else {
      // 保留空行
      resultLines.push("");
    }
  }

  return resultLines.join("\n");
}



function sumOfNumbersInText(text) {
  return text.split("\n")
             .map(line => parseFloat(removeThousandSeparator(line.trim())))
             .filter(num => !isNaN(num))
             .reduce((sum, num) => sum + num, 0);
}

module.exports = { generateRandom, sumOfNumbersInText };
