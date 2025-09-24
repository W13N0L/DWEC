//1. Crea un objeto ‘producto’ con las propiedades: ‘nombre’ (string), ‘precio’ (number).
const producto = {
    nombre: 'ordenador',
    precio: 900
}

//2. Crea un objeto ‘cliente’ con las propiedades: ‘nombreCliente’ (string), ‘esPremium’ (boolean).
const cliente = {
    nombreCliente: 'Marcos',
    esPremium: true
}

//3. Combina ambos objetos en un nuevo objeto llamado ‘pedido’ utilizando el Spread Operator (…).
const pedido = {
    ...producto,
    ...cliente
}

//4. Muestra el objeto ‘pedido’ en consola.
console.log(pedido)

//5. ¿Qué sucede si las propiedades de los objetos originales tienen el mismo nombre? Crea un nuevo objeto ‘producto2’ con la propiedad ‘nombre’ y combínalo con el objeto ‘cliente’ para ver el resultado.
const producto2 = {
    nombre: 'tablet'
}

const pedido2 = {
    ...producto2,
    ...cliente
}

console.log(pedido2)

//No pasa nada ya que estan dentro de objetos con diferentes nombres