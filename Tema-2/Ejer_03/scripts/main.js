// En `main.js`, importa y utiliza todas las funciones para simular la gestión de empleados de una empresa.
// Añade varios empleados
// busca por departamento
// calcula el salario promedio
// muestra la lista de empleados ordenados por salario.

import { agregarEmpleado, eliminarEmpleado, buscarPorDepartamento, calcularSalarioPromedio, obtenerEmpleadosOrdenadosPorSalario } from './empleados.js';

agregarEmpleado({ id: 2, nombre: 'Luis', departamento: 'Marketing', salario: 3500 });
agregarEmpleado({ id: 3, nombre: 'Marta', departamento: 'Ventas', salario: 3200 });
agregarEmpleado({ id: 4, nombre: 'Carlos', departamento: 'IT', salario: 4000 });

console.log('Empleados en Ventas:', buscarPorDepartamento('Ventas'));

console.log('Salario Promedio:', calcularSalarioPromedio());

console.log('Empleados Ordenados por Salario:', obtenerEmpleadosOrdenadosPorSalario());

eliminarEmpleado(2);