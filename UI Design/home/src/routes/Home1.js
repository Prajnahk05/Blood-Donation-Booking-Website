import Navbar from "../component/Navbar";
import Image from "../component/Img2.jpg";
import { useState } from "react";


function Home1(){
    const [feedback,setFeedback]=useState()
    const feedBack=()=>{
          setFeedback("")
    }

    const handleUserInput = (e) => {
        setFeedback(e.target.value);
      };
    
return(
    <>
    <div>
        <img src={Image} alt="blood donation" className="blood-donation-image"/>
        </div>
    <hr></hr>
    
    <div className="b1">
    <div className="b3">
        <h1 className="b2">Contact Us</h1><br></br>
        <p>Whether you have a question, are not sure about whether you can give blood or just want to say hello, we’re happy to hear from you.</p>
        <br></br>
        <ul>
        <li><strong>Phone: </strong>  +917483473375</li><br></br>
        <li><strong>Email:</strong>   prajna5720@gmail.com</li><br></br>
        <li><strong>Address:</strong> 1st sector Agara, HSR Layout, Banglore 560102.</li>
        </ul>
    <br></br>
    <hr></hr>
    <br></br>
    
        <h2>What would you like to tell us about?</h2>
        <br></br>
        <div className="b4">
            <div className="box">
                <h3 className="b5">Enquiry/Help form</h3><br></br>
                <p >Whether you have a question or comment that is not related to any medical query please enter your details here and we will be happy to help.</p>
                <a href="Details.js">Enquire here..</a>
                <br></br>
                

                 </div>
            <div className="box">
                <h3 className="b5">Send us Your Story</h3><br></br>
                <p>Have an amazing story about donating or receiving blood? Tell us about this here.</p><br></br>
                <div className="b7">
                <label htmlFor="message"> Opinion:</label>
                <textarea id="message" name="message" onChange={handleUserInput}  placeholder=" Write your Opinion" required  value={feedback}></textarea>
                </div>
                <button type="submit" className="b8" onClick={feedBack}>Send</button>
                </div>
                
             
            

        </div><br></br>
        <div className="b6">
        <div className="box">
                <h3 className="b5">Compliments or complaints</h3><br></br>
                <p>Do you want to give us a compliment about our service? Or you are unhappy with our service please let us know and we will try and correct the issue.</p>
                <br></br>
                <div className="b7">
                <label htmlFor="message"> Message:</label>
                <textarea id="message" name="message" onChange={handleUserInput}  placeholder="Write your message here.." required  value={feedback}></textarea>
                </div>
                <button type="submit" className="b8" onClick={feedBack}>Send</button>
                </div>
                
        
    </div>


    </div>
    </div>
    

     <Navbar/>

    </>
)
}

export default Home1;