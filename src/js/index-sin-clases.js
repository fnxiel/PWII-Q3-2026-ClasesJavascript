var nombre = "Luke"

var persona = {
    id: 1,
    nombre: "Luke",
    apellido: "Skywalker",
    direccion: "Taooine",
    edad: 25
}

var persona2 = {
    id: 2,
    nombre: "Leia",
    apellido: "Organa",
    direccion: "Coruscant",
    edad: 25,
    saludo(){
        console.log("Un placer conocerte")
    }
}


var persona3 = {
    id: 3,
    nombre: "Han",
    apellido: "Solo",
    direccion: "Millenium Falcon",
    edad: 32,
    saludo(){
        console.log("Hola, mucho gusto")
    }
}

console.log(persona)
console.log(persona2)
console.log(persona3)