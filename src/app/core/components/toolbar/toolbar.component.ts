import { Component, OnInit } from '@angular/core';
import{CartService}from'@core-service/cart.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styles: [`:host {
    background-color: #106cc8;
    color: rgba(255, 255, 255, 0.87);
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  h1 {
    display: inline;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0.1px;
    line-height: 48px;
  
  }

  .more {
    background: url("/assets/svg/more.svg");
    float: right;
    height: 24px;
    margin-top: 12px;
    width: 24px;
  }

  a{
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background: #ffff;
    margin-top: 1%;
  }
  .derecha   { float: right; }
  `]
})
export class ToolbarComponent implements OnInit {

  cantidad:number=0;

  constructor(private cartService:CartService) {
    this.cartService.cart$.subscribe(productos=>{
      console.log(productos);
      this.cantidad=productos.length;
    })
   }

  ngOnInit() {
  }

}
