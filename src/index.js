module.exports = function toReadable (number) {

    const firstDigit = Number(String(number)[0]);
    const secondDigit = Number(String(number)[1]);
    const lastDigit = number % 10;

    const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const primeNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];


    if (number === 0) {
        return "zero";
    } else if (String(number).length === 1) {
        return primeNumbers[number - 1];
    } else if (String(number).length === 2) {
        if (firstDigit === 1) {
            return teens[number - 10];
        } else if (secondDigit === 0){
            return tens[firstDigit - 2];
        } else {
            return `${tens[firstDigit - 2]} ${primeNumbers[lastDigit - 1]}`;
        }
    } else if (String(number).length === 3) {
        if (secondDigit === 0 && lastDigit === 0) {
            return primeNumbers[firstDigit - 1] + " hundred";
        } else if (secondDigit === 0 && lastDigit !== 0) {
            return primeNumbers[firstDigit - 1] + " hundred " + primeNumbers[lastDigit - 1];
        } else if (secondDigit === 1) {
            return primeNumbers[firstDigit - 1] + " hundred " + teens[lastDigit];
        } else if (secondDigit !== 0 && secondDigit !== 1 && lastDigit === 0) {
            return primeNumbers[firstDigit - 1] + " hundred " + tens[secondDigit - 2];
        } else if (secondDigit !== 0 && secondDigit !== 1 && lastDigit !== 0) {
            return primeNumbers[firstDigit - 1] + " hundred " + tens[secondDigit - 2] + " " + primeNumbers[lastDigit - 1];
    }
}
};