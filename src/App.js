import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home.js";
import Portfolio from "./Pages/Portfolio.js"
import Tools from "./Pages/Tools.js";
import Contact from "./Pages/Contact.js";
import Footer from './Components/Footer.js';

function App() {
  return (
<BrowserRouter>
		<Header />
    <div className="container mt-2" style={{ marginTop: 40 }}>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/portfolio" element={<Portfolio />} />    
    <Route exact path="/tools" element={<Tools />} />  
    </Routes>
    </div>
    <Footer />
</BrowserRouter>  

  );
}

export default App;

{/* <div className="App"></div> */}