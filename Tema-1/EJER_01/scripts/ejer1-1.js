// 1. Declara una variable 'nombre' usando 'const' y asignale tu nombre
const nombre = 'Enol'

// 2. Declara una variable 'edad' usando 'let' y asignale tu edad
let edad = 19

// 3. Declara una variable 'tieneMascota' usando 'const' y asignale un valor booleano
const tieneMascota = true

// 4. Reasigna en consola el valor y el tipo de cada una de las tres variables
//Nombre no se puede reasignar porque esta como constante
edad = 20
//tieneMascota no se puede reasignar porque esta como constante



// 5. Imprime en consola el valor y el tipo de cada una de las tres variables <br>
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(tieneMascota, typeof tieneMascota)

// 6. Crea una frase que describa a una persona usando Template Strings, por ejemplo: "Juan tiene 30 años y no tiene mascota.". Imprimela en consola
console.log(nombre + ' tiene ' + edad + ' años ' + (tieneMascota ? 'y tiene mascota.' : 'y no tiene mascota.'))