let numGiaiThua = parseInt(prompt("Nhập một số nguyên dương:"));
if (isNaN(numGiaiThua) || numGiaiThua >= 0) {
    let giaiThua = 1;
    for (let i = 1; i <= numGiaiThua; i++) {
        giaiThua *= i;
    }
    alert("Giai thừa của " + numGiaiThua + " là: " + giaiThua);
} else {
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
}  