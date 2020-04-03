import { ConsultaService } from './../../shared/providers/consulta.service';
import { ListagemPacienteComponent } from './listagem-paciente/listagem-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { DetalhesPacienteComponent } from './detalhes-paciente/detalhes-paciente.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ListagemPacienteComponent, DetalhesPacienteComponent],
  entryComponents: [DetalhesPacienteComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    NgbModalModule
  ],
  providers:[DatePipe, ConsultaService]
})
export class PacienteModule { }
