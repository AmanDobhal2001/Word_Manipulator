import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {
 
  const[text,setText]=useState('');
  //const[btnText,setBtnText]=useState('SWITCH TO DARK MODE')
  /*const[textcol,setTextCol]=useState({
    backgroundColor : 'white',
    color : 'black',
    borderRadius:12,
    borderWidth:5,
    margin:12
  }) */
 
  const convertup=()=>{
        setText(text.toUpperCase());
        props.manipulateAlert('Success...',' Text has been changed to uppercase.');
    }
    
    const convertlo=()=>{
      setText(text.toLowerCase());
      props.manipulateAlert('Success...',' Text has been changed to lowercase.');
  }
   
  const handleOnChange = (event)=>{
        setText(event.target.value);
        console.log("executed");
    }

    /*const toggleColor = ()=>{
      if(textcol.color==='white')
      {
        setTextCol({backgroundColor : 'white',
        color : 'black',
        borderColor:'black',
        borderRadius:12,
        borderWidth:5,
        margin:12
        })
        setBtnText('SWITCH TO DARK MODE') 
      }
      else if(textcol.color==='black')
      {
        setTextCol({backgroundColor : 'black',
        color : 'white',
        borderColor:'lightgreen',
        borderRadius:12,
        borderWidth:5,
        margin:12}) 
        setBtnText('SWITCH TO LIGHT MODE')
      }
    }*/

    const handleCopy = ()=>{
      
      navigator.clipboard.writeText(text);
      props.manipulateAlert('Success...',' Text has been copied to clipboard.');
    }

    const handleSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.manipulateAlert('Success...',' Extra spaces has been deleted.');
    }

    const handleClear = () =>{
      setText('');
      props.manipulateAlert('Success...',' Text has been cleared.');
    }

  return (
    <>
    <div>
        <h2 style={{margin : '55px 0px 5px 0px', color : props.mode==='light'?'black':'white'}}>{props.heading}</h2>
      <textarea id="myBox" style={{borderRadius : 12,borderWidth : 5,padding : 12,color : props.mode==='light'?'black':'white' , borderColor : 'lightblue',backgroundColor: props.mode==='light'?'white':'rgb(154 148 182)'}} onChange={handleOnChange} rows="7" cols="125"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={convertup}>Uppercase</button>
    <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={convertlo}>Lowercase</button>
    <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleCopy}>Copy</button>
    <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handleClear}>Clear Text</button>
    <div style={{margin:60}}>
      <h3 style={{color : props.mode==='light'?'black':'white'}}>SUMMARY OF TEXT ENTERED</h3>
      <div style={{margin:35}}>
        <h3 className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>Preview</h3>
        <div style={{padding : 12,borderRadius : 6,backgroundColor : props.mode==='light'?'#98e0be':'grey',color : props.mode==='light'?'black':'white'}}>{text}</div>
      </div>
      <div style={{color : props.mode==='light'?'black':'white'}}>
       <>NUMBER OF CHARACTERS {text.length} AND NUMBER OF WORDS {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</>
      </div>
    </div>
    </>
  )
}

Textarea.propTypes={
    heading: PropTypes.string
}

Textarea.defaultProps={
    heading: "ENTER HERE"
}