import { useState } from "react";


const Course = () => {


      const [cn,setcn]=useState("");
const [d,setd]=useState("");
const [f,setf]=useState("");
const [error,seterror]=useState("")
const readcn =(event) =>{
setcn(event.target.value);

    console.log(cn);

}

const readd =(event) =>{
    setd(event.target.value);
    console.log(d);


}
const readf =(event) =>{
    setf(event.target.value);
    console.log(f);

}

const checkerror =(event) =>{
    if(cn.trim()==='' || d.trim() ===''|| f.trim() ==='')
    {
        seterror(true);
        return;
    }
}

 const myobj ={
    cn:cn,
    dr:d,
    fee:f,
 }

  return (
    <div>
      <u><h1>Course Registration</h1></u>
      
      Course Name: <input type="textbox" onChange={readcn}/><br></br><br></br>
      Duration: <input type="textbox" onChange={readd}/><br></br><br></br>
      Fee Amount: <input type="NUMBER" onChange={readf}/><br></br><br></br>
      <button type="submit" onClick={checkerror}><b>save</b></button><br></br>
      {error && 'Error occurs'}
    </div>
  )
}

export default Course
