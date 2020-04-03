import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPacienteComponent } from './listagem-paciente/listagem-paciente.component';


const routes: Routes = [
    {
        path: '',
        component: ListagemPacienteComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
