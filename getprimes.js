function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrimes(n) {
    let result = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(getPrimes(5));
console.log(getPrimes(10));
console.log(getPrimes(10000));
