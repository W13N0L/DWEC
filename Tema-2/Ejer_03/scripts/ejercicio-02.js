// Ejercicio 3.2: Filtrando canciones largas
// Crea un archivo `ejercicio-02.js`. Copia la `playlist` del ejercicio anterior. Ahora, utiliza el método `.filter()` para crear un nuevo arreglo que contenga únicamente las canciones que duren más de 180 segundos.
// Finalmente, utiliza `.map()` en el nuevo arreglo filtrado para crear un arreglo de strings que contenga el mensaje: “La canción ‘[TITULO]’ de [ARTISTA] dura [DURACION] segundos.” Imprime este último arreglo en la consola.

//Cambie las duraciones para saber si funciona o no el filtrado
const playlist = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 300 },
    { titulo: "Imagine", artista: "John Lennon", duracion: 250 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 179 },
    { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 181 },
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 180 },
    { titulo: "Like a Rolling Stone", artista: "Bob Dylan", duracion: 200 },
    { titulo: "What's Going On", artista: "Marvin Gaye", duracion: 400 },
    { titulo: "Hey Jude", artista: "The Beatles", duracion: 120 },
    { titulo: "Purple Rain", artista: "Prince", duracion: 175 },
    { titulo: "Rolling in the Deep", artista: "Adele", duracion: 220 }
];

const cancionesLargas = playlist.filter(cancion => cancion.duracion > 180);

const mensaje = cancionesLargas.map (cancion => 'La cancion ' + cancion.titulo + ' de ' + cancion.artista + ' dura ' + cancion.duracion + ' segundos');

console.log(mensaje);