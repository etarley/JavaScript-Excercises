const reverseString = function (string) {
  let str = string;
  let i = str.length;
  let reverse = "";
  while (i > 0) {
    reverse += str.substr(i - 1, 1);
    i--;
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
