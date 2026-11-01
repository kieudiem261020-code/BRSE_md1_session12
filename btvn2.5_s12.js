let aleg = parseFloat(prompt("Nhập cạnh kề a của tam giác vuông:"));
let bLeg = parseFloat(prompt("Nhập cạnh kề b của tam giác vuông:"));

if (isNaN(aleg) || isNaN(bLeg) || aleg <= 0 || bLeg <= 0) {
    alert("Vui lòng nhập các số hợp lệ và lớn hơn 0!");
} else {
    let hypotenuse = Math.sqrt(aleg * aleg + bLeg * bLeg);
    alert(`Cạnh huyền của tam giác vuông là: ${hypotenuse}`);
}   