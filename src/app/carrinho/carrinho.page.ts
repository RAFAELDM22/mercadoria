import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router para navegação

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {

  constructor(private router: Router) {} // Inicializa o Router

  navigateToComprasList() {
    this.router.navigate(['/compras-list']); // Navega para a página de listagem de compras
  }

  goBackToHome() {
    this.router.navigate(['/home']); // Navega para a página inicial
  }

}