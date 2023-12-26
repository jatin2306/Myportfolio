import React, { useState } from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom'
const Signin = () => {


  const [logdata,setdata] = useState({
    email:"",
    password:""
  })
console.log(logdata)
  const adddata =(e)=>{
    const {name,value}=e.target;
setdata(()=>{
  return{
    ...logdata,
    [name]:value
  }
})
  }
  return (
 <>
 <section>
  
 <div className="sign_container">
  <div className="sign_header">
    <img src="./blacklogoamazon.png" alt="amazonlogo" />
  </div>
  <div className="sign_form">
    <form action="">
      <h1>Sign in</h1>
      <div className="form_data">
        <label htmlFor="email">E-mail</label>
        <input type="text" onChange={adddata} value={logdata.email} name='email' id='email'/>
      </div>
      <div className="form_data">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={adddata} value={logdata.password}  name='password'  placeholder='At Least 6 Characters' id='password'/>
      </div>
      <button className='signin_btn'>Continue</button>
    </form>
  </div>
  <div className="create_accountinfo">
<p>New to Amazon</p>
<NavLink to='/register'>
<button>Create Your Amazon Account</button>

</NavLink>
  </div>
 </div>
 </section>
 </>
  )
}

export default Signin
