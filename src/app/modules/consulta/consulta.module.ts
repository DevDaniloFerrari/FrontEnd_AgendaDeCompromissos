import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListagemConsultaComponent } from './listagem-consulta/listagem-consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdicionarConsultaComponent } from './adicionar-consulta/adicionar-consulta.component';



@NgModule({
  declarations: [ListagemConsultaComponent, AdicionarConsultaComponent],
  entryComponents: [AdicionarConsultaComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class ConsultaModule { }
