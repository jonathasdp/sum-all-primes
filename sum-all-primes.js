function sumPrimes(num) {
  function isPrimeNumber(dividend) {
    let divisor = dividend - 1;
    while (divisor > 1) {
      if (dividend % divisor === 0) {
        return false;
      }
      divisor--;
    }
    return dividend > 1;
  }
  let result = 0;
  while (num > 1) {
    if (isPrimeNumber(num)) {
      result += num;
    }
    num--;
  }
  return result;
}
