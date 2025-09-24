// Ejercicio 2.5 Gestión y Análisis de Datos de Usuarios
// 1. **Crea el archivo `gestorUsuarios.js`:**
//     - Dentro de este archivo, crea y exporta (usando `export`) una función llamada `crearPerfil`. Esta función debe aceptar `nombre`, `email` y `edad` y devolver un objeto que represente a un usuario.
//     - Crea otra función llamada `mostrarPerfil`. Esta función debe aceptar un objeto de usuario y devolver un string con formato, por ejemplo: `Nombre: [nombre], Email: [email], Edad: [edad]`.
//     - Exporta `mostrarPerfil` como la exportación por defecto (`export default`).
//
// 3. **Mejora el archivo `gestorUsuarios.js`:**
//         - Mantén la función `crearPerfil` que ya tenías.
//         - Añade y exporta una nueva función `esMayorDeEdad`. Esta función recibirá un objeto de usuario y devolverá `true` si su edad es 18 o más, y `false` en caso contrario.
//         - Añade y exporta una función `obtenerMayoresDeEdad` que reciba un array de usuarios y, utilizando el método `.filter()` y la función `esMayorDeEdad`, devuelva un nuevo array solo con los usuarios que cumplen la condición.
//         - Añade y exporta una función `calcularPromedioEdad` que reciba un array de usuarios y calcule su edad promedio. Puedes usar el método `.reduce()` para esto.
//         - Mantén `mostrarPerfil` como la exportación por defecto.

export function crearPerfil(nombre, email, edad){
    return {
        nombre:nombre,
        email:email,
        edad:edad
    }
}

export default function mostrarPerfil(usuario){
    return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}


export function esMayorDeEdad(usuario) {
    if (usuario.edad>18) {
        return true;
    }
    return false;
}

export function obtenerMayoresDeEdad(usuarios) {
    const mayores = usuarios.filter(esMayorDeEdad);
    return mayores;
}

export function calcularPromedioEdad(usuarios){ 
    const totalEdad = usuarios.reduce((suma, usuario) => suma + usuario.edad, 0);
    return totalEdad / usuarios.length;
}