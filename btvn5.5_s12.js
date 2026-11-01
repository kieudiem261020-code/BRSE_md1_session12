let principal = parseFloat(prompt("Nhập số tiền vay ban đầu:"));
let months = parseInt(promp("Nhập số tháng cho vay:"));
let monthlyRate = parseFloat(prompt("nhập lãi xuất hàng tháng :"))/100;

if(!isNaN(principal) && !isNaN(months) && !isNaN(monthlyRate)){
    let totalAmount = principal;
    for (let i = 0; i < months; i++){
        totalAmount += totalAmount * monthlyRate; // lãi kép 
    }
    let interestEarned = totalAmount - principal;
    alert('Sau ${months} tháng:\n - Tổng tiền gốc và lãi: ${totalAmount.toFixed(2)} vnd \n- Tổng tiền lãi: ${interestEarbed.toFixed(2)} vnd');
    } else {
        alert("dữ liệu nhập vào không hợp lệ!");
    }
    