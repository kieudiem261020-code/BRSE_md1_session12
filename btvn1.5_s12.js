let kt = parseFloat(prompt("Nhập điểm kiểm tra (hệ số 1):"));
let gk = parseFloat(prompt("Nhập điểm giữa kỳ (hệ số 2):"));
let ck = parseFloat(prompt("Nhập điểm cuối kỳ (hệ số 3):"));

let dtb = (kt + gk * 2 + ck * 3) / 6;
let rank = "";
if (dtb >= 9) {
    rank = "Xuất sắc";
} else if (dtb >= 8) {
    rank = "Giỏi";
} else if (dtb >= 7) {
    rank = "Khá";
} else if (dtb >= 5) {
    rank = "Trung bình";
} else {
    rank = "Yếu";
}