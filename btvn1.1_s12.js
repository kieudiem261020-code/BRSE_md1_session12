let a1 = parseInt(prompt("Nhập số a1:"));
let a2 = parseInt(prompt("Nhập số a2:"));
if (a2 === 0) {
    alert("Không thể chia cho 0");
} else {
    if (a1 % a2 === 0) {
        alert(a1 + " chia hết cho " + a2);
    } else {
        alert(a1 + " không chia hết cho " + a2);
    }
}
