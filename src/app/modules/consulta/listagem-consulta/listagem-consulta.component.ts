import { Component, OnInit } from '@angular/core';
import { Consulta } from '@shared/models';
import { ConsultaService } from '@shared/providers';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarConsultaComponent } from '../adicionar-consulta/adicionar-consulta.component';

@Component({
  selector: 'app-listagem-consulta',
  templateUrl: './listagem-consulta.component.html',
  styleUrls: ['./listagem-consulta.component.css']
})
export class ListagemConsultaComponent implements OnInit {

  public consultas: Array<Consulta>;

  constructor(
    private consultaService: ConsultaService,
    private datePipe: DatePipe,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.obterConsultas();
  }

  private obterConsultas() {
    this.consultaService.obterConsultas().subscribe(
      response => {
        this.consultas = response;
      },
      error => {
        if (error.status == 406)
          this.consultas = null;
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
    this.consultaService.finalizarConsulta(consulta.id).toPromise();
    this.obterConsultas();
  }

  public cancelar(consulta: Consulta) {
    this.consultaService.cancelarConsulta(consulta.id).toPromise();
    this.obterConsultas();
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
