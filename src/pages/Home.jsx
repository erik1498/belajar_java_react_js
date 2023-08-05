import { useState } from 'react'
import './Home.css'
import TahunAKademikListItem from '../components/TahunAkademikListItem'
import { useEffect } from 'react'
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
    return <>
        <h2>Belajar Java</h2>
        <table cellPadding={0} cellSpacing={0} width={"100%"} border={1} className="text-center">
            <thead>
                <tr>
                    <td>Tahun Akademik</td>
                    <td>Semester</td>
                </tr>
            </thead>
            <tbody>
                {
                    tahunAkademik.map(function (data, i) {
                        return <TahunAKademikListItem data={data} key={i} />
                    })
                }
            </tbody>
        </table>
    </>
}