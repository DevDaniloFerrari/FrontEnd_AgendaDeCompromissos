import { DetalhesPacienteComponent } from './../detalhes-paciente/detalhes-paciente.component';
import { Component, OnInit, Injectable } from '@angular/core';
import { PacienteService } from '@shared/providers';
import { Paciente } from '@shared/models';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listagem-paciente',
  templateUrl: './listagem-paciente.component.html',
  styleUrls: ['./listagem-paciente.component.css'],
})

@Injectable()
export class ListagemPacienteComponent implements OnInit {

  public pacientes: Array<Paciente>;


  constructor(
    private pacienteService: PacienteService,
    private datePipe: DatePipe,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.obterPacientes();
  }

  private obterPacientes(){
    this.pacienteService.obterPacientes().subscribe(
      response => {
        this.pacientes = response;
      }
    );
  }

  public formatarData(data: string): string {
    if (data) {
      return this.datePipe.transform(data, 'dd/MM/yyyy');
    }

    return null;
  }

  public abrirModal(paciente: Paciente){
    const modalRef = this.modalService.open(DetalhesPacienteComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.paciente = paciente;
  }

}
