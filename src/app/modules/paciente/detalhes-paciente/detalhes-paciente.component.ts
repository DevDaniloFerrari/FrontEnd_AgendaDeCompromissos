import { PacienteService, ConsultaService } from '@shared/providers';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Paciente, Consulta } from '@shared/models';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.css']
})
export class DetalhesPacienteComponent implements OnInit {

  @Input() paciente: Paciente;

  public consultas: Array<Consulta>;
  public form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private datePipe: DatePipe,
    private consultaService: ConsultaService,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.obterConsultas();
    this.construirFormulario();
    this.preencherFormulario();
  }

  private construirFormulario() {
    this.form = this.formBuilder.group({
      id: [null, Validators.required],
      nome: [null, Validators.required],
      nascimento: [null, Validators.required]
    });
  }

  private preencherFormulario() {
    this.form.patchValue(this.paciente);
    this.form.controls.nascimento.setValue(this.datePipe.transform(this.paciente.nascimento, 'yyyy-MM-dd'))
  }

  private obterConsultas() {
    this.consultaService.obterConsultasPorPaciente(this.paciente.id).subscribe(
      response => {
        this.consultas = response;
      },
      error => {
        if (error.status == 406)
          this.consultas = null;
      }
    );
  }

  public fechar() {
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

  public editar() {
    if(!this.form.invalid){
      this.pacienteService.alterar(this.form.value).subscribe(
        response => {
          this.toastr.success('Usuário editado com sucesso!');
        }
      );
    }else{
      this.toastr.warning('Preencha os campos necessários!');
    }
  }

}
