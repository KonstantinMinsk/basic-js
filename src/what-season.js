module.exports = function getSeason(date) {

  if (typeof(date) == 'undefined') {
		return 'Unable to determine the time of year!'
	}

	if (isNaN(date)) throw new Error();
 // Значение, возвращённое методом getMonth(), является целым числом от 0 до 11. 0 соответствует январю, 1 — февралю и так далее.
  let month = date.getMonth();

  if (month < 2 || month == 11) {
  	return 'winter';
  }

  if (month >= 2 && month < 5) {
  	return 'spring';
  }

  if (month >= 5 && month < 8) {
  	return 'summer';
  }

  if (month >= 8 && month < 11) {
  	return 'autumn';
  }

  throw 'Not implemented';
  // remove line with error and write your code here
};
