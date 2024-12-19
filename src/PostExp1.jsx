import axios from "axios";
import { useRef,useState } from "react";

const PostExp1=()=>
{
    const[res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);

    const post_data=()=>
    {
        postEx();
    }

    const postEx=async()=>
    {
        const res=await axios.post("http://localhost:9000/save",{"name":ref1.current.value,
            "current_reading":ref2.current.value,
            "previous_reading":ref3.current.value});
            const {data}=res;
            setRes(data);
    }
    return(<>
        Consumer Name:<input type="text" ref={ref1}></input><p></p>
        Current Reading:<input type="text" ref={ref2}></input><p></p>
        Previous Reading:<input type="text" ref={ref3}></input><p></p>
        <button onClick={post_data}>Post</button><p></p>
        <p>{JSON.stringify(res)}</p>
    </>);
}
export default PostExp1;