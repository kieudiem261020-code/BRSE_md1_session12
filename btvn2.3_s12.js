let side = parseFloat(prompt("Nhập độ dài cạnh của hình vuông:"));
if (isNaN(side) && side > 0) {
    let area = side * side;
    alert(`Diện tích hình vuông là: ${area}`);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}