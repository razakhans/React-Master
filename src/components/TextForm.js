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
       
        navigator.clipboard.writeText(text);
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
  style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
  color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClick}>Convert to lovercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ClickforClear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
       </div>
    <div className="container my-3"  style= {{color: props.mode==='dark'?'white':'#042743'}}>
       <h2>Your Text Summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </> 
  )
}

