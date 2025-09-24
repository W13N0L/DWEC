// Ejercicio 2.3: Condicionales y Operadores Lógicos
// 1. Crea una función que reciba un `saldo` y una cantidad a `retirar`.
// 2. Dentro de la función, comprueba si el `saldo` es mayor o igual a la cantidad a `retirar`.
// 3. Si se puede retirar, muestra “Retiro exitoso. Saldo restante: [nuevo saldo]”.
// 4. Si no, muestra “Saldo insuficiente”.
// 5. **Extra:** Añade una variable booleana `tieneTarjetaCredito`. Modifica la lógica para que, si el saldo no es suficiente PERO `tieneTarjetaCredito` es `true`, muestre “Saldo insuficiente, pagando con tarjeta de crédito”.

let saldo = 1
let retirar = 2
let tieneTarjetaCredito=true

function retirarDinero(saldo, retirar, tieneTarjetaCredito){
    if (saldo>=retirar){
        
        let nuevoSaldo = saldo-retirar

        console.log(`Retiro exitoso. Saldo restante: ${nuevoSaldo}`)
    }

    else if (tieneTarjetaCredito){
        console.log(`Saldo insuficiente, pagando con tarjeta de crédito`)
    }

    else {
        console.log(`Saldo insuficiente`)
    }
}

retirarDinero(saldo, retirar, tieneTarjetaCredito)



