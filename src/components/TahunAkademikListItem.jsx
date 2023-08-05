export default function TahunAKademikListItem({data}){
    return <>
        <tr>
            <td>{data.tahun}</td>
            <td>{data.semester}</td>
        </tr>
    </>
}