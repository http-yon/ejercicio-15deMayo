let strn1: string | null = prompt("Ingresa el primer número");
let strn2: string | null = prompt("Ingresa el segundo número");

let n1: number = parseFloat(strn1 || "0");
let n2: number = parseFloat(strn2 || "0");

if (isNaN(n1) || isNaN(n2)) {
    console.log("ambos valores deber ser numericos");
}else{


        if(n1 > n2){
            alert(`la suma de los digitos es: ${n1+n2}, la resta de los digitos es:${n1-n2}`);
        }

        else if(n1 < n2){
            alert(`el prodcuto entre los digitos es: ${n1*n2}, la division de los digitos es:${n1/n2}`);
            
        }else{
            alert("valores no validos")
        }

}




