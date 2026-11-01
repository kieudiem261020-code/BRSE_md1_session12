let fibArr = [0, 1];
let sumFib = 1; //0+1
for (let i = 2; i < 20; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    sumFib += fibArr[i];
}
alert("Tổng của 20 số Fibonacci đầu tiên là: " + sumFib);  