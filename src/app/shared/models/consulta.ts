import { Paciente, Situacao } from '@shared/models';

export class Consulta {
    id: number;
    paciente: Paciente;
    situacao: Situacao;
    inicio: Date;
    fim: Date;
    observacoes: string;
}