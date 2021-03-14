import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { FaUserAlt, FaLock, FaUserLock, FaRegBuilding, FaRegAddressBook, FaRegEnvelope } from "react-icons/fa";

import "./register.css"

function Register() {
  const [check, setCheck] = useState(false);

  return (
    <section className="sign-box">
      <div className="box">
        <div className="form">
          <h2>Sign Up</h2>
          <form action="mailto:info@ebnbatota.com">
            <div className="inputBx spec">
              <input 
                type="checkbox" 
                name="company" 
                id="checkBox" 
                onClick={()=> setCheck(!check)}
                />
              <label htmlFor="company">Company</label>
            </div>
            <div className="inputBx">
              <label htmlFor="name"><FaUserAlt className="icon"/></label>
              <input type="text" name="name" placeholder="Username" />
            </div>
            <div className={`inputBx ${check || "d-none"}`}>
              <label htmlFor="companyName"><FaRegBuilding className="icon"/></label>
              <input type="text" name="companyName" placeholder="Company Name" />
            </div>
            <div className={`inputBx ${check || "d-none"}`}>
              <label htmlFor="address"><FaRegAddressBook className="icon"/></label>
              <input type="text" name="address" placeholder="Company address" />
            </div>
            <div className="inputBx">
              <label htmlFor="email"><FaRegEnvelope className="icon"/></label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="inputBx">
              <label htmlFor="password"><FaLock className="icon"/></label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="inputBx">
              <label htmlFor="confirm-password"><FaUserLock className="icon"/></label>
              <input type="password" name="confirm-password" placeholder="Confirm Password" />
            </div>
            <div className="inputBx">
              <input type="submit" name="submit" value="Create An Account" />
            </div>
          </form>
          <Link className="signUpLink" to="/#login">Already has an account</Link>
        </div>
      </div>
    </section>
  )
}
// Forgot Password
// Need an Account
export default Register

