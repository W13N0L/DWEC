// En `empleados.js`, crea un módulo para gestionar una lista de empleados. El arreglo de objetos de empleados debe tener: `id`, `nombre`, `departamento` y `salario`.
// El módulo debe exportar las siguientes funciones:
// * `agregarEmpleado(empleado)`
// * `eliminarEmpleado(id)`
// * `buscarPorDepartamento(departamento)`: Debe devolver un arreglo con los empleados de ese departamento (`.filter()`).
// * `calcularSalarioPromedio()`: Debe devolver el salario promedio de todos los empleados (`.reduce()`).
// * `obtenerEmpleadosOrdenadosPorSalario()`: Debe devolver un nuevo arreglo con los empleados ordenados de mayor a menor salario (`.sort()`).


let empleados = [
    { id: 1, nombre: 'Ana', departamento: 'Ventas', salario: 3000 }
];


export function agregarEmpleado(empleado) {
    empleados.push(empleado);
};

export function eliminarEmpleado(id) {
    const index = empleados.findIndex(empleado => empleado.id === id);
    if (index !== -1) {
        empleados.splice(index, 1);
    }
}

export function buscarPorDepartamento(departamento){
    return empleados.filter (empleado => empleado.departamento === departamento);
}

export function calcularSalarioPromedio(){
    const totalSalario = empleados.reduce((acumulador, empleado) => acumulador + empleado.salario, 0);
    return totalSalario / empleados.length;
}

export function obtenerEmpleadosOrdenadosPorSalario(){
    return [...empleados].sort((a, b) => b.salario - a.salario);
}