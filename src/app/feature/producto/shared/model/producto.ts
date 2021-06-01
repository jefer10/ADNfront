export class Producto {
    id: number;
    nombre:string;
    descripcion: string;
    precio:number;

    constructor(id: number,nombre:string, descripcion: string,precio:number) {
        this.id = id;
        this.descripcion = descripcion;
        this.nombre=nombre;
        this.precio=precio;
    }
}
