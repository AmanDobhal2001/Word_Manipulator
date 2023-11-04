
import './App.css';
import Textarea from './components/Textarea'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { useState } from 'react';
function App() {
  const[mode,setMode]=useState('light');
  
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#a9a9a9';
      manipulateAlert('Success...',' Dark mode has been enabled.');
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      manipulateAlert('Success...',' Light mode has been enabled.');
    }
  }
 
  const[alert,setalert]=useState(null);
  
  const manipulateAlert= (typ,msg)=>{
    setalert({type : typ,
    message : msg})
    setTimeout(() => {
      setalert(null);
    }, 1500)
    
  }
  
  return (
    <>
      <Navbar aboutus="About" title="Word Manipulator" mode={mode} toggleMode={toggleMode}/>
      
      <Alert alert={alert}/>
      
      <div className="container my-3">
      <Textarea manipulateAlert={manipulateAlert}  heading="ENETER TEXT HERE" mode={mode}/>
      </div>
    </>
  );
}

export default App;
