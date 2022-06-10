var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

console.log(teclas)

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento){
    switch (evento.keyCode){
        case teclas.UP:
            console.log("Arriba");
        break;
        case teclas.DOWN:
            console.log("Abajo");
        break;
        case teclas.LEFT:
            console.log("Izquierda");
            break;
        default:
            console.log("Derecha");
    }
}