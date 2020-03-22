module.exports = function countCats(matrix) {

  let sum = 0
  matrix.flat(Infinity).forEach(function(item) {
    if (item == "^^") {
      sum +=1;
    }  
  });
  return sum;

  throw 'Not implemented';
  // remove line with error and write your code here
};
