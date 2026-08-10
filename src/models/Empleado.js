const {Persona} = require('./Persona')

class Empleado extends Persona{
    puesto
    salarioHora = 0
    pendientePlanilla = 0
    FechaContratacion

    constructor(id, nombre, apellido, direccion, edad, puesto, salarioHora, pendientePlanilla){
        super(id, nombre, apellido, direccion, edad)

        this.puesto = puesto
        this.salarioHora = salarioHora
        this.pendientePlanilla = pendientePlanilla
        this.FechaContratacion = new Date()
    }

    trabajar(cantidadHoras){
        this.pendientePlanilla = this.pendientePlanilla + (this.salarioHora * cantidadHoras)
        console.log(`He trabajado ${cantidadHoras} Horas`)
        console.log(`Se me debe L${this.pendientePlanilla} en concepto de planilla`)
    }

    cobrar(){
        console.log(`Me han pagado L${this.pendientePlanilla} al dia de hoy ${new Date().toLocaleDateString()}`)
        this.pendientePlanilla = 0
    }

}

module.exports = {Empleado}