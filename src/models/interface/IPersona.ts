export interface IPersona{
    id: number
    nombre: string
    apellido: string
    direccion: string
    edad: number
    fechaCreacion: Date
    deuda: number

    get nombreCompleto(): string

    saludar(): void

    decirInformacionPersonal(): void

    presentarse(nombre: string): void

    aniversario(): void
}