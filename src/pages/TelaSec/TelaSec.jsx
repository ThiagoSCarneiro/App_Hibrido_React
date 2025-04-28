import { Scanner } from "@yudiel/react-qr-scanner";
import AppBar from "../../components/appBar/appBar"

export default function TelaSec(){
    return(
        <>
            <div>
                <Scanner onScan={(results) => {console.log(results)}}></Scanner>
            </div>
        </>
    )
}