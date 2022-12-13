interface Props{
    data: string,
    setData: React.Dispatch<React.SetStateAction<string>>,
    heandleCreateFormApontamento:(data:string) => void
}

export default function CampoData({heandleCreateFormApontamento, setData, data}:Props) {

    function handleApotamento(){
        if(!data)
            alert('Informe uma data para o apontamento');
        else
            heandleCreateFormApontamento(data);
    }

    return (
        <div className="input-group">
            <input onChange={(e) => setData(e.target.value)} className="form-control" type="date" /> 
            <button onClick={(e) => handleApotamento()} className="btn btn-secondary">Novo</button>
        </div>
    )
}