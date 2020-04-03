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

  public obter(): Observable<Array<Paciente>> {
    return this.http.get<Array<Paciente>>(`${this.API_URL}pacientes`);
  }

  public alterar(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.API_URL}pacientes`, paciente);
  }

  public inserir(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.API_URL}pacientes`, paciente);
  }

  public deletar(idPaciente: number): Observable<Paciente> {
    return this.http.delete<Paciente>(`${this.API_URL}pacientes/${idPaciente}`);
  }

}