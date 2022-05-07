import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "rgb(49 61 72)";
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* <Navbar link="About Us" anotherLink="Contact" /> */}
      <Navbar link="About Us" anotherLink="Contact" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */} {/* example for proptypes */}
      <div className="container my-3">  {/* to know "my-3" check in bootstrap, spacing doc */}
        <TextForm heading="Type Here!" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App; 