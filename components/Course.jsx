import { useState } from "react";
import'../components/course.css'

const Course = () => {


const [cn,setcn]=useState("");
const [d,setd]=useState("");
const [f,setf]=useState("");
const [error,seterror]=useState("")

const readcn =(event) =>{
  event.preventDefault();
setcn(event.target.value);

    console.log(cn);

}

const readd =(event) =>{
  event.preventDefault();
    setd(event.target.value);
    console.log(d);


}
const readf =(event) =>{
  
  event.preventDefault();
    setf(event.target.value);
    console.log(f);

}

const checkerror =(event) =>{
  event.preventDefault();
    if(cn.trim()==='' || d.trim() ===''|| f.trim() ==='')
    {
        seterror(true);
        return;
    }
}
    const readdata =(event) =>{
      event.preventDefault();
     const myobj ={
      cn:cn,
    dr:d,
    fee:f,
     }
  console.log(myobj);

  
  fetch(
    "https://ajp1-6cd5a-default-rtdb.firebaseio.com/Bli.json",
    {
      method: "POST",
      body: JSON.stringify(myobj),
      headers: {
        "Content-Type": "application/json"
      },
    }
  );
    }

    const viewdata=(event) => {
      event.preventDefault();
  fetch("https://ajp1-6cd5a-default-rtdb.firebaseio.com/Bli.json").then((response) => {
    console.log(response);
    return response.json(); 

  }).then((data) => {
    console.log(data);
  })
}

function snapshotToArray(snapshot) {
  const array = [];

  Object.keys(snapshot).forEach((key) => {
    array.push({ [key]: snapshot[key] });
  });

  return array;
}
  return (
    <div>
      <u><h1>Course Registration</h1></u>
      
      Course Name: <input type="textbox" className="Name" placeholder="Name" onChange={readcn}/><br></br><br></br>
      Duration: <input type="textbox" className="Text" placeholder="Duration" onChange={readd}/><br></br><br></br>
      Fee Amount: <input type="NUMBER" className="Date" placeholder="12345" onChange={readf}/><br></br><br></br>
      <button className="b1" type="submit" onClick={readdata}><b>save</b></button>
      {error && 'Error occurs'}
      <button className="b2"  type="submit" onClick={viewdata}><b>view</b></button>
      {snapshotToArray}
      
    </div>
  )
}

export default Course
