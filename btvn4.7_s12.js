let fizzBuzzResult = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzResult += "FizzBuzz, ";
    } else if (i % 3 === 0) {
        fizzBuzzResult += "Fizz, ";
    } else if (i % 5 === 0) {
        fizzBuzzResult += "Buzz, ";
    } else {
        fizzBuzzResult += i + ", ";
    }
}
console.log("kết qủa FizzBuzz:\n" + fizzBuzzResult);
alert("Kết quả FizzBuzz đã được in ra console. Vui lòng kiểm tra console để xem kết quả."); 