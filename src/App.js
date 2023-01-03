import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Pages/Contact.js";
import Home from "./Pages/home.js";
import Footer from './Components/Footer.js';

function App() {
  return (
<BrowserRouter>
		<Header />
    <div className="container mt-2" style={{ marginTop: 40 }}>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </div>
    <Footer />
</BrowserRouter>  

  );
}

export default App;

{/* <div className="App"></div> */}