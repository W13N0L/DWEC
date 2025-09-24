// 2. **Crea el archivo `tienda.js`:**
// - Importa todas las funciones desde `inventario.js`.
// - Crea un array vacío `inventario`.
// - Usa la función `crearProducto` para añadir al menos 6 productos al array. Asegúrate de tener varias categorías (ej: “Electrónica”, “Ropa”, “Libros”) y de que al menos un producto tenga `stock: 0`.
// - Utiliza las funciones importadas para hacer lo siguiente y mostrar los resultados en la consola:
// 1. Obtén y muestra todos los productos de la categoría “Ropa”.
// 2. Obtén y muestra una lista de los productos agotados.
// 3. Calcula y muestra el valor total del inventario.
// 4. Ejecuta la función `resumenInventario` para ver el resumen completo.

import {crearProducto, filtrarPorCategoria, listarProductosAgotados, calcularValorTotalInventario} from './inventario.js';
import resumenInventario from './inventario.js';

const inventario = [];

inventario.push(crearProducto("Camiseta", "Ropa", 20, 15));
inventario.push(crearProducto("Pantalones", "Ropa", 40, 0));
inventario.push(crearProducto("Libro de JavaScript", "Libros", 30, 10));
inventario.push(crearProducto("Auriculares", "Electrónica", 80, 5));
inventario.push(crearProducto("Smartphone", "Electrónica", 600, 8));
inventario.push(crearProducto("Novela", "Libros", 25, 0));

console.log("Productos de la categoria 'Ropa':");
console.log(filtrarPorCategoria(inventario, "Ropa"));

console.log("");

console.log("Productos agotados:");
console.log(listarProductosAgotados(inventario));

console.log("");

console.log("Valor total del inventario:");
console.log(calcularValorTotalInventario(inventario) + "€");

console.log("");
resumenInventario(inventario);