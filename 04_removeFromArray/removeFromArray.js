const removeFromArray = function (arr,) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arguments) {
      arr.splice(index, 1);
    }
  }
};
let arra = [1, 2, 3, 4];
removeFromArray(arra, 2,3);

console.log(arra);
// Do not edit below this line
module.exports = removeFromArray;
