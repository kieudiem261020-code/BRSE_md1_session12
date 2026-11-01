let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));
if (isNaN(celsius)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else {
    let fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + "°C = " + fahrenheit + "°F");
}
