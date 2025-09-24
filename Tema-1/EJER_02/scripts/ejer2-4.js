// Ejercicio 2.4: Combinación de Objetos y Optional Chaining
// 1. Crea un objeto `usuario` con `nombre` y `email`.
// 2. Crea un objeto `perfil` con `puesto` y `empresa`.
// 3. Combina ambos objetos en un nuevo objeto `empleado` usando el “spread operator” (`...`).
// 4. Supongamos que el objeto `empleado` podría tener o no una propiedad anidada `perfil.direccion.ciudad`. Intenta acceder a `empleado.perfil.direccion.ciudad` usando “Optional Chaining” (`?.`) para evitar errores.
// 5. Usa el “Nullish Coalescing Operator” (`??`) para asignar un valor por defecto (“Ciudad no especificada”) si el resultado del paso anterior es `null` o `undefined`.

const usuario = {
    nombre: "Marcos",
    email: "email de Marcos"
}

const perfil = {
    puesto: "Marquero",
    empresa: "Marcmania",
    direccion: {
        ciudad: "la fel",
        lugar: "si"
    }
}

const empleado = {
    ...usuario,
    ...perfil
}

const ciudadEmpleado = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada";

console.log(ciudadEmpleado);