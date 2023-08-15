"use strict";
let strn1 = prompt("Ingresa el primer número");
let strn2 = prompt("Ingresa el segundo número");
let n1 = parseFloat(strn1 || "0");
let n2 = parseFloat(strn2 || "0");
if (isNaN(n1) || isNaN(n2)) {
    console.log("ambos valores deber ser numericos");
}
else {
    if (n1 > n2) {
        alert(`la suma de los digitos es: ${n1 + n2}, la resta de los digitos es:${n1 - n2}`);
    }
    else if (n1 < n2) {
        alert(`el prodcuto entre los digitos es: ${n1 * n2}, la division de los digitos es:${n1 / n2}`);
    }
    else {
        alert("valores no validos");
    }
}
