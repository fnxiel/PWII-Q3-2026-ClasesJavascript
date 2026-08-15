import {Persona} from "./models/classes/Persona.js"
import {IPersona} from "./models/interface/IPersona.js"

console.log("Hola mundo")

//Declaracion de tipo implicita
let nombre = "Fran"
let valor: number = 10

//Declaracion de tipo explicita
let apellido: string = "Garcia"
let edad: number = 30
let fecha: Date = new Date()
let booleano: boolean = true
let noDefinido: undefined
let nulo: null
let estado: "Activo" | "Inactivo"
estado = "Activo"
let notificacion : "Informacion" | "Advertencia" | "Error" | "Hecho" | null
notificacion = null
let numerosValidos: 1 | 2 | 3
numerosValidos = 1
let objeto: {} = {}
let arreglo: [] = []

let valorAny: any = 10
valorAny = ""
valorAny = true

let persona1: IPersona = new Persona(1, "Fran", "Garcia", "Calle 123", 30, 1000 )
let persona2: IPersona = new Persona(2, "Maria", "Garcia", "Calle 123", 30, 1000 )
let persona3: IPersona = new Persona(3, "Juan", "Garcia", "Calle 123", 30, 1000 )
let persona4: IPersona = new Persona(4, "Ana", "Garcia", "Calle 123", 30, 1000 )


persona1.presentarse("Pedro")
persona2.presentarse("Luis")
persona3.presentarse(persona1.nombreCompleto)
persona4.aniversario()

interface IGrupoPersonas{
    personas: IPersona[]
    numeros: number[]
}

let grupo: IGrupoPersonas = {
    personas: [persona1, persona2],
    numeros: [1, 2, 3, 4, 5]
}

grupo.personas.push(persona3, new Persona(5, "Carlos", "Garcia", "Calle 123", 30, 1000))

