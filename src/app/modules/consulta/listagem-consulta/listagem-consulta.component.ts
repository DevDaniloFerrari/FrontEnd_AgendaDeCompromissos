import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Consulta, Paciente } from '@shared/models';
import { ConsultaService, PacienteService } from '@shared/providers';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarConsultaComponent } from '../adicionar-consulta/adicionar-consulta.component';

@Component({
  selector: 'app-listagem-consulta',
  templateUrl: './listagem-consulta.component.html',
  styleUrls: ['./listagem-consulta.component.css']
})
export class ListagemConsultaComponent implements OnInit {

  public form: FormGroup;

  public consultas: Array<Consulta>;
  public pacientes: Array<Paciente>;

  public pacienteFiltrado: Paciente;

  constructor(
    private consultaService: ConsultaService,
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private pacienteService: PacienteService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.construirFormulario();
    this.obterConsultas();
  }

  private construirFormulario(){
    this.form = this.formBuilder.group({
      idPaciente: [0],
    });
  }

  public buscar(){
    this.consultaService.obterConsultasPorPaciente(this.form.value.idPaciente).subscribe(
      response => {
        this.consultas = response;
      }
    );
  }

  public limpar(){
    this.obterConsultas();
  }

  private obterConsultas() {
    this.consultaService.obterConsultas().subscribe(
      response => {
        this.consultas = response;
        this.obterPacientes();
      },
      error => {
        if (error.status == 406)
          this.consultas = null;
      }
    );
  }

  private obterPacientes(){
    this.pacienteService.obter().subscribe(
      response => {
        this.pacientes = response;
      }
    );
  }

  public formatarDataConsulta(data: string): string {
    if (data) {
      return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm');
    }

    return null;
  }

  public finalizar(consulta: Consulta) {
    this.consultaService.finalizarConsulta(consulta.id).subscribe(
      response => {
        this.obterConsultas();
      });
  }

  public cancelar(consulta: Consulta) {
    this.consultaService.cancelarConsulta(consulta.id).subscribe(
      response => {
        this.obterConsultas();
      }
    );
  }

  public abrirModal() {
    const modalRef = this.modalService.open(AdicionarConsultaComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.result.then(result => {
      this.obterConsultas();
    });
  }

}
