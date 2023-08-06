import { useState, useEffect } from 'react'
import './Home.css'
import TahunAKademikListItem from '../components/TahunAkademikListItem'
import axios from 'axios'

export default function Home(){
    const [tahunAkademik, setTahunAkademik] = useState([])
    
    useEffect(() => {
        getTahunAkademikDataList()
    }, [])

    const getTahunAkademikDataList = async () => {
        axios.get("http://localhost:8080/tahun_akademik/all")
        .then((res) => {
            setTahunAkademik(res.data.data)
        })
    }


    const hapusTahunAkademik = (uuid) => {
        axios.delete("http://localhost:8080/tahun_akademik?uuid=" + uuid)
        .then((res) => {
            getTahunAkademikDataList()
        })
    }

    return <>
        <h2>Belajar Java</h2>
        <table cellPadding={0} cellSpacing={0} width={"100%"} border={1} className="text-center">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Tahun Akademik</td>
                    <td>Semester</td>
                    <td>Aksi</td>
                </tr>
            </thead>
            <tbody>
                {
                    tahunAkademik.map(function (data, i) {
                        return <TahunAKademikListItem data={data} number={i} key={i} hapusTahunAkademik={hapusTahunAkademik} />
                    })
                }
            </tbody>
        </table>
    </>
}