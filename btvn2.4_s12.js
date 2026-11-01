let width = parseFloat(prompt("Nhập chiều rộng của hình chữ nhật:"));
let height = parseFloat(prompt("Nhập chiều cao của hình chữ nhật:"));

if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    alert("Vui lòng nhập các số hợp lệ và lớn hơn 0!");
} else {
    let area = width * height;
    alert(`Diện tích hình chữ nhật là: ${area}`);
}  