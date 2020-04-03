import { Paciente, Consulta } from '@shared/models';
import { Component, OnInit } from '@angular/core';
import { ConsultaService, PacienteService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adicionar-consulta',
  templateUrl: './adicionar-consulta.component.html',
  styleUrls: ['./adicionar-consulta.component.css']
})
export class AdicionarConsultaComponent implements OnInit {

  public form: FormGroup;
  public pacientes: Array<Paciente>;

  constructor(
    public activeModal: NgbActiveModal,
    private consultaService: ConsultaService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.construirFormulario();
    this.obterPacientes();
  }

  private construirFormulario() {
    this.form = this.formBuilder.group({
      id: [0],
      idPaciente: [0, Validators.required],
      inicio: [null, Validators.required],
      fim: [null, Validators.required],
      observacoes: [null, Validators.required]
    });
  }

  public obterPacientes(){
    this.pacienteService.obter().subscribe(
      response => {
        this.pacientes = response;
      }
    );
  }

  public fechar() {
    this.activeModal.close(false);
  }

  public inserir() {
    if(!this.form.invalid){
      var consulta = this.obterConsulta();
      this.consultaService.inserir(consulta).subscribe(
        response => {
          this.toastr.success('Consulta adicionada com sucesso!');
          this.fechar();
        },
        error => {
          if(error.error == 'Exception of type \'api.agenda.de.compromissos.Exceptions.ConsultasNoMesmoPeriodoException\' was thrown.')
            this.toastr.warning('Já existe uma consulta nesse período!');
        }
      );
    }else{
      this.toastr.warning('Preencha os campos necessários!');
    }
  }

  private obterConsulta(): Consulta{
    var consulta = new Consulta();

    consulta = this.form.value;

    var paciente = new Paciente();
    paciente.id = this.form.value.idPaciente;

    consulta.paciente = paciente;

    return consulta;
  }

}
