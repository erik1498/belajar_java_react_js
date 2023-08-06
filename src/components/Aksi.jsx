import axios from "axios"

export default function AksiTombol({uuid, hapusTahunAkademik}){    
    
    return <>
        <button>Edit</button>
        <button onClick={() => hapusTahunAkademik(uuid)}>Hapus</button>
    </>
}   