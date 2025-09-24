// Ejercicio 2.1: Arrays y Métodos
// 1. Crea un array `numeros` con al menos 6 números.

const numeros = [1,2,3,4,5,6]

// 2. Usa el método `.map()` para crear un nuevo array `dobles` que contenga el doble de cada número del array original.

const dobles = numeros.map(function(numero){
    return numero*2
})

// 3. Usa el método `.filter()` para crear un nuevo array `pares` que contenga solo los números pares del array `numeros`.

const pares = numeros.filter(function(numero){
    return numero%2 === 0
})

// 4. Usa un bucle `for...of` para imprimir cada número del array `pares` en la consola.

for (const numero of pares){
    console.log(numero)
}