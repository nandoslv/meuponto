import { Apontamento } from "./Apontamento";

export interface ApontamentosDia{
    id:number,
    data: string,
    apontamentos: Apontamento[]
}