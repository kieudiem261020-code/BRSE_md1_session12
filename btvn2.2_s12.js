let meters = parseFloat(prompt("Nhập số mét:"));
if (isNaN(meters)) {
    let feet = meters * 3.28084;
    alert(meters + " mét = " + feet + " feet");
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}