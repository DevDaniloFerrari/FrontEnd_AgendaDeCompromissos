import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PacienteService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adicionar-paciente',
  templateUrl: './adicionar-paciente.component.html',
  styleUrls: ['./adicionar-paciente.component.css']
})
export class AdicionarPacienteComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
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

  public inserir(){
    if(!this.form.invalid){
      this.pacienteService.inserir(this.form.value).subscribe(
        response => {
          this.toastr.success('Paciente adicionado com sucesso!');
          this.fechar();
        }
      );
    }else{
      this.toastr.warning('Preencha os campos necessários!');
    }
  }

}
