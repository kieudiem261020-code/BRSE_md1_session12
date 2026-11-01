let x = parseInt(prompt("Nhập một số nguyên thứ nhất:"));
let y = parseInt(prompt("Nhập một số nguyên thứ hai:"));
let z = parseInt(prompt("Nhập một số nguyên thứ ba:"));
let max = x;
if (y > max) {
    max = y;
}
if (z > max) {
    max = z;
}
alert("Số lớn nhất là: " + max);    
