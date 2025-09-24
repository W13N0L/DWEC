// 2. **Crea el archivo `main.js`:**
//     - Importa `crearPerfil` y `mostrarPerfil` desde `gestorUsuarios.js`. Puedes usar un alias para la importación de `crearPerfil` si lo deseas.
//     - Llama a `crearPerfil` dos veces para crear dos perfiles de usuario diferentes y guárdalos en un array llamado `usuarios`.
//     - Itera sobre el array `usuarios` y, para cada usuario, utiliza `mostrarPerfil` para imprimir su información en la consola.

// 4. **Actualiza el archivo `main.js`:**
//     - Importa todas las funciones necesarias desde `gestorUsuarios.js`.
//     - Crea un array con al menos 5 objetos de usuario, con diferentes edades (algunos mayores de 18 y otros menores).
//     - Usa las funciones importadas para realizar las siguientes operaciones y mostrar los resultados en la consola:
//     1. Llama a `obtenerMayoresDeEdad` para filtrar el array y guarda el resultado en una nueva variable.
//     2. Muestra un encabezado que diga “Usuarios mayores de edad:” y luego itera sobre el nuevo array para mostrar el perfil de cada uno de esos usuarios.
//     3. Llama a `calcularPromedioEdad` con el array original de usuarios y muestra el resultado en un mensaje claro, por ejemplo: “La edad promedio de los usuarios es: [promedio]”.
//     5. **Configuración en HTML:**

import { crearPerfil, esMayorDeEdad, obtenerMayoresDeEdad, calcularPromedioEdad } from './gestorUsuarios.js';
import mostrarPerfil from './gestorUsuarios.js';

console.log("Perfiles de usuarios:");
const usuario1 = crearPerfil("Juan", 'email', 30);
const usuario2 = crearPerfil('Ana', 'email2', 10);
const usuario3 = crearPerfil('Marcos', 'email3', 20);
const usuario4 = crearPerfil('Javier', 'email4', 32);
const usuario5 = crearPerfil('Enol', 'email5', 14);

const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];

usuarios.forEach(usuario => {
    console.log(mostrarPerfil(usuario));
})

const mayoresDeEdad = obtenerMayoresDeEdad(usuarios);

console.log("");

console.log("Usuarios mayores de edad:");
mayoresDeEdad.forEach(usuario => {
    console.log(mostrarPerfil(usuario));
})

const promedioEdad = calcularPromedioEdad(usuarios);
console.log("");
console.log(`La edad promedio de los usuarios es: ${promedioEdad}`);