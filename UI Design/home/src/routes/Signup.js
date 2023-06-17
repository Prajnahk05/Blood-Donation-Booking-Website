import React from 'react'
import { useNavigate} from "react-router-dom";
import "./Styles.css";
import Donor from './Donor';


const Signup = () => {
  const [form, setForm] = React.useState({});
  const navigate = useNavigate();
 
  const handleForm=(e)=>{
   console.log(e.target.value)
   setForm({
    ...form, [e.target.name]:e.target.value,
   })
  }

  const  handleSubmit= async (e)=>{
    console.log(form)
    e.preventDefault();
    const res = await fetch('http://localhost:8080/Signup',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const data = await res.json();
      console.log(data)
   }
   const handleButtonClick = () => {
    // Perform any necessary logic
    // ...

    // Programmatically navigate to a specific route
    
navigate('/donor');
  };

  return (
    <>
   <div className='signUpCon'>
   <div className='container'>
    <div className='signup'>
   <form onSubmit={handleSubmit} className="formContainer">
   <div className='sd'>
   <div>
    <input className="form-control" type="text" placeholder="Email" name="username" onChange={handleForm}/>
    </div>
    <div>
    <input className="form-control" type="password"  placeholder="Password" name="password" onChange={handleForm}/>
    </div>
    
    <button className="btn btn-lg btn-danger">Login</button>
  
    <div>
    <a href='Password.js'>Forgot Password</a>
    </div>
    <div>
     <p>----------New User?----------</p>
   {/*} <button className="btn btn-lg btn-danger" onClick={onpageshow}>Donor Registration </button>  */}
  <button className="btn btn-lg btn-danger" onClick={handleButtonClick}>Donor Registration</button>

    </div>

   </div>
    </form>
    </div>
   </div>
   </div>
   
    </>
  )
}

export default Signup;