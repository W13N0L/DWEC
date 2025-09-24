//1. Crea un objeto 'coche' con las propiedades: 'marca' (string), 'modelo' (string), 'año' (number) y 'estaDisponible' (boolean).
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 1995,
    estaDisponible: false
}

//2. Muestra el objetocompleto en consola utilizando console.table().
console.table(coche)

//3. Usa la desestructuración (destructuring) para extraer la 'marca' y el 'modelo' en variables separadas e imprímelas en consola.
const { marca, modelo } = coche
console.log(marca)
console.log(modelo)

//4. Cambia el valor de la propiedad 'estaDisponible' a 'true'.
coche.estaDisponible = true

//5. Agrega una nueva propiedad 'color' al objeto.
coche.color = 'rojo'

//6. Elimina la propiedad 'año' del objeto.
delete coche.año

//7. Vuelve a imprimir el objeto modificado en consola
console.table(coche)