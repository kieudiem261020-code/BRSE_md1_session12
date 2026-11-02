let name = "";
let age = null;
let choice;
do {
    let menu = "--Menu chương trình---\n +"
    "1. Nhậo tên của người dùng\n" +
    "2. Nhập tuổi của người dùng \n" +
    "3. In tên và tuổi của người dùng\n" +
    "4. In bảng cửu chương của một số \n" +
    "5. Kiểm tra số nhập vào là số chẵn hay lẻ \n" +
    "6. Tính tổng các số từ 1 đến N\n" +
    "7. In các số trong một dãy \n" +
    "8. Kiểm tra số nguyên tố \n" +
    "9. In chuỗi đảo ngược của một chuỗi \n" +
    "10. Thoát khỏi chương trình\n\n" +
    "Nhập lựa chọn của bạn (1-10):";
    choice = parseInt(prompt(menu));
    switch (choice){
        case 1: 
        name = prompt("Nhập tên của bạn:");
            alert("Đã lưu tên thành công!");
            break;
        case 2:
            age = parseInt(prompt("Nhập tuổi của bạn:"));
                alert("Đã lưu tuổi thành công!");
                break;
        case 3:
            alert('Thông tin người dùng:\n - Tên: ${name ? name : "Chưa nhậo"}\n- Tuổi: ${age !== null && !isNaN(age) ? age : "Chưa nhập"}');
            break;
        case 4:
            let numCC = parseInt(prompt("Nhập một số để in bảng cửu chương:"));
            if (!isNaN(numCC)){
                let resultCC = 'bảng cửu chương của ${numCC}:\n';
                for (let i = 1; i<=10; i++){
                    resultCC += '${numCC} x ${i} = ${numCC * i}\n';
                }
                alert(resultCC);
            } else {
                alert("Số nhập vào không hợp lệ!");
            }
            break;
        case 5: let numCheck = parseInt(prompt("Nhập một số để kiểm tra chẵn/ lẻ:"));
        if (!isNaN (numCheck)) {
            if (numCheck % 2 === 0) {
                alert('${numCheck} là số chẵn.');
            } else {
                alert('$numCheck} là số lẻ.');
            }
        }else {
            alert("Số nhập vào không hợp lệ!");
        }
        break;
        case 6:
            let N = parseInt(prompt("Nhập số N:"));
            if (isNaN (N) && N> 0) {
                let sum = 0;
                for (let i = 1; i<= N; i++) {
                    sum +=1;
                }
                alert('Tổng các số rừ 1 đếb ${n} là: ${sum}');

            }else {
                alert("Gía trị N không hợp lệ!");
            }
            break;
        case 7: 
            let sequence = prompt("Nhập dãy số, cách nhau bởi dấu phẩy (vd: 1, 2, 3, 4):");
            if (sequence !== null) {
                alert(' Dãy số bạn đã nhập là: ${sequence}');
            }
            break;
        case 8:
            let primeCheck = parseInt(prompt("Nhập một số để kiểm tra số nguyên tố:"));
            if (isNaN(primeCheck)){
                let isPrime = true;
                if (primeCheck < 2) {
                    isPrime = false;
                } else {
                    for (let i = 2; i<=Math.sqrt(primeCheck); i++) {
                        if (primeCheck % i === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isprime) {
                    alert ('${primeCheck} là số nguyên tố.');
                } else {
                    alert('${primeCheck} không phải là số nguyên tố.');
                }
            } else {
                alert(" Số nhập vào không hợp lệ!");
            }
            break;
        case 9:
            let strInput = prompt("Nhập một chuỗi bất ky:");
            if (strInput !== null) {
                let reversedStr = strInput.split (""). reverse().join("");
                alert('Chuỗi ban đầu: ${strInput}\n Chuỗi đảo ngược: ${reversedStr}');
            }
            break;

        case 10:
            alert("Đã thoát khỏi chương trình. Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn số từ 1 đến 10.");
            break;
    }
} while (choice !== 10);
