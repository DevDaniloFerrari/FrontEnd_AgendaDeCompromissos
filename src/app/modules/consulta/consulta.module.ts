import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListagemConsultaComponent } from './listagem-consulta/listagem-consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';



@NgModule({
  declarations: [ListagemConsultaComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule
  ],
  providers: [DatePipe]
})
export class ConsultaModule { }
