import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
// import { useGlobalContext } from '../context'
import { FaLock, FaRegEnvelope } from "react-icons/fa";

import "./SignIn.css"

function SignIn({appformShow, setAppFormShow, appshowing, setAppShowing}) {
  // const { showing } = useGlobalContext()
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  
    
  // console.log(window.location.toString().split('#')[1])
  useEffect(()=>{
    // if (window.location.toString().split('#')[1] === "login") { 
    // }
    setShow(appformShow)
  }, [appformShow])

  useEffect(()=>{
    if (window.location.toString().split('#')[1] === "login") { 
      setShow(!show)
    }}, [])
  
  return (
      <div className={`logbox ${show && "loginShow"}`} id="login">
        <div className="imglay"></div>
        <div className="screenlay" onClick={()=> {
          setShow(false)
          setAppFormShow(false)
          }} title="go back"></div>
        <button className="exitBtn" onClick={()=> {
          setShow(false)
          setAppFormShow(false)
          }} title="go back">X</button>  
        <div className="form">
          <h2>Sign In</h2>
          <form action="mailto:info@ebnbatota.com">
            <div className="inputBx">
              <label htmlFor="email"><FaRegEnvelope className="icon"/></label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="inputBx">
              <label htmlFor="password"><FaLock className="icon"/></label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="inputBx spec">
              <input 
                type="checkbox" 
                name="company" 
                id="checkBox" 
                onClick={()=> setCheck(!check)}
                />
              <label htmlFor="company">Remember Me</label>
            </div>
            <div className="inputBx">
              <input type="submit" name="submit" value="Log In" />
            </div>
          </form>
          <section className="quest">
            <a className="signUpLink" href="mailto:info@ebnbatota.com">Forgot Password?</a>
            <Link className="signUpLink" to="/register">Need an Account</Link>
          </section>
        </div>
      </div>
  )
}

export default SignIn

