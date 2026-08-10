function imprimirNombres(elemento){
    console.log(`${elemento.nombreCompleto}`)
}

const imprimirNombresFF = (elemento) => console.log(`${elemento.nombreCompleto}`)


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
        console.log(`Imprimiendo nombres de la planilla ${this.nombre}`)
        for (let i = 0; i < this.empleados.length; i++) {
            const element = this.empleados[i];
            console.log(`${i+1} - ${element.nombreCompleto}`)
        }

        console.log(`Imprimiendo nombres de la planilla ${this.nombre} usando foreach`)
        // this.empleados.forEach(function (elemento){
        //     console.log(`${elemento.nombreCompleto}`)
        // })
        //this.empleados.forEach(imprimirNombres)

        //Funciones de flecha
        //this.empleados.forEach((elemento) => console.log(`${elemento.nombreCompleto}`))
        this.empleados.forEach(imprimirNombresFF)
    }

    obtenerEmpleadoPorId(){

    }

    obtenerEmpleadosEnPlanilla(){

    }

    //Modificar

    //Interactuar con empleados


    //Eliminar empleados

}


module.exports = {Planilla}