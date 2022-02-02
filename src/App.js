import Navbar from "./components/Navbar";
import FormText from "./components/FormText"
/* import About from "./components/About"; */
import { useState } from "react";
/* import Alerts from "./components/Alerts"; */
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
 


} from "react-router-dom"; */





function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#21201c";

    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";


    }

  }
  return (

    <>
      <Navbar title="PalluScooP" aboutText="About us" mode={mode} toggleM={toggleMode} />
     
      {/* <Alerts alert= {alert}/>  */}
      {/* <Navbar/> */}
     


     {/*  <Router>
        <Routes>

          
          <Route exact path="/" element={<FormText heading="Enter the text" mode={mode} formT="Contact Us"/>} />
          <Route exact path="/about" element={<About />} />
         


        </Routes>
      </Router> */}
      <FormText heading="Enter the text" mode={mode} formT="Contact Us"/>}
    
      
    



    </>


  );
}

export default App;











