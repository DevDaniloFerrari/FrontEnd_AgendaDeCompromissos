import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemConsultaComponent } from './listagem-consulta/listagem-consulta.component';


const routes: Routes = [
    {
        path: '',
        component: ListagemConsultaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
