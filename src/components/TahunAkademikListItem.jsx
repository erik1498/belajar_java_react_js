import AksiTombol from "./Aksi";

export default function TahunAKademikListItem({data, number, hapusTahunAkademik}){
    return <>
        <tr>
            <td>{number + 1}</td>
            <td>{data.tahun}</td>
            <td>{data.semester}</td>
            <td>
                <AksiTombol uuid={data.uuid} hapusTahunAkademik={hapusTahunAkademik}/>
            </td>
        </tr>
    </>
}