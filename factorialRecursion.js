function factorialRecursion(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursion(--n)
}
var result = factorialRecursion(6);
console.log(result);