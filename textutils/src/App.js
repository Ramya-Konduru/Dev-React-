import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typpe, action) => {
    setAlert({
      msg: message,
      type: typpe,
      action: action
    })
    setTimeout(() => {
      setAlert(null);     // after the given time this function will come into action
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "rgb(49 61 72)";
      showAlert("Enabled Dark Mode", "success", "Successful");
      document.title = "TextUtils | DarkMode";
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success", "Successful");
    }
  }
  return (
    <>
      {/* <Navbar link="About Us" anotherLink="Contact" /> */}
      <Navbar link="About Us" anotherLink="Contact" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar /> */} {/* example for proptypes */}
      <div className="container my-3">  {/*to know "my-3" check in bootstrap, spacing doc*/}
        <TextForm showAlert={showAlert} heading="Type Here!" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App; 