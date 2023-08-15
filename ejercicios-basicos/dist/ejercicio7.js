"use strict";
/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */
let nombre = prompt("Ingrese su nombre");
let nombreArticulo = prompt(`Hola ${nombre}, Ingrese nombre articulo`);
let precioUnitario = prompt(`Ingrese precio unitario del articulo ${nombreArticulo} `);
let cantidad = prompt(`Ingrese la cantidad a llevar del articulo ${nombreArticulo}`);
let pU = parseFloat(precioUnitario || "0");
let cP = parseFloat(cantidad || "0");
let precioTotal = pU * cP;
alert(`Nombre Articulo: ${nombreArticulo}, Precio Unitario: ${precioUnitario}`);
alert(`precio total a pagar: ${precioTotal}`);
