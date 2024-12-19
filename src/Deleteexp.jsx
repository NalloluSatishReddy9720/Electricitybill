import axios from 'axios';
import { useRef,useState } from 'react';

const Deleteexp=()=>
{
    const[num,setNum]=useState({});
    const ref1=useRef(null);

    const deleteDate=async()=>
    {
        const res=await axios.delete(`http://localhost:9000/delete/${ref1.current.value}`);
        const {status}=res;
        setNum(status);
    }
    const delete_data=()=>
    {
        deleteDate();
    }
    return(<>
        <div style={{textAlign:"center", border:"double", borderColor:"red", }}>
            <input type="text" ref={ref1}></input><br></br><br></br>
            <button onClick={delete_data}>Delete Record</button>
            <p>{JSON.stringify(num)}</p>
        </div>
    </>);
}
export default Deleteexp;