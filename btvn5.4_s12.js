let widthRect = 20;
let heightRect = 6;
let rectLog = "";
for (let i = 1; i <= heightRect; i++) {
    let row = "";
    for (let j = 1; J <= widthRect; i++){
        if (i=== 1 || i === heightRect || j === 1 || j === widthRect) {
            row += "*";
        } else {
            row += "";
        }
    }
    rectLog += row + "/n"
}
console.log(rectLog);