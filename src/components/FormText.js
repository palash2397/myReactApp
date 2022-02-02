import React, {useState} from 'react';

const FormText = (props) => {
    const[text, setText] = useState("");
    const Upclicked = ()=>{
        setText(text.toUpperCase())
    }
    const Downclicked = ()=>{
        setText(text.toLowerCase())
    }
    const Clearclicked = ()=>{
      setText(" ")
    }
        

    const OnChange = (event)=>{
        setText(event.target.value);
     
    }

  

   
    return (
        <>
         <div className='container' style={{color: props.mode === "light" ? "black" : 'white'}} >
            <h3>{props.heading}</h3>
                <div className="mb-3 ">
                    <textarea className="form-control" onChange={OnChange}  style={{backgroundColor: props.mode === 'dark' ? '#21201c': 'white', color: props.mode=== "light"?"black":"white"}} value ={text}id="exampleFormControlTextarea1" rows="8">text</textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={Upclicked}>upperCase</button>
                <button className="btn btn-primary mx-1" onClick={Downclicked}>lowerCase</button>
                <button className="btn btn-primary mx-1" onClick={Clearclicked}>clearText</button>

            </div>
            <div className="container my-2" style={{color: props.mode=== "light"?"black":"white"}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
};
                   
                   

export default FormText;
