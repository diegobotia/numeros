'use strict';

let x1;
let x2;

function elevado(x2){
   return 0;    
}
function add(a,b){
  //let uno=document.getElementById("n1");
  //let dos=document.getElementById("n2");
  //let myTotal= document.getElementById("total");
  //let suma=parseInt(uno.value) + parseInt(dos.value);
  //myTotal.innerText= "El resultado es: " + suma;
  
  
     return a+b;
}

function minus(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

function raiz(a){
   return Math.sqrt(a);
}
function divide(a,b){
    
   if(b===0){
    return new Error("No puede dividir por cero");
   } else {
    return a/b;
   }

}

module.exports= {
    add,
    minus,
    multiply,
    divide,
    raiz,
    elevado
}
