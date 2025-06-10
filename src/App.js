import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Alerts from './Components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
function App() {
  const [mode, setMode] = useState(`light`); // weather dark mood is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === `light`){
      setMode(`dark`);
      document.body.style.backgroundColor = `black`;
      showAlert("Dark mode has been enabled", "success");
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
    }
  }
  const greenMode = () =>{
    if(mode === `light`){
      setMode(`dark`);
      document.body.style.backgroundColor = `green`;
      showAlert("Green mode has been enabled", "success");
    }else{
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
    }
  }
  const blueMode = () =>{
    if(mode === `light`){
      setMode(`dark`);
      document.body.style.backgroundColor = `#339cff`;
      showAlert("Green mode has been enabled", "success");
    }else{
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
    }
  }
  return <>
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenMode={greenMode} blueMode={blueMode}/>
  <Alerts alert={alert}/>
  <div className='conatiner my-3'>
    <Switch>
      <Route path='/about'><About/>
     </Route>
     <Route path='/'>
       <TextArea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
     </Route>
    </Switch>
  </div>
    </Router>
  </>
}

export default App;
