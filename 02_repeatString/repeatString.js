const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num == 0) {
    return "";
  }
  let i = 1;
  let repeatedString = string;
  while (i < num) {
    repeatedString = repeatedString + string;
    i++;
  }
  return repeatedString;
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
