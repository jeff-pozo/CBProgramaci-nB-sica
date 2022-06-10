var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

let x1 = 0;
let y1 = 0;
let x2 = 10;
let y2 = 300;

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();

}
for( let i = 0; i < 30; i++){
    
    dibujarLinea("red", x1, y1, x2, y2)
    y1 = y1 + 10;
    x2 = x2 + 10;
}