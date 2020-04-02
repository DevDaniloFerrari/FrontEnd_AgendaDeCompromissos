import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  constructor (
    private http: HttpClient
  ) {}

  obterPacientes(): Observable<Paciente[]>{
      return this.http.get<Paciente[]>('https://localhost:44315/api/pacientes');
  }

}