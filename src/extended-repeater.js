module.exports = function repeater(str, options) {
 /*
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  separator = separator || '+';
  additionSeparator = additionSeparator || '|';
  repeatTimes = repeatTimes || 1;
  addition = addition || "";
  additionRepeatTimes = additionRepeatTimes || 1;
  */

  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = "";  // дополнение к каждой строке
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;  // цифра повторов
  }
  

  const Arr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    Arr.push(String(options.addition));
  }
  const addition = Arr.join(`${options.additionSeparator}`);  // new Array к каждому элементу Arr + разделитель 

  const resultArr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    resultArr.push(`${String(str)}${addition}`);
  }

  return resultArr.join(options.separator);

    throw 'Not implemented';
    // remove line with error and write your code here
};
  