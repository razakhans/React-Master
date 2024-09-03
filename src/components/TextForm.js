import React, {useState} from 'react'

export default function TextForm (props)  {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");   
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");   
    }

    const ClickforClear = ()=>{
        //console.log("Uppercase was clicked");
        let newText =  '';
        setText(newText)
        props.showAlert("Text is Clear!", "success"); 
    }
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState(' ');
  return (
    <>
   
    <div className= "container" style= {{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 >{props.heading}</h1>  
<div className="mb-3">
  <label for="myBox" className="form-label">{props.text}</label>
  <textarea className="form-control"  value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='dark'?'grey':'white',
  color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to lovercase</button>
<button className="btn btn-primary mx-2" onClick={ClickforClear}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       </div>
    <div className="container my-3"  style= {{color: props.mode==='dark'?'white':'#042743'}}>
       <h2>Your Text Summary</h2>
       <p>{text.split(" ").length} words and {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </> 
  )
}

