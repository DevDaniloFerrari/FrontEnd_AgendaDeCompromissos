import { ConsultaService } from './../../shared/providers/consulta.service';
import { ListagemPacienteComponent } from './listagem-paciente/listagem-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { DetalhesPacienteComponent } from './detalhes-paciente/detalhes-paciente.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdicionarPacienteComponent } from './adicionar-paciente/adicionar-paciente.component';



@NgModule({
  declarations: [ListagemPacienteComponent, DetalhesPacienteComponent, AdicionarPacienteComponent],
  entryComponents: [DetalhesPacienteComponent, AdicionarPacienteComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, ConsultaService]
})
export class PacienteModule { }
