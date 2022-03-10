//PUNTO 1
var numero = Number(prompt("Ingresa un numero"));
if (numero % 2 == 0){
    console.log(numero + " es divisible entre 2");
}else{
    console.log(numero + " no es divisible entre 2");
}
//PUNTO 2
var numero = Number(prompt("Ingresa un numero"));
if (numero % 2 == 0){
    alert("El número "+numero+" es par");
}else{
    alert("El número "+numero+" es impar");
}
//PUNTO 3
var numero = Number(prompt("Ingresa un numero"));
if (numero == 1000){
    console.log("Ganaste un premio");
}else{
    console.log(numero + " Lo sentimos, sigue participando");
}
//PUNTO 4
var numero1 = Number(prompt("Ingresa un numero"));
var numero2 = Number(prompt("Ingresa un numero"));
if (numero1 > numero2){
    console.log(numero1+" es mayor que "+numero2);
}else{
    console.log(numero1+" es menor que "+numero2);
}
//PUNTO 5
var numero1 = Number(prompt("Ingresa un numero"));
var numero2 = Number(prompt("Ingresa un numero"));
var numero3 = Number(prompt("Ingresa un numero"));

if (numero1 > numero2 && numero1 > numero3){
    console.log(numero1+" es el mayor");
}else if(numero2 > numero1 && numero2 > numero3){
    console.log(numero2+" es el mayor");
}else if(numero3 > numero1 && numero3 > numero2){
    console.log(numero3+" es el mayor");
}