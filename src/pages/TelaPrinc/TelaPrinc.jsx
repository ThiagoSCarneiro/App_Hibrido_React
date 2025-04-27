import AppBar from "../../components/AppBar/appBar"

export default function TelaPrinc(){
    const carros = ["Ferrari","Bugatti","Fiat",]
    return(
        <>
            <AppBar></AppBar>
            <ul>
                {carros.map((carros) => {
                    return(
                        <li>{carros}</li>
                    )
                })}
            </ul>
        </>
    )
}