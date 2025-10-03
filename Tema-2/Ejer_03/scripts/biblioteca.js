// En `biblioteca.js`, vas a crear un módulo para gestionar una colección de libros. Este módulo debe tener:
// 1. Un arreglo de objetos llamado `libros`. Cada objeto representará un libro con `id` (número), `titulo` (string), `autor` (string) y `paginas` (número). Inicialízalo con 10 libros.
// 2. Una función `agregarLibro(nuevoLibro)` que añada un nuevo libro a la colección.
// 3. Una función `obtenerLibros()` que devuelva la colección completa.
// Exporta ambas funciones.


const libros = [
    {id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", paginas: 417},
    {id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863},
    {id: 3, titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafón", paginas: 576},
    {id: 4, titulo: "1984", autor: "George Orwell", paginas: 328},
    {id: 5, titulo: "El Amor en los Tiempos del Cólera", autor: "Gabriel García Márquez", paginas: 348},
    {id: 6, titulo: "La Casa de los Espíritus", autor: "Isabel Allende", paginas: 433},
    {id: 7, titulo: "Rayuela", autor: "Julio Cortázar", paginas: 576},
    {id: 8, titulo: "Ficciones", autor: "Jorge Luis Borges", paginas: 224},
    {id: 9, titulo: "El Aleph", autor: "Jorge Luis Borges", paginas: 144},
    {id: 10, titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124}
]

function agregarLibro(nuevoLibro){
    libros.push(nuevoLibro);
}

function obtenerLibros(){
    return libros;
}

export {agregarLibro, obtenerLibros};


// Mejora el módulo `biblioteca.js` del ejercicio anterior. Añade las siguientes funciones: 
// 1. `buscarLibro(id)`: Utiliza `.find()` para buscar un libro por su `id` y devolverlo.
// 2. `eliminarLibro(id)`: Utiliza `.findIndex()` para encontrar el índice del libro con ese `id` y luego `.splice()` para eliminarlo de la colección

function buscarLibro(id){
    return libros.find(libro => libro.id === id);
}

function eliminarLibro(id){
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1){
        libros.splice (index, 1);
        return true;
    }
    return false;
}

export {buscarLibro, eliminarLibro};


// Añade una nueva función al módulo `biblioteca.js`:
// 1. `calcularTotalPaginas()`: Utiliza el método `.reduce()` para calcular la suma total de las páginas de todos los libros de la biblioteca.

function calcularTotalPaginas(){
    return libros.reduce((total, libro) => total + libro.paginas, 0);
}

export {calcularTotalPaginas};



// Añade una nueva función al módulo `biblioteca.js`:
// 1. `ordenarPorPaginas()`: Utiliza el método `.sort()` para ordenar los libros de la colección de menor a mayor número de páginas.

function ordenarPorPaginas(){
    return libros.sort((a,b) => a.paginas - b.paginas)
}

export {ordenarPorPaginas};



//  Añade dos funciones más al módulo `biblioteca.js`:
// 1. `hayLibrosLargos(limitePaginas)`: Utiliza `.some()` para comprobar si hay al menos un libro en la colección que tenga más páginas que `limitePaginas`.
// 2. `todosSonLibrosCortos(limitePaginas)`: Utiliza `.every()` para comprobar si todos los libros de la colección tienen menos páginas que `limitePaginas`.

function hayLibrosLargos(limitePaginas){
    return libros.some(libro => libro.paginas > limitePaginas);
}

function todosSonLibrosCortos(limitePaginas){
    return libros.every(libro => libro.paginas < limitePaginas);
}

export {hayLibrosLargos, todosSonLibrosCortos};