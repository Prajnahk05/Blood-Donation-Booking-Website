
import React from 'react'
import Image from "../component/assets/About.jpg";
import AImage from "../component/assets/About1.jpg";
import BImage from "../component/assets/About2.jpg";

const AboutBlood = () => {
    return (
        <div className='c1'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h1 className='c2'>About Blood</h1><br></br>
                <img src={Image} alt="About Img" className="c3"/>
                <br></br>
                <br></br>
                <ul className='c4'>
                    <li>• Human Blood is produced by human beings only. There is no substitute.</li><br></br>
                    <li>• Blood keeps the body healthy and active.</li><br></br>
                    <li>• Blood carries oxygen and nutrients to all parts of the body and takes carbon dioxide and other waste products to the lungs, kidneys and liver for disposal.</li><br></br>
                    <li>• There are four types of transfusable products that can be derived from blood: Red Blood Cells, Platelets, Plasma and Cryoprecipitate. Typically, two or </li>
                    <li>three of these are produced from a unit of donated whole blood.</li><br></br>
                    <li>• A single donation can potentially help more than one patient.</li><br></br>
                    <li>• Donors can give either whole blood or specific blood components only. The process of donating specific blood components – Single Donor Platelets is called Apheresis.</li><br></br>
                    <li>• One transfusion dose of Platelets can be obtained through one Apheresis donation of Platelets or by combining the Platelets derived from 6-8 whole blood donations.</li><br></br>
                    <li>• Most donated red blood cells must be used within 35 or 42 days of collection.</li><br></br>
                    <li>• Donated Platelets must be used within 5 days of collection so that new donations are constantly needed.</li><br></br>
                    <li>• Plasma and Cryoprecipitate are stored in frozen state and can be used for up to one year after collection.</li><br></br>
                    <li>• Healthy bone marrow makes a constant supply of red cells, plasma and Platelets. The body will replenish the elements given during a </li><br></br>
                    <li>blood donation – some in a matter of hours and others in a matter of weeks.</li><br></br>
                </ul>
            </div>
            <hr></hr>
            <div>
                <h1 className='c2'>Blood Groups</h1><br></br>
                <h2 className='c5'>Blood Types</h2><br></br>
                <p className='c4'>• All human blood may look similar, but you can’t donate to anyone and you can’t receive blood from anyone. Different blood types need to be matched correctly.</p>
            <br></br>
            <p className='c4'>• Although all blood is made of the same basic elements, not all blood is alike. In fact, there are eight different common blood types, which are determined by the presence or absence of certain antigens – substances that can trigger an immune response if they are foreign to the body. Since some antigens can trigger a patient’s immune system to attack the transfused blood, safe blood transfusions depend on careful blood typing and cross-matching.</p>
            <br></br>
            <h2 className='c5'>The ABO Blood Group System</h2><br></br>
            <p className='c4'>• There are four major blood groups determined by the presence or absence of two antigens – A and B – on the surface of red blood cells:</p>
            <br></br>
            <div className='c7'>
                <div>
            <img src={AImage} alt="About1 Img" className='c6'/></div>
            <div className='c8'>
            <p  ><strong>    Group A</strong> – has only the A antigen on red cells (and B antibody in the plasma).</p><br></br>
            <p ><strong>  Group B</strong> – has only the B antigen on red cells (and A antibody in the plasma).</p><br></br>
            <p ><strong>  Group AB </strong> – has both A and B antigens on red cells (but neither A nor B antibody in the plasma).</p><br></br>
            <p ><strong>  Group O</strong>  – has neither A nor B antigens on red cells (but both A and B antibody are in the plasma).</p><br></br>
            <p><strong>  Bombay Group</strong>  – In group ‘O’ individuals absence of ‘H’ antigen.</p>
            </div>
            </div><br></br>
            <h2 className='c5'>There are very specific ways in which blood types must be matched for a safe transfusion:</h2><br></br>
            <p className='c4'>• In addition to the A and B antigens, there is a third antigen called the Rh factor, which can be either present (+) or absent ( – ). In general, Rh negative blood is given to Rh-negative patients, and Rh positive blood or Rh negative blood may be given to Rh positive patients.</p>
            <br></br>
            <p className='c4'>• The universal red cell Donor has Type O negative blood type.</p><br></br>
            <p className='c4'>• The universal plasma Donor has Type AB blood type.</p><br></br>
            <img src={BImage} alt="About2 Img" className='c3'/><br></br><br></br>
            <h2 className='c5'>Subtypes of Blood Group</h2><br></br>
            <div className='c7'>
            <ul className='c8'>
                <li>ABO</li>
                <li>A1</li>
                <li>A1</li>
                <li>A1B</li>
                <li>A1B</li>
                <li>B</li>
                <li>B</li>
                <li>O</li>
                <li>O</li>
                <li>O Bombay</li>
                <li>O Bombay</li>
                </ul>
                <ul className='c8'>
                    <li>Rh</li>
                    <li>Pos</li>
                    <li>Neg</li>
                    <li>Pos</li>
                    <li>Neg</li>
                    <li>Pos</li>
                    <li>Neg</li>
                    <li>Pos</li>
                    <li>Neg</li>
                    <li>Pos</li>
                    <li>Neg</li>
                </ul>
                <ul className='c8'>
                    <li>Anti A</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                </ul>
                <ul className='c8'>
                    <li>Anti B</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                 </ul>
                 <ul className='c8'>
                    <li>Anti AB</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                </ul>
                <ul className='c8'>
                    <li>Anti A1</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                </ul>
                <ul className='c8'>
                    <li>Anti H</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Negative</li>
                </ul>
                <ul className='c8'>
                    <li>Anti D</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Negative</li>
                </ul>
                <ul className='c8'>
                    <li>A Cell</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                </ul>
                <ul className='c8'>
                    <li>B Cell</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                    <li>Positive</li>
                </ul>
                <ul className='c8'>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Positive</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                    <li>Negative</li>
                </ul>
                <ul className='c8'>
                    <li>Du</li>
                    <li></li>
                    <li>Negative</li>
                    <li></li>
                    <li>Negative</li>
                    <li></li>
                    <li>Negative</li>
                    <li></li>
                    <li>Negative</li>
                    <li></li>
                    <li>Negative</li>
                </ul>
             </div><br></br><br></br>
            </div>
        </div>
    )
}

export default AboutBlood


    

