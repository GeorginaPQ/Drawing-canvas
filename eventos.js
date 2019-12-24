let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
console.log(teclas);

//let clickMouse = ("MouseEvent");


document.addEventListener("mousemove", dibujarMouse);



document.addEventListener('keydown', dibujarTeclado);
let cuadrito = document.getElementById("area_de_dibujo");
let papel = cuadrito.getContext("2d");
let x = 150;
let y = 150;

dibujarLinea("red", x - 1,y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();  
}


function dibujarMouse(evento){
    console.log(evento);
    //let colorMouse = "purple" 
    //let movimiento = 1;
    //dibujarLinea(colorMouse, 50, 50, 100, 100, papel);

}


function dibujarTeclado(evento){
    let colorcito = "green"
    let movimiento = 1;

    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN: 
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
            x = x - movimiento;     
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
            x = x + movimiento;
        break;
    }

}

    //if(evento.keyCode == teclas.UP){
      //  console.log("vamo' pa arriba");
    //}
    //if(evento.keyCode == teclas.DOWN){
      //  console.log("vamo' pa abajo");
    //}
    //if(evento.keyCode == teclas.LEFT){
      //  console.log("vamo' pa la izquierda");
    //}
    //if(evento.keyCode == teclas.RIGHT){
      //  console.log("vamo' pa la derecha");
    //}