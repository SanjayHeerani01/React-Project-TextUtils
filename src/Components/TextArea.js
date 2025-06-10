import React from 'react'
import { useState } from 'react'
import Alerts from './Alerts';

export default function TextArea(props) {
    const handleUpClick = ()=>{
        console.log("You Clicked it.."+ text);
        let newText = text.toUpperCase();
        props.showAlert("converted to uppercase", "success");
        setText(newText);
    }
    const handleupClick = () =>{
      let newText = text.toLowerCase();
      props.showAlert("converted to lowercase", "success");
      setText(newText);
    }
    const handleSpeak = () =>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("text to speech", "success");
    }
    const handleOnChange = (event)=>{
        console.log("Y0u clicked it...");
        const value = event.target.value;
        setText(value);

    }
    const handleonChange = (event)=> {
      console.log("You clicked it..");
      const value = event.target.value;
      setText(value);
    }

    const [text, setText] = useState("Enter text here..");
    // text = "hello write your name here"; // wrong way to set Text
    // setText("Hello dear write here something");
  return (
    <>
    <div>
        <div className='container' style={{color:props.mode === `light`? `black` : `white`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="floatingTextarea" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === `light`? `grey` : `white`}} oNChange={handleonChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleupClick}>Convert to Lowercase</button>
        <button className={'btn btn-primary mx-1'} onClick={handleSpeak}>Speak Text</button>
        </div>
        <div className='container my-2' style={{color:props.mode === `light`? `black` : `white`}}>
          <h1>Your text summary..</h1>
          <p style={{color:props.mode === `light`? `black` : `white`}}>{text.split(" ").length} words and {text.length} characters</p>
          <p style={{color:props.mode === `light`? `black` : `white`}}>{0.008 * text.split(" ").length} Minutes read</p>
          <h2 style={{color:props.mode === `light`? `black` : `white`}}>Preview</h2>
          <p style={{color:props.mode === `light`? `black` : `white`}}>{text.length>0?text:"Enter something to preview here.."}</p>
        </div>
    </div>
    </>
  )
}
