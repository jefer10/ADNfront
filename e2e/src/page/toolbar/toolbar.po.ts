import { by, element } from 'protractor';

export class ToolbarPage {

    private linkPedido=element(by.id('carrito'));
    
    async clickCarritoPedido() {
        await this.linkPedido.click();
    }

}