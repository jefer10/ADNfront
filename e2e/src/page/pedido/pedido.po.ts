import { by, element } from 'protractor';

export class PedidoPage {

    private linkvalor=element(by.id('valor'));
    
    async valorProducto() {
        return this.linkvalor.getText();
    }

}