import "./index.css";
import "./App.css";
import Home1 from "./routes/Home1";
import { Route, Routes} from "react-router-dom";
import Eligibility from "./routes/Eligibility";
import About from "./routes/About";
import Learn from "./routes/Learn";
import Navbar from "./component/Navbar";
import AboutBlood from "./routes/AboutBlood";
import Donation from "./routes/Donation";
import IOT from "./routes/IOT";
import MOHL from "./routes/MOHL";
import ABD from "./routes/ABD";
import BDPA from "./routes/BDPA";
import Details from "./routes/Details";

import Signup from "./routes/Signup";
import Donor from "./routes/Donor";

export default function App() {
  return (
    <div className="mainContainer">
      
      <Routes>
          <Route path="/" element={<Home1/>}/>
          <Route path="/learn" element={<Learn/>}/>
          <Route path="/eligibility" element={<Eligibility/>}/>
          <Route path="learn/AboutBlood" element={<AboutBlood/>}/>
          <Route path="learn/Donation" element={<Donation/>}/>
          <Route path="learn/IOT" element={<IOT/>}/>
          <Route path="learn/MOHL" element={<MOHL/>}/>
          <Route path="eligibility/ABD" element={<ABD/>}/>
          <Route path="eligibility/BDPA" element={<BDPA/>}/>
          <Route path="/Details" element={<Details/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/donor" element={<Donor/>}/>
          
       
      </Routes>
      <Navbar/>
      
      
      </div>
  );
}