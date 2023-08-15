"use strict";
/* 9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */
let numAtletas = prompt("ingrese total atletas a agregar");
let parseAtletas = parseInt(numAtletas || "0");
//console.log(parseAtletas);
if (isNaN(parseAtletas)) {
    alert("debe ser un valor numerico");
}
else {
    let saltoMayor = 0;
    let nombreSaltoMayor;
    let atletaRecord = [];
    for (let i = 0; i < parseAtletas; i++) {
        let nombreAtleta = prompt("ingrese el nombre del atleta a agregar");
        let metrosAtleta = Number(prompt("ingrese los metros del atleta a agregar"));
        if (metrosAtleta > 15.50) {
            atletaRecord.push(nombreAtleta);
            console.log(atletaRecord);
        }
        if (metrosAtleta > saltoMayor) {
            nombreSaltoMayor = nombreAtleta;
            saltoMayor = metrosAtleta;
        }
    }
    alert(` la atleta con un salto mayor de ${saltoMayor} fue ${nombreSaltoMayor}`);
    alert(`los atletas que rompieron record fueron : ${atletaRecord}`);
}
