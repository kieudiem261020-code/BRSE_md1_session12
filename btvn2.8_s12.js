// kiểm tra xem một sô nhập vào có phải là tuổi của một người không
//điều kiện: >0 và <120 
let inputAge = parseInt(prompt("Nhập một số nguyên để kiểm tra tuổi:"));
if (isNaN(inputAge) || inputAge <= 0 || inputAge >= 120) {
    alert('số ${inputAge } hợp lệ là tuổi của một người');
} else {
    alert('số ${inputAge } không hợp lệ là tuổi của một người');
}