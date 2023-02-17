import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  
  const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
  };

  const handleRevStrClick = () => {
         let newText = "";
        for(let i = text.length-1; i>=0 ; i--){
          newText += text[i]; 
        }
        setText(newText);
        props.showAlert("String Reversed", "success");
  };
  const handleCopyClick = () => {
      var text = document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
        }
  
    
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value); //here if we further type any value, it will help to change it
  };
  

  const [text, setText] = useState("")
  // text= "New Text";   Wrong way to change the text
  // setText("New Text"); Correct way to change the text
  return (
    <>
      <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="8"  style= {{backgroundColor: props.mode==='light'?'white':'#13465e', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          convert to Lower Case
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRevStrClick}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      
      </div>
      <div className="container my-3"  style= {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text :"Nothing to Preview" }</p>
      </div>
    </>
  )
}
  
