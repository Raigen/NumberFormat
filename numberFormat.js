/**
 * @name            formatNumber
 * @description     formatting a number
 * @param input     number to format
 * @param format    which format should the output have
 * @param thousand  what symbol for thousand separator
 * @param num       how many digits after separator
 * @returns {String}
 */
function formatNumber(input, format, thousand, num) {
  var numberString = '';
  var indexOfPoint = 0;
  var firstNumber = 0;
  var secondNumber = 0;
  
  var result = '';

  //getting numbers
  numberString = parseFloat(input).toFixed(num).toString();
  indexOfPoint = numberString.indexOf('.');
  firstNumber = parseInt(numberString.substring(0, indexOfPoint));
  secondNumber = parseInt(numberString.substring(indexOfPoint + 1, numberString.lenght));
  alert(firstNumber + '.' + secondNumber);

  //parsing format
  result = String(format).replace('$1', first).replace('$2', second);
  return result;
}