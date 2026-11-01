let temp = parseFloat(prompt("Nhập nhiệt độ (°C):"));
while (temp> 100 || temp < 20 ){
    if (temp > 100) {
        temp = parseFloat(prompt("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ:"));
    } else if (temp < 20) {
        temp = parseFloat(prompt("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ:"));
    }  
}
alert("Nhiệt độ hiện tại đã ổn định!");