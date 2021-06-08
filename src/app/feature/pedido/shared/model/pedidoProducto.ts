export class PedidoProducto {
    id: number;
    pedidoid:number;
    productoid:number;

    constructor(id: number,pedidoid:number,productoid:number) {
        this.id = id;
        this.pedidoid = pedidoid;
        this.productoid=productoid;
    }
}