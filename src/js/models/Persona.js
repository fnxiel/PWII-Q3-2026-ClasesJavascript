class Persona {
    //Atributos - Propiedades
    id
    nombre
    apellido
    direccion
    edad
    fechaCreacion 
    deuda

    //Funciones - Metodos
    constructor(id, nombre, apellido, direccion, edad){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.edad = edad
        //this.nombreCompleto = `${this.nombre} ${this.apellido}` //Solo lectura

        //Asignados por el sistema.
        this.fechaCreacion = new Date()
        this.deuda = 0
    }

    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    saludar(){
        //console.log("Hola, mucho gusto mi nombre es", this.nombre, this.apellido)
        //console.log("Hola, mucho gusto mi nombre es " + this.nombre + " " + this.apellido)
        console.log(`Hola, mi nombre es ${this.nombreCompleto}. Mucho gusto`)
    }

    decirInformacionPersonal(){
        console.log(`Tengo ${this.edad} años de edad y vivo en ${this.direccion}`)
    }

    presentarse(nombre){
        console.log(`Mucho gusto, ${nombre}`)
        this.saludar()
        this.decirInformacionPersonal()

    }

    aniversario(){
        this.edad = this.edad + 1
        console.log(`Acabo de cumplir años el dia de hoy ${new Date().toLocaleDateString()}, ahora tengo ${this.edad} años`)
    }
}

module.exports = {Persona}