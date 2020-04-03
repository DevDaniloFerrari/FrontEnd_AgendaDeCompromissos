import { Pessoa } from './interfaces';

export class Paciente implements Pessoa{
    id: number;
    nome: string;
    nascimento: Date;
}