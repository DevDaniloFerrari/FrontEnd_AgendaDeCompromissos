import { Paciente } from '@shared/models';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.construirFormulario();
  }

  private construirFormulario() {
    this.form = this.formBuilder.group({
      id: [0],
      nome: [null, Validators.required],
      nascimento: [null, Validators.required]
    });
  }


  public fechar() {
    this.activeModal.close(false);
  }

  public inserir() {

  }

}
