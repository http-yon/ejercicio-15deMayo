/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */


let numtotal:number = 0 
let cantidadDigitados:number = 0
let numMayor:number = 0
let NumMenor:number = 9999999



let numero:number = -1
while (numero!=0) {

    let newNum:string | null = prompt("ingrese un numero")
    let intNum:number = parseInt(newNum || "0")


    //saber si sigue o se rompe el while
    numero = intNum

    //numero total
    numtotal = numtotal+intNum

    //saber la cantidad de numeros ingresados
    cantidadDigitados = cantidadDigitados + 1


    //saber el mayor
    if (intNum > numMayor) {
        numMayor = intNum
    }


    //saber el menor
    if (intNum<NumMenor && intNum!==0) {
        NumMenor = intNum
    }

}

    //promedio
    let totalPromedio:number = numtotal/cantidadDigitados


    alert(`el total es ${numtotal} `)
    alert(`el total de datos ingresados es ${cantidadDigitados} `)
    alert(`el promedio es ${totalPromedio} `)
    alert(`el numero mayor ingresado es: ${numMayor} `)
    alert(`el numero menor ingresado es: ${NumMenor} `)