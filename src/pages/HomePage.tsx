import { useState } from "react";
import CampoData from "../components/CampoData";
import FormApontamento from "../components/FormApontamento";
import ListaTicketDiario from "../components/ListaTicketsDiarios";
import { Apontamento } from "../types/Apontamento";

export default function HomePage(){
    const [apontamentos, setApontamentos] = useState<Apontamento[]>([]);
    const [apontamento, setApontamento] = useState<Apontamento>({id:1, data:'', entrada:'', saida:'', saldo:0, saldoFormatado:''});
    const [data, setData] = useState<string>('');    

    function handleSave(){
        //let id:number|undefined = apontamentos && apontamentos.length > 0 ? apontamentos.at(-1)?.id + 1: 0;
        let novoapontamento:Apontamento = {...apontamento, data:data};
        setApontamentos([...apontamentos, novoapontamento]);
        console.log(apontamento);
    }

    return(
        <>
        <div className="container">
            <CampoData data={data} setData={setData}/>
                            
            <FormApontamento apontamento={apontamento} setApontamento={setApontamento}/>
                

            {
                apontamento
                ?
                <div className="row gy-3 mt-3">
                    <div className="col-12 text-end">
                        <div className="btn-group" role="group" aria-label="Botões de Cancelar e Salvar apontamento">
                            <button type="button" onClick={ () => setApontamento({id:1, data:'', entrada:'', saida:'', saldo:0, saldoFormatado:''}) } className="btn btn-danger">Cancelar</button>
                            <button type="button" onClick={ () => handleSave() } className="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
                :
                <></>
            }

        </div>
        <div className="container mt-5">
            <ListaTicketDiario apontamentos={apontamentos}/>
        </div>

        </>
    )
}