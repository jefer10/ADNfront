import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ToolbarPage }from '../page/toolbar/toolbar.po'
import { ProductoList } from '../page/producto/productoListar.po';
import {PedidoPage} from '../page/pedido/pedido.po';



describe('workspace-project Productolista', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: ProductoList;
    let toolbar:ToolbarPage;
    let pedido:PedidoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new ProductoList();
        toolbar=new ToolbarPage();
        pedido=new PedidoPage();
    });


    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.contarProductos();
        expect(2).toBe(producto.contarProductos());
    });

    it("deberia llevarme a crear Pedido",()=>{
      page.navigateTo();
      navBar.clickBotonProductos();
      producto.addCarrito();
      toolbar.clickCarritoPedido();

      expect(pedido.valorProducto()).toEqual("120000");
    })
});
