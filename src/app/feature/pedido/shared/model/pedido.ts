export class Pedido {
    id: number;
    fecha:Date;
    cliente:number;
    iva:number;
    valorEnvio:number;
    total:number;

    constructor(id: number,fecha:Date, cliente:number,iva:number,valorEnvio:number,total:number) {
        this.id = id;
        this.fecha = fecha;
        this.cliente=cliente;
        this.iva=iva;
        this.valorEnvio=valorEnvio;
        this.total=total;
    }
}