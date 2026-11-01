let aEq1 = parseFloat(prompt("Nhập hệ số a của phương trình bậc nhất (ax + b = 0):"));
let bEq1 = parseFloat(prompt("Nhập hệ số b của phương trình bậc nhất (ax + b = 0):"));
if (aEq1 === 0) {
    if (bEq1 === 0) {
        alert("Phương trình có vô số nghiệm.");
    } else {
        alert("Phương trình vô nghiệm.");
    }
} else {
    let x = -bEq1 / aEq1;
    alert(`Nghiệm của phương trình là: x = ${x}`);
}