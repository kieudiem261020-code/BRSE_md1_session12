//giải phương trình bậc 2
let aEq2 = parseFloat(prompt("Nhập hệ số a của phương trình bậc hai (ax^2 + bx + c = 0):"));
let bEq2 = parseFloat(prompt("Nhập hệ số b của phương trình bậc hai (ax^2 + bx + c = 0):"));
let cEq2 = parseFloat(prompt("Nhập hệ số c của phương trình bậc hai (ax^2 + bx + c = 0):"));

if (aEq2 === 0) {
    if (bEq2 === 0) {
        if (cEq2 === 0) {
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    } else {
        let x = -cEq2 / bEq2;
        alert(`Nghiệm của phương trình là: x = ${x}`);
    }
} else {
    let delta = bEq2 * bEq2 - 4 * aEq2 * cEq2;
    if (delta < 0) {
        alert("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        let x = -bEq2 / (2 * aEq2);
        alert(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        let x1 = (-bEq2 + Math.sqrt(delta)) / (2 * aEq2);
        let x2 = (-bEq2 - Math.sqrt(delta)) / (2 * aEq2);
        alert(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }
}   