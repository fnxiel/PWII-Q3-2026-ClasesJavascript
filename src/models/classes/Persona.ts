import {IPersona} from '../interface/IPersona'

export class Persona implements IPersona {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    edad: number;
    fechaCreacion: Date;
    deuda: number;

    constructor(id: number, nombre: string, apellido: string, direccion: string, edad: number, deuda: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
        this.fechaCreacion = new Date();
        this.deuda = deuda;
    }

    get nombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombreCompleto}. Mucho gusto`)
    }

    decirInformacionPersonal(): void {
        console.log(`Tengo ${this.edad} años de edad y vivo en ${this.direccion}`)
    }

    presentarse(nombre: string): void {
        console.log(`Mucho gusto, ${nombre}`)
        this.saludar()
        this.decirInformacionPersonal()
    }

    aniversario(): void {
        this.edad = this.edad + 1
        console.log(`Acabo de cumplir años el dia de hoy ${new Date().toLocaleDateString()}, ahora tengo ${this.edad} años`)
    }
}

