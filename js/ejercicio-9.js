let palabra = prompt("Ingrese una palabra");
let vocales = "";

for (let index = 0; index < palabra.length; index++) {
  const character = palabra[index].toLowerCase();
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    vocales += character;
  }
}
alert(`Las vocales son ${vocales}`);
