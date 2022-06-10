var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); 
var x;
var ancho = d.width;


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick(  ) {
    x = parseInt(texto.value);
    var espacio = ancho / x
    var lineas = x;
    var l = 0;
    var xI, yI, xF, yF ;
    for (l = 0; l < lineas; l++) {
        yI = espacio * l;
        xF = espacio * ( l + 1 );
        xI = espacio * l;
        yF = espacio * ( l + 1 );
        dibujarLinea("green" , 0 , yI, xF, 300);
        dibujarLinea("green" , xI , 0, 300, yF);
        console.log("Linea" + l);
   }
   dibujarLinea("red", 0, 0, 300, 0)
   dibujarLinea("red", 300, 0, 300, 300)
   dibujarLinea("red", 0, 300, 300, 300)
   dibujarLinea("red", 0, 0, 0, 300)
}

