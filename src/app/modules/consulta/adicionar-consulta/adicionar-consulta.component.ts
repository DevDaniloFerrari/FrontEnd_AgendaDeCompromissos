import { Paciente } from '@shared/models';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '@shared/providers';
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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.construirFormulario();
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
    this.pacientes
  }

  public fechar() {
    this.activeModal.close(false);
  }

  public inserir() {

  }

}
