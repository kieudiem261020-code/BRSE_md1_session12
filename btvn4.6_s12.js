let count7 = 0, sum7 = 0, num = 0;
while (count7 < 30) {
   if (num % 7 === 0) {
       sum7 += num;
       count7++;
   }
   num++;  
}
alert("Tổng của 30 số nguyên đầu tiên chia hết cho 7 là: " + sum7);