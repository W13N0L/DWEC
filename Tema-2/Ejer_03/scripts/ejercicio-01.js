// Ejercicio 3.1: Creando tu primera lista de reproducción
// Crea un archivo `ejercicio-01.js`. Dentro de él, define un arreglo de objetos llamado `playlist`. Cada objeto representará una canción y debe tener las siguientes propiedades: `titulo` (string), `artista` (string) y `duracion` (número en segundos).
// Agrega al menos 10 canciones a la `playlist`. Luego, utiliza un bucle `forEach` para imprimir en la consola el título y el artista de cada canción.

const playlist = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
    { titulo: "Imagine", artista: "John Lennon", duracion: 183 },
    { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
    { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
    { titulo: "Like a Rolling Stone", artista: "Bob Dylan", duracion: 369 },
    { titulo: "What's Going On", artista: "Marvin Gaye", duracion: 233 },
    { titulo: "Hey Jude", artista: "The Beatles", duracion: 431 },
    { titulo: "Purple Rain", artista: "Prince", duracion: 512 },
    { titulo: "Rolling in the Deep", artista: "Adele", duracion: 228 }
];

playlist.forEach(cancion => {
    console.log('Titulo' + ': ' + cancion.titulo + ', Artista: ' + cancion.artista);
});