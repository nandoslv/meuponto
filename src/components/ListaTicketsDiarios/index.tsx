import { Apontamento } from "../../types/Apontamento"
import { ApontamentosDia } from "../../types/ApotamentosDia";

interface Props{
    apontamentos: Apontamento[]
}

export default function ListaTicketDiario({apontamentos}:Props){

    const apontamentosAgrupados:ApontamentosDia[] = apontamentos.reduce((apontamentosAgrupados:any, atual:any) => {
        apontamentosAgrupados[atual.data] = apontamentosAgrupados[atual.data] || [];
        apontamentosAgrupados[atual.data].push(atual);
        return apontamentosAgrupados;
        }, {}
    );


    return(
        <>
      {
        apontamentosAgrupados.length
        ?
        apontamentosAgrupados.map((apDia, indexDia) =>
            (
              <div className="list-group mb-3" key={apDia.data}>
                <div className="list-group-item list-group-item-action" aria-current="true">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">{apDia.data}</h6>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="h6">Entrada</div>
                    <div className="h6">Saída</div>
                    <div className="h6">Saldo</div>
                  </div>
                  <hr className="m-0" />
                  {
                    apDia.apontamentos.map((ap, indexAp) => {
                      //setSaldoDiario(saldoDiario+ap.saldo);
                      return (
                        <div className="d-flex justify-content-around" key={indexAp}>
                          <div><small>{ap.entrada}</small></div>
                          <div><small>{ap.saida}</small></div>
                          <div><small><strong>{ap.saldoFormatado}</strong></small></div>
                        </div>
                      );
                    }
                    )
                  }
                  <hr className="m-0" />
                  <div className="d-flex justify-content-around">
                    <div></div>
                    <div></div>
                    <p className="f-6">Saldo do dia: <strong>{/*ConvertFullHour(sald*oDiario)*/}</strong></p>
                  </div>
                </div>
              </div>
            ))
          : 'Nenhum apontamento encontrado!'
      }
    </>
    )
}