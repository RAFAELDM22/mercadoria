import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarrinhoPage } from '../carrinho/carrinho.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  navigateToCarrinho(){
    this.navCtrl.navigateForward('/carrinho');
  }

}
