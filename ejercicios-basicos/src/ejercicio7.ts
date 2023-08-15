/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */

let nombre:string|null = prompt("Ingrese su nombre")
let nombreArticulo:string|null = prompt(`Hola ${nombre}, Ingrese nombre articulo`)
let precioUnitario:string|null = prompt(`Ingrese precio unitario del articulo ${nombreArticulo} `)
let cantidad:string|null = prompt(`Ingrese la cantidad a llevar del articulo ${nombreArticulo}`)

let pU:number = parseFloat(precioUnitario || "0")
let cP:number = parseFloat(cantidad || "0")

let precioTotal:number = pU * cP

alert(`Nombre Articulo: ${nombreArticulo}, Precio Unitario: ${precioUnitario}`);
alert(`precio total a pagar: ${precioTotal}`);


