import { NavLink } from "react-router-dom"

export default function TahunAkademik() {
    return <>
        <div className="columns p-4">
            <div className="column">
                <h1 className="title">Tahun Akademik</h1>
                <h2 className="subtitle">Daftar Tahun Akademik</h2>
            </div>
        </div>
        <div className="columns p-4">
            <div className="column">
                <NavLink to={"/"} className={"button is-success"}>Home</NavLink>
            </div>
        </div>
        <div className="colums">
            <div className="column">
                <table className="table is-fullwidth">
                    <thead>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th>Qualification or relegation</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                            </td>
                            <td>38</td>
                            <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
        
    </>
}