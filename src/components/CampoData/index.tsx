interface Props{
    data: string,
    setData: React.Dispatch<React.SetStateAction<string>>
}

export default function CampoData({setData, data}:Props) {

    return (
        <div className="input-group">
            <input value={data} onChange={(e) => setData(e.target.value)} className="form-control" type="date" />
        </div>
    )
}