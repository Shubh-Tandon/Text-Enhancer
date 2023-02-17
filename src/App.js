import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert'
import About from './components/About'


import {
 HashRouter as BrowserRouter,
   Switch, 
   Route,
  Link,
  Routes
  } from "react-router-dom"




function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  


  const [alert, setAlert] = useState(null);
  

  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}




  return (
    <>

    <BrowserRouter>
   <Navbar title="TextEnhancer" mode= {mode} />
   <Alert alert= {alert}/>
    <div className="container my-3">
   <Routes>
      
      <Route exact path="/about" element= { <About  mode= {mode} />} /> 
      { <Route exact path="/" element= { <Textform showAlert= {showAlert} heading="Try TextEnhancer- Word Counter ,Character Counter, Copy Text" mode= {mode} /> }/>}

   
       </Routes> 

          
        </div>

    </BrowserRouter>
      </>

  );
          }

export default App;



