import React,{Fragment} from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css'
import Alert from './components/Alert';
// import About from './components/About';

// import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [mode, setmode] = useState("light")
  const toggleMode = () => {
    setmode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert('Enabled Light mode', 'primary')
  }
  const toggleMode2 = () => {
    setmode('dark')
    document.body.style.backgroundColor = '#220022';
    document.body.style.color = 'white';
    showAlert('Enabled dark mode', 'success')
  }
  const toggleMode3 = () => {
    setmode('black')
    document.body.style.backgroundColor = '#0f0f0f';
    document.body.style.color = 'white';
    showAlert('Contrast mode', 'success')
  }

  return (
    // <BrowserRouter>
    <Fragment>
        <Navbar title='Navabar' mode={mode} toggleMode3={toggleMode3} toggleMode={toggleMode} toggleMode2={toggleMode2} />
        <Alert alert={alert} />
        <div className="container mt-3">
      {/* <Routes> */}
          {/* <Route path="/" element={
          }/> */}
          <TextForm showAlert={showAlert} mode={mode} heading="Type Something..." />
          {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
        </div>
    </Fragment>
    // </BrowserRouter>
  )
}

export default App