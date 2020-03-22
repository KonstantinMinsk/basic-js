module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // Math.pow(7, 2); // 49
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = turns / (turnsSpeed / (60 * 60));
  return { turns: turns, seconds: seconds };
    
}