let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese base ";
rotulo2.innerHTML = "Ingrese altura";

btnEnviar.addEventListener("click", () => {
let base : number = Number(dato1.value);
let altura : number = Number(dato2.value);

let area : number = base*altura


  
    console.log("el area es:", area);
  }