import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaChevronUp} from 'react-icons/fa'

import "./Navbar.css"
import "./BtnToUp.css"

function Navbar({appformShow, setAppFormShow,}) {

  const [whiteImg, setWhiteImg] = useState("https://cdn.ebnbatota.com/batota2.png");
  
  const [offset, setOffset] = useState(0);
  
  useEffect(()=>{
    let scrollNav = ()=> {
      if (window.scrollY > 50 || window.location.pathname === "/trips" || window.location.pathname === "/terms") {
        setWhiteImg("https://cdn.ebnbatota.com/batota1.png");
      }
      else {setWhiteImg("https://cdn.ebnbatota.com/batota2.png")}}
    window.addEventListener("scroll", scrollNav());
    return window.removeEventListener("scroll", scrollNav());
  }, [offset])
  useEffect(()=>{
    let scrollOver = ()=>{
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", scrollOver)
    return ()=>{window.removeEventListener("scroll", scrollOver)}
  })
  useEffect(()=>{
    if (window.location.pathname === "/trips" || window.location.pathname === "/terms") {
      setWhiteImg("https://cdn.ebnbatota.com/batota1.png");
    }
  }, [])
  

  let ToTop = () => {
    window.scrollTo (0, 0)
  }
  // console.log(offset);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav 
        className={
          `navbar ${window.scrollY > 50 && "scrolled"}
            ${(window.location.pathname === "/trips" || window.location.pathname === "/terms") && "blcclr"}
          `}>
        <div className='nav-center container'>
          <div className="brand">
            <Link to='/'>
              <img 
                src={whiteImg} 
                alt='cocktail db logo' 
                className='logo' />
            </Link>
          </div>
          <div className="menuBrgr" onClick={()=>{setMenu(!menu)}}>
            <span className={`menuStyle ${menu && "XmenuStyle"}`}></span>
          </div>
          <ul className={`nav-links ${menu && "nav-show"}`}>
            <li>
              <Link to='/trips'>Tours</Link>
            </li>
            <li>
              <a href="mailto:info@ebnbatota.com">Contact Us</a>
            </li>
            <li>
              <Link to='#login' onClick={()=> setAppFormShow(!appformShow)}>Sign In</Link>
            </li>
            <li>
              <Link className="signUp bitch" to='/register'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`btnToup ${(offset <= 250 ) && "hiding"}`} onClick={ToTop}>
        <FaChevronUp className="chev-icon"/>
      </div>
    </>
  )
}
export default Navbar