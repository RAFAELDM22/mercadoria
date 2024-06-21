import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importação correta do componente
import { ComprasListPage } from './compras-list.page';

// Combinação correta das rotas
const routes: Routes = [
  {
    path: '',
    component: ComprasListPage
  },
  // Outras rotas...
  { path: 'compras-list', component: ComprasListPage }, // Correção aqui
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasListPageRoutingModule {}