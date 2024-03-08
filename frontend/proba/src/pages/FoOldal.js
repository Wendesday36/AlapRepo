import axios from "axios";
import { useEffect, useState } from "react";
import "../css/fooldal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FoOldal() {
    const [osztaly, setOsztaly] = useState([]);
    const [tevekenyseg, setTevekenyseg] = useState([]);
    const [bejegyzesek, setBejegyzesek] = useState([]);
    const [formData, setFormData] = useState({
        osztaly_id: "",
        tevekenyseg_id: "",

    });
    const handleSubmit = async (e) => {
        e.preventDefault();


        setFormData({
            ...formData,

        });

        try {
            const response = await axios.post(
                "http://localhost:8000/api/bejegyzes",
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error creating bejegyzes:", error);
            console.log("Server response:", error.response.data);
        }
    };
    useEffect(() => {
        const getOsztaly = async () => {
            const apiOsztalyok = await axios.get("http://localhost:8000/api/osztalyok");
            setOsztaly(apiOsztalyok.data);
            console.log(apiOsztalyok.data.osztalyok)
        };
        getOsztaly();
    }, []);
    useEffect(() => {
        const getBejegyzesek = async () => {
            const apiBejegyzesek = await axios.get("http://localhost:8000/api/bejegyzesek");
            setBejegyzesek(apiBejegyzesek.data);
            console.log(apiBejegyzesek.data)
        };
        getBejegyzesek();
    }, []);
    useEffect(() => {
        const getTevekenyseg = async () => {
            const apiTevekenysegek = await axios.get("http://localhost:8000/api/tevekenysegek");
            setTevekenyseg(apiTevekenysegek.data);
            console.log(apiTevekenysegek.data.tevekenysegek)
        };
        getTevekenyseg();
    }, []);
    return (

        <div className="content"><h1>Kizöldítjük a Földet!</h1>
        <div className="valaszt">
             <label > Mit tettél ma a Földért:</label>
            <form className="valasztas" onSubmit={handleSubmit}>
           
                <div>
                    <select
                    style={{ maxWidth: "300px" }}
                    id="cs_azon"
                    name="cs_azon"

                >
                    <option value=""  >
                        Válassz egy csapatot
                    </option>
                    {osztaly.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.osztaly_id}
                        </option>
                    ))}
                </select>
                    <br /></div>

                <div><select
                    style={{ maxWidth: "300px" }}
                    id="cs_azon"
                    name="cs_azon"
                /*  value={formData.cs_azon} */
                /*    onChange={handleChange} */
                >
                    <option value="">
                        Válassz tevekenyseget
                    </option>
                    {tevekenyseg.map((team) => (
                        <option key={team.tevekenyseg_id} value={team.tevekenyseg_id}>
                            {team.tevekenyseg_nev}
                        </option>
                    ))}
                </select></div>
                <button
                    type="submit"
                    className=" text-center"
                    style={{ maxWidth: "100px" ,border:"0.5px solid grey",margin:"2px"}}
                //onClick={handleSubmit}
                >
                    Küld
                </button></form></div>
            <div className="container mt-3">
                <table className="table table-striped">
                    <thead>
                        <th>Osztály</th>
                        <th>Tevékenység</th>
                        <th>Pont</th>
                        <th>Státusz</th>
                    </thead>
                    <tbody>
                        {bejegyzesek.map((item) =>
                            <tr key={item.id}>
                                <td>{item.osztaly_id}</td>
                                <td>{item.tevekenyseg_id}</td>
                                <td>{item.allapot}</td>
                                <td>{item.allapot}</td>
                            </tr>)}
                    </tbody>



                </table>
            </div>
        </div>
    )
}