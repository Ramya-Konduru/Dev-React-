import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar link="About Us" anotherLink="Contact" />
      {/* <Navbar /> */} {/* example for proptypes */}
      <div className="container my-3">  {/* to know "my-3" check in bootstrap, spacing doc */}
        <TextForm heading="Type Here!" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App; 
