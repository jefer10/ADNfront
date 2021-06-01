import { by, element } from 'protractor';


export class ProductoList{
    
    private listaProductos = element.all(by.css('ul.productos li'));
    private linkCrearPedido = element(by.id('carrito'));
    private linkSumarcarrito= element(by.id("2"));


    async contarProductos() {
        return this.listaProductos.count();
    }

    async addCarrito(){
        await this.linkSumarcarrito.click();
    }

    async irPedido(){
        await this.linkCrearPedido.click();
    }

}