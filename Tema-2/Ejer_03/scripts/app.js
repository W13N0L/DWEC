// En `app.js`, importa las funciones del módulo `biblioteca.js`.
// Usa `obtenerLibros()` para mostrar la colección inicial.
// Luego, usa `agregarLibro()` para añadir un nuevo libro
// Vuelve a mostrar la colección para verificar que se ha añadido.

console.log("Ejercicio 3.3");

import { agregarLibro, obtenerLibros } from "./biblioteca.js";

console.log(obtenerLibros());

agregarLibro({id: 11, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", paginas: 96});

console.log(obtenerLibros());



//En `app.js`, importa y prueba estas nuevas funciones.
// Busca un libro por su `id` y muéstralo.
// Luego, elimina un libro y muestra la colección final.

console.log("Ejercicio 3.4");

import { buscarLibro, eliminarLibro } from "./biblioteca.js";

console.log(buscarLibro(3));

console.log(eliminarLibro(2));

console.log(obtenerLibros());



// En `app.js`, importa y utiliza esta función para imprimir en la consola el número total de páginas que suman todos los libros.

console.log("Ejercicio 3.5");

import { calcularTotalPaginas } from "./biblioteca.js";

console.log(calcularTotalPaginas());



// En `app.js`, muestra la colección de libros, luego llama a `ordenarPorPaginas()` y vuelve a mostrar la colección para verificar que se ha ordenado correctamente. <br>

console.log("Ejercicio 3.6");

import {ordenarPorPaginas} from "./biblioteca.js";

console.log(obtenerLibros());

console.log(ordenarPorPaginas());

console.log(obtenerLibros());



// En `app.js`, prueba ambas funciones con diferentes valores de `limitePaginas` y muestra los resultados (`true` o `false`).

console.log("Ejercicio 3.7");

import {hayLibrosLargos, todosSonLibrosCortos } from "./biblioteca.js";

console.log(hayLibrosLargos(300));

console.log(todosSonLibrosCortos(300));

console.log(hayLibrosLargos(1000));

console.log(todosSonLibrosCortos(1000));