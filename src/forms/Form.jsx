import { useDispatch } from "react-redux";
import { updateFullName,updateMobileNo,reset} from "../store";
import { useState } from "react";

export default function Froms (){
    const [FullName,setFullName] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    let dispatch = useDispatch();
    return(
        <>
        <div className="container">
            <h2>FORMS</h2>
            <div >
                <input type="text"   placeholder="enter fullName"
                    value={FullName} 
                    onChange={(e)=>{
                        let data = e.target.value
                        setFullName(data)
                    }}></input>
                <button 
                onClick={()=>{
                    dispatch(updateFullName(FullName));
                    setFullName("");
                }}> submit</button>
            </div>
            <div >
                    <input type="number"   placeholder="enter MobileNo"
                    value={mobileNo} 
                    onChange={(e)=>{
                        let data = e.target.value
                        setMobileNo(data)
                    }}></input>
                <button  
                onClick={()=>{
                    dispatch(updateMobileNo(mobileNo));
                    setMobileNo("");
                }}>submit</button>
            </div>
            <div>
            <button  
                onClick={()=>{
                    dispatch(reset());
                }}>RESET</button></div>
        </div>
        </>
    )
}