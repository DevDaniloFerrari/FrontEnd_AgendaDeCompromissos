import { Injectable } from '@angular/core';
import { environment } from '@enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private API_URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public obterConsultasPorPaciente(idPaciente: number): Observable<Array<Consulta>> {
    return this.http.get<Array<Consulta>>(`${this.API_URL}consultas/pacientes/${idPaciente}`);
  }

  public obterConsultas(): Observable<Array<Consulta>> {
    return this.http.get<Array<Consulta>>(`${this.API_URL}consultas`);
  }

  public finalizarConsulta(idConsulta: number): Observable<number>{
    return this.http.delete<number>(`${this.API_URL}consultas/finalizacao/${idConsulta}`);
  }

  public cancelarConsulta(idConsulta: number): Observable<number>{
    return this.http.delete<number>(`${this.API_URL}consultas/cancelamento/${idConsulta}`);
  }

  public inserir(consulta: Consulta): Observable<Consulta>{
    return this.http.post<Consulta>(`${this.API_URL}consultas`, consulta);
  }
}
