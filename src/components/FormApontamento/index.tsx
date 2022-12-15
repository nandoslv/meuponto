import React from "react"
import { Apontamento } from "../../types/Apontamento"

interface Props {
    apontamento: Apontamento,
    setApontamento: React.Dispatch<React.SetStateAction<Apontamento>>,
}

export default function FormApontamento({ apontamento, setApontamento }: Props) {

    return (
        <>
            <div className="row gy-3 mt-3">
                <div className="col-12">
                    <div className="input-group">
                        <div className="form-floating">
                            <input type="time"
                                onChange={(e) => (setApontamento({ ...apontamento, entrada: e.target.value }))}
                                className="form-control form-control-sm"
                                id={`entrada-${apontamento.id}`}
                                placeholder="00:00" />
                            <label htmlFor={`entrada-${apontamento.id}`}>
                                Entrada
                            </label>
                        </div>
                        <div className="form-floating">
                            <input type="time"
                                onChange={(e) => (setApontamento({ ...apontamento, saida: e.target.value }))}
                                className="form-control form-control-sm"
                                id={`saida-${apontamento.id}`}
                                placeholder="00:00" />
                            <label htmlFor={`saida-${apontamento.id}`}>Saída</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}