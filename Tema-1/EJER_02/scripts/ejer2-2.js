//Ejercicio 2.2: Funciones
// 1. Escribe una **Function Declaration** llamada `calcularAreaRectangulo` que acepte `base` y `altura` y devuelva el área.
let base = 10
let altura = 5


function calcularAreaRectangulo(n1, n2){

    console.log(n1*n2)

}

calcularAreaRectangulo(base, altura)

// 2. Escribe la misma lógica usando una **Function Expression** y guárdala en una constante `calcularAreaTriangulo`.

calcularAreaTriangulo(base, altura)

function calcularAreaTriangulo(n1, n2){
    
    console.log(n1*n2/2)
    
}

// 3. Convierte la función anterior en una **Arrow Function**.


const calcularAreaTriangulo2 = (n1, n2) => {
    
    console.log(n1*n2/2)
    
}

calcularAreaTriangulo2(base, altura)

// 4. Añade valores por defecto a los parámetros de cualquiera de las funciones anteriores.
calcularAreaRectangulo(base=100, altura=3)

// 5. Llama a cada función con valores de prueba y muestra el resultado en la consola.

calcularAreaTriangulo(base=5, altura=7)
calcularAreaTriangulo2(base=12, altura=3)
calcularAreaRectangulo(base=20, altura=2)
