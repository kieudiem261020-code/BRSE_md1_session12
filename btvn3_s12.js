let numbers = 20; 
let count = 0;
let N = 2;
let result = "";
// sử dụng vòng lặp while để tìm đủ số
while (count < numbers) {
    let isPrime = true;
    // sử dụng vòng lặp for kết hợp điều kiện if để kiểm tra số nguyên tố
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
    // nếu là số nguyên tố thì thêm vào kết quả và tăng biến đếm
    if (isPrime) {
        result += N + " ";
        count++;
    }
    N++;
}
alert("20 số nguyên tố đầu tiên là: " + result);   