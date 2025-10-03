// En `empleados.js`, crea un módulo para gestionar una lista de empleados. El arreglo de objetos de empleados debe tener: `id`, `nombre`, `departamento` y `salario`.
// El módulo debe exportar las siguientes funciones:
// * `agregarEmpleado(empleado)`
// * `eliminarEmpleado(id)`
// * `buscarPorDepartamento(departamento)`: Debe devolver un arreglo con los empleados de ese departamento (`.filter()`).
// * `calcularSalarioPromedio()`: Debe devolver el salario promedio de todos los empleados (`.reduce()`).
// * `obtenerEmpleadosOrdenadosPorSalario()`: Debe devolver un nuevo arreglo con los empleados ordenados de mayor a menor salario (`.sort()`).


let empleados = [
    { id, nombre, departamento, salario}
];


export function agregarEmpleado(empleado) {
    empleados.push(empleado);
}

export function eliminarEmpleado(id) {
    const index = empleados.findIndex(empleado => empleado.id === id);
    if (index !== -1) {
        empleados.splice(index, 1);
    }
}

export function buscarPorDepartamento(departamento){
    return 
}