import { ConsultaService } from './../../../shared/providers/consulta.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Paciente, Consulta } from '@shared/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.css']
})
export class DetalhesPacienteComponent implements OnInit {

  @Input() paciente: Paciente;

  public consultas: Array<Consulta>;

  constructor(
    public activeModal: NgbActiveModal,
    private datePipe: DatePipe,
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.obterConsultas();
  }

  private obterConsultas(){
    this.consultaService.obterConsultasPorPaciente(this.paciente.id).subscribe(
      response => {
        this.consultas = response;
      },
      error => {
        if(error.status == 406)
          this.consultas = null;
      }
    );
  }

  public fechar(){
    this.activeModal.close(false);
  }

  public formatarData(data: string): string {
    if (data) {
      return this.datePipe.transform(data, 'dd/MM/yyyy');
    }

    return null;
  }

  public formatarDataConsulta(data: string): string {
    if (data) {
      return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm');
    }

    return null;
  }

}
