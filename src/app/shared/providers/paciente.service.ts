import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '@shared/models';
import { environment } from '@enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {

  private API_URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public obterPacientes(): Observable<Paciente[]> {
    return this.http.get<Array<Paciente>>(`${this.API_URL}pacientes`);
  }

}