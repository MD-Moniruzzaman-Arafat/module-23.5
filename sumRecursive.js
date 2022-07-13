function sumRecursive(n) {
    console.log(n);
    if (n == 1) {
        return 1;
    }
    return n + sumRecursive(--n)
}
var result = sumRecursive(5);
console.log(result);