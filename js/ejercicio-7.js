let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let numero3 = parseFloat(prompt("Ingrese el tercer número: "));

if (numero1 > numero2 && numero1 > numero3) {
  alert(numero1 + " es mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  alert(numero2 + " es mayor");
} else {
  alert(numero3 + " es mayor");
}
