import React from 'react'
import Image from "../component/assets/IOT.jpg";
import CImage from "../component/assets/IOT1.jpg";

const IOT = () => {
    return (
        <div className='d4'>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h1 className='c2'>Indication for Transfusion</h1><br></br>
            <div className='d1'>
                <div>
            <img src={Image} alt="IOT Img" className="d2"/></div>
            <div>
            <img src={CImage} alt="IOT1 Img" className='d3'/>
            </div> 
            </div>
            <br></br>
            <ul className='c4'>
            <p>• Anaemia</p><br></br>
            <p>• Loss of blood from injury</p><br></br>
            <p>• During certain surgeries</p><br></br>
            <p>• If body cannot produce sufficient blood because of an illness</p><br></br>
            <p>• Severe burns,  Severe infection that stops the body from properly making blood or some blood components, Severe liver malfunction may require transfusion of albumin, blood protein</p><br></br>
            <p>• Those undergoing radiation or Chemotherapy for cancer may require transfusion</p><br></br>
            <p>• A bleeding disorder, such as hemophilia or thrombocytopenia (deficiency of platelets in the blood)</p><br></br>
            <p>• Those undergoing stem cell transplants may require transfusion of red blood cells and platelets, Dengue</p><br></br>
            <p>• Those suffering from chronic renal failure</p>
            </ul><br></br><br></br>
            
        </div>
    )
}

export default IOT

