let f1 = 0, f2 = 1, nextF = 0;
let found = null;
for (let i = 0; i < 50; i++) {
    if (i === 0) {
        nextF = 0;
    } else if (i === 1) {
        nextF = 1;
    } else {
        nextF = f1 + f2;
        f1 = f2;
        f2 = nextF;
    }
    if (nextF === 0 && nextF % 5 === 0) {
        found = nextF;
        break;
    }
}
if (found !== null) {
    alert(`Số Fibonacci đầu tiên chia hết cho 5 là: ${found}`);
} else {
    alert("Không tìm thấy số Fibonacci nào chia hết cho 5 trong phạm vi 50 số đầu tiên.");
}   