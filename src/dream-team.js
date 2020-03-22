module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) return false; 
  // проверяем, что у нас массив

  let name = '';
  members.forEach(element => {
       if (typeof element === 'string') {
          name +=element.trim()[0].toUpperCase()
          // Метод trim() удаляет пробельные символы с начала и конца строки.
       } 
  });
  return name.split('').sort().join('');
  throw 'Not implemented';
  // remove line with error and write your code here
};