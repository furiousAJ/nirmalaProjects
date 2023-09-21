import { useState } from "react";


const Customer = () => {

const [n,setn]=useState("");
const [a,seta]=useState("");
const [phn,setphn]=useState("");
const [ad,setad]=useState("");
const [pd,setpd]=useState("");
const [error,seterror]=useState("")

const readn =(event) =>{
setn(event.target.value);

    console.log(n);

}

const reada =(event) =>{
    seta(event.target.value);
    console.log(a);


}
const readphn =(event) =>{
    setphn(event.target.value);
    console.log(phn);

}

const readad =(event) =>{
    setad(event.target.value);
    console.log(ad);

}
const readpd =(event) =>{
    setpd(event.target.value);
    console.log(pd);

}

const checkerror =(event) =>{
    if(n.trim()==='' || a.trim() ===''|| phn.trim() ===''|| ad.trim() ===''|| pd.trim() ==='')
    {
        seterror(true);
        return;
    }
}

 const myobj ={
    name:n,
    age:a,
    phn:phn,
    address:ad,
    product:pd
 }

  return (
    <div>
      <u><h1>Customer Details</h1></u>
      
      Name: <input type="textbox" onChange={readn}/><br></br><br></br>
      Age: <input type="NUMBER" onChange={reada}/><br></br><br></br>
      Phone: <input type="NUMBER" onChange={readphn}/><br></br><br></br>
      Address: <input type="textbox" onChange={readad}/><br></br><br></br>
      Product: <input type="textbox" onChange={readpd}/><br></br><br></br>
      <button type="submit" onClick={checkerror}><b>save</b></button><br></br>
      {error && 'Error occurs'}
    </div>
  )
}

export default Customer
