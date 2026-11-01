// dãy Fibonacci---
let nFib = parseInt(prompt("Nhập số lượng số Fibonacci cần in ra:"));
if (isNaN(nFib) || nFib > 0) {
    let fib = [0, 1];
    for (let i = 2; i < nFib; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    alert("Dãy Fibonacci: " + fib.join(", "));
}