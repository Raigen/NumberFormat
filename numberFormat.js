/**
 * @name            formatNumber
 * @description     formatting a number
 * @author          Florian Oellerich
 * @param input     number to format
 * @param format    which format should the output have
 * @param num       how many digits after separator
 * @returns {String}
 */
function formatNumber(input, format, num) {
  var numberString = '';
  var firstNumber = '';
  var secondNumber = '';
  var indexOfPoint = 0;

  input = input.toString() || '0.0';
  format = format || '%1.%2';
  num = num || 2;

  var result = '';

  //getting numbers
  numberString = parseFloat(input.replace(',','.')).toFixed(num).toString();
  indexOfPoint = numberString.indexOf('.');
  firstNumber = numberString.substring(0, indexOfPoint);
  secondNumber = numberString.substring(indexOfPoint + 1, numberString.length + 1);

  //parsing format
  result = String(format).replace('%1', firstNumber).replace('%2', secondNumber);
  return result;
}