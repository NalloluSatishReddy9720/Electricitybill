import { useEffect,useState } from "react"
import axios from "axios";
const Get=()=>{
    const [arr,setArr]=useState([]);

    const getData=async ()=>{
        const res=await axios.get(`http://localhost:9000/get`);
        const {data}=res;
        setArr(data);
    }
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
        <h1>DISPLAY ELECTRICITY BILL CONSUMER DETAILS</h1>
             <div className="container mt-5">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>CID</th>
                            <th>CNAME</th>
                            <th>CURRENT_READING</th>
                            <th>PRIVIOUS_READING</th>
                            <th>UNITS</th>
                            <th>SERVICE_CHARGES</th>
                            <th>TOTAL_BILL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{element.cid}</td>
                                        <td>{element.name}</td>
                                        <td>{element.current_reading}</td>
                                        <td>{element.previous_reading}</td>
                                        <td>{element.units}</td>
                                        <td>{element.service_charges}</td>
                                        <td>{element.total_bill}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
             </div>
        </>
    )
}
export default Get;