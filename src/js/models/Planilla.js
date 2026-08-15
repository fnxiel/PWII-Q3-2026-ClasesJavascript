// function imprimirNombres(elemento){
//     console.log(`${elemento.nombreCompleto}`)
// }

// const imprimirNombresFF = (elemento) => console.log(`${elemento.nombreCompleto}`)


class Planilla{
    empleados = []
    nombre = ''

    constructor(nombrePlanilla){
        this.nombre = nombrePlanilla
    }

    //CRUD

    //Create - Agregar

    agregarEmpleado(empleado){
        console.log(`Agregando un nuevo empleado (${empleado.nombre}) a la planilla ${this.nombre}`)
        this.empleados.push(empleado)
        console.log(`${this.empleados.length} empleados registrados`)
        console.log(this.empleados)
    }

    //Leer
    imprimirNombresPlanilla(){
        //for
        // console.log(`Imprimiendo nombres de la planilla ${this.nombre}`)
        // for (let i = 0; i < this.empleados.length; i++) {
        //     const element = this.empleados[i];
        //     console.log(`${i+1} - ${element.nombreCompleto}`)
        // }

        console.log(`Imprimiendo nombres de la planilla ${this.nombre} usando foreach`)
        // this.empleados.forEach(function (elemento){
        //     console.log(`${elemento.nombreCompleto}`)
        // })
        //this.empleados.forEach(imprimirNombres)

        //Funciones de flecha
        this.empleados.forEach((elemento, i) => console.log(`${i+1} - ${elemento.nombreCompleto}`))

        
        //this.empleados.forEach(imprimirNombresFF)

        // //Map
        // console.log(`Imprimiendo nombres de la planilla ${this.nombre} usando map`)
        // this.empleados.map((elemento) => console.log(`${elemento.nombreCompleto}`))


        /// Diferencia entre for each y map 

        //let numeros = [1,2,3,4,5]

        //let resultadoForEach = numeros.forEach((elemento) => elemento * 2)
        //console.log(resultadoForEach)

        //For each recorre el arreglo

        // let resultadoMap = numeros.map((elemento) => elemento * 2)
        // console.log(resultadoMap)
        // console.log(numeros)

        //Map devuelve un nuevo arreglo con el resultado.
    }

    obtenerEmpleadoPorId(id){
        const resultado = this.empleados.find((elemento) => elemento.id === id)
        if(resultado){
            console.log(`Encontrado el empleado con el ${id}`)
            console.log(resultado)
            return resultado
        }else{
            console.error(`No se encontró el empleado con el id ${id}`)
        }
    }

    obtenerEmpleadosMayoresDeEdad(){
        const resultado = this.empleados.filter((elemento) => elemento.edad >= 18)
        if(resultado.length > 0){
            console.log(`Se encontraron ${resultado.length} empleados mayores de edad`)
            console.log(resultado)
        }else{
            console.error("No hay empleados mayores de edad")
        }
    }

    //Modificar
    ajustarSueldoBase(id, nuevoSalarioHora){
        const resultado = this.empleados.find((elemento) => elemento.id === id)
        if(resultado){
            resultado.salarioHora = nuevoSalarioHora
            console.log(`El nuevo salario hora para el empleado ${resultado.id} - ${resultado.nombreCompleto} es ${resultado.salarioHora}`)
        }else{
            console.error(`No se encontró el empleado con el id ${id}`)
        }
    }

    //Interactuar con empleados
    registrarTrabajoEmpleado(id, cantidadHoras){
        const resultado = this.empleados.find((elemento) => elemento.id === id)
        if(resultado){
            console.log(`Registrando horas de trabajo del empleado con el id ${id}`)
            resultado.trabajar(cantidadHoras)
            console.log(resultado)
            return resultado
        }else{
            console.error(`No se encontró el empleado con el id ${id}`)
        }
    }

    pagarPlanilla(){
        console.log(`Iniciando pago de planilla ${this.nombre} para la fecha ${new Date().toLocaleDateString()}`)
        this.empleados.forEach(empleado =>{
            console.log(`Pagando al empleado ${empleado.nombreCompleto}`)
            empleado.cobrar()
        })
    }


    //Eliminar empleados
    eliminarEmpleado(id){
        const resultado = this.empleados.filter((elemento) => elemento.id !== id)
        this.empleados = resultado
        console.log(`Se eliminó el empleado con id ${id}`)
        console.log(resultado)
    }

}


module.exports = {Planilla}