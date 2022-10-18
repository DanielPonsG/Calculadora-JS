'use strict';


const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
var igual = document.querySelector(".igual");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));

});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value));
});




window.addEventListener("keydown", function (e) {
    if (e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === ".") {

        clickB(e.key);

    } else if (e.key === "X" || e.key === "x" || e.key === "-" ||
        e.key === "+" ||
        e.key === "/") {
        clickO(e.key);
    } else if (e.key == "Enter" || e.key === "=") {
        igual.click();
        console.log("enter");
    } else if (e.key == "Backspace") {
        display.borrar();
        console.log("Space");
        
    } else if (e.key == "Escape") {
        display.borrarTodo();
        console.log("Escape");
        
    }

});

function clickO(tecla) {
    botonesOperadores.forEach(boton => {
        if (boton.innerText === tecla) {
            boton.click();
        }
    })
}

function clickB(key) {
    botonesNumeros.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })

};



alert("Funciones: Borrar Todo (ESC), Borrar (Backspace), Igual (Enter o =)")
