import React, { useState } from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom'
const Signup = () => {
  const [udata, setudata] = useState({
    fname:"",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  })

const adddata=(e)=>{
const[name,value]=e.target;
setudata(()=>{
  return {
    ...udata,
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
              <h1>Sign Up </h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input type="text" onChange={adddata} value={udata.fname} name='fname' id='fname' />
              </div>
              <div className="form_data">
                <label htmlFor="email">E-mail</label>
                <input type="text" onChange={adddata} value={udata.email} name='email' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input type="text" onChange={adddata} value={udata.mobile} name='mobile' id='mobile' />
              </div>
              <div className="form_data">
                <label htmlFor="">Password</label>
                <input type="password" onChange={adddata} value={udata.password} name='password' placeholder='At Least 6 Characters' id='password' />
              </div>
              <div className="form_data">
                <label htmlFor="">Password Again</label>
                <input type="password" onChange={adddata} value={udata.cpassword} name='cpassword' id='password' />
              </div>
              <button className='signin_btn'>Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign in</NavLink>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Signup
