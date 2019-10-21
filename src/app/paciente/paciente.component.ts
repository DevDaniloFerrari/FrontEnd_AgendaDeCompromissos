import { Component, OnInit, Injectable } from '@angular/core';
import { PacienteService } from '../shared/paciente/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

@Injectable()
export class PacienteComponent implements OnInit {

  //public pacientes = ['dandan','linlin'];

  public pacientes: Paciente[];

  constructor(private _pacienteService: PacienteService) { 
    
  }

  ngOnInit() {
    this._pacienteService.obterPacientes()
        .subscribe(data => this.pacientes = data);
  }

}
