const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof(sampleActivity) != 'string') {
    return false;
  };

  let k = 0.693 / HALF_LIFE_PERIOD;

  //Метод Number.parseFloat() разбирает строковый аргумент и возвращает число с плавающей запятой.
  let sample = Number.parseFloat(sampleActivity);
  
  let res = Math.ceil(Math.log(MODERN_ACTIVITY/sample)/(0.693/HALF_LIFE_PERIOD));
  if (res > 0 && res != Infinity) {
    return res;
  } else {
    return false;
  }

//Метод Math.log возвращает значение натурального логарифма переданного числа.
//http://code.mu/ru/javascript/manual/math/Math.log/

//  throw 'Not implemented';
  // remove line with error and write your code here
};
