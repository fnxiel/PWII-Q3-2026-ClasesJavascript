var colors = require('colors');
const {Persona} = require('./models/Persona')
const {Empleado} = require('./models/Empleado')
const {Planilla} = require('./models/Planilla')

let persona = new Persona(1, "Luke", "Skywalker", "Tatooine", 25)
let persona2 = new Persona(2, "Leia", "Organa", "Coruscant", 25)
let persona3 = new Persona(3, "Han", "Solo", "Millenium Falcon", 32)
let persona4 = new Persona(4, "Anakin", "Skywalker", "Taooine", 50)

console.log("Bienvenido al sistema de Personas".bgBlue)

console.log(persona)
console.log(persona2)
console.log(persona3)
console.log("Antes de cambiar nombre", persona4)

persona4.saludar()

persona4.nombre = "Darth"
persona4.apellido = "Vader"

persona4.saludar()

console.log("Despues de cambiar nombre", persona4)

persona.saludar()
persona2.saludar()

persona4.presentarse(persona.nombreCompleto)

persona4.aniversario()

console.log('Accediendo al modulo de empleados'.bgGreen)

const empleado = new Empleado(5, "R2D2", "Skywalker", "Tatooine", 15, "Robot", 100, 0)
const empleado2 = new Empleado(6, "C3P0", "Skywalker", "Tatooine", 18, "Robot", 120, 0)

empleado.presentarse(persona4.nombreCompleto)

empleado.trabajar(8)
empleado.trabajar(10)
empleado.trabajar(6)
empleado.trabajar(8)

empleado.cobrar()

empleado.trabajar(6)
empleado.trabajar(8)

empleado.cobrar()

empleado.cobrar()


console.log('Accediendo al modulo de planilla'.bgMagenta)

const planilla = new Planilla("Programadores")

console.log(planilla)

planilla.agregarEmpleado(empleado)
planilla.agregarEmpleado(empleado2)


planilla.imprimirNombresPlanilla()
 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass