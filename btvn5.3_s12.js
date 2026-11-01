let triangleLog = "";
for (let i = 1; i <= 5; i++) {
    triangleLog += "*".repeat(i) + "\n";
}
triangleLog += "n Kiểu 2:\n";
for (let i = 5; i >= 1; i--) {
    triangleLog += "*".repeat(i) + "\n";
}
triangleLog += "n Kiểu 3:\n";
for (let i = 1; i <= 5; i++) {
    triangleLog += " ".repeat(5 - i) + "*".repeat(i) + "\n";
}
triangleLog += "n Kiểu 4:\n";
for (let i = 5; i >= 1; i--) {
    triangleLog += " ".repeat(5 - i) + "*".repeat(i) + "\n";
}
console.log(triangleLog);  