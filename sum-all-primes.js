function sumPrimes(num) {
  function isPrimeNumber(quocient) {
    let divisor = quocient - 1;
    while (divisor > 1) {
      if (quocient % divisor === 0) {
        return false;
      }
      divisor--;
    }
    return quocient > 1;
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
