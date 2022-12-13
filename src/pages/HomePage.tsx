import { useState } from "react";
import CampoData from "../components/CampoData";
import FormApontamento from "../components/FormApontamento";
import ListaTicketDiario from "../components/ListaTicketsDiarios";
import { Apontamento } from "../types/Apontamento";
import { ApontamentosDia } from "../types/ApotamentosDia";

export default function HomePage(){
    const [apontamentosDia, setApontamentosDia] = useState<ApontamentosDia[]>([]);
    const [apontamentos, setApontamentos] = useState<Apontamento[]>([]);
    const [data, setData] = useState<string>('');

    function handleCreateFormApontamento():void{
        let id:number|undefined = apontamentos.length? apontamentos.at(-1)?.id : 0;
        setApontamentos([...apontamentos, 
            {id: typeof(id)!=='undefined' ? id+1 : 0,
            data:'', 
            entrada:'', 
            saida:'', 
            saldo: 0, 
            saldoFormatado:''}
        ]);
    }

    function handleSave(){
        let id:number|undefined = apontamentosDia.length? apontamentosDia.at(-1)?.id : 0;
        setApontamentosDia([...apontamentosDia, 
            {id: typeof(id)!=='undefined' ? id+1 : 0,
            data: data, 
            apontamentos: apontamentos}
        ]);
        console.log(apontamentosDia)
    }

    function handleSetApontamento(apontamento:Apontamento){
        setApontamentos(apontamentos.map(ap =>                 
                ap.id === apontamento.id ? apontamento: ap
            )
        );
    }

    return(
        <>
        <div className="container">
            <CampoData data={data} setData={setData} heandleCreateFormApontamento={handleCreateFormApontamento}/>
            {
                apontamentos.map((c) => (                
                    <FormApontamento apontamento={c} handleSetApontamento={handleSetApontamento} key={c.id}/>
                ))
            }

            {
                apontamentos.length
                ?
                <div className="row gy-3 mt-3">
                    <div className="col-12 text-end">
                        <div className="btn-group" role="group" aria-label="Botões de Cancelar e Salvar apontamento">
                            <button type="button" onClick={ () => setApontamentos([]) } className="btn btn-danger">Cancelar</button>
                            <button type="button" onClick={ () => handleSave() } className="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
                :
                <></>
            }

        </div>
        <div className="container mt-5">
            <ListaTicketDiario apontamentosDia={apontamentosDia}/>
        </div>

        </>
    )
}