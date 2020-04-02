import { Component, OnInit, Injectable } from '@angular/core';
import { PacienteService } from '@shared/providers';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

@Injectable()
export class PacienteComponent implements OnInit {

  //public pacientes = ['dandan','linlin'];


  constructor(private pacienteService: PacienteService) { 
    
  }

  ngOnInit() {
  }

}
