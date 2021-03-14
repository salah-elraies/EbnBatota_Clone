// import React, {useState, useEffect} from 'react'
// import "./BtnToUp.css"
// import {FaChevronUp} from 'react-icons/fa'

// function BtnToUp() {
//   const [offset, setOffset] = useState(0);
//   useEffect(() => {
//     let fun = () => {
//       setOffset(window.pageYOffset)
//     }
//     window.addEventListener("scroll", fun());
//   }, []);

//   let ToTop = () => {
//     window.scrollTo (0, 0)
//   }
  
//     return (
//         <div className={`btnToup ${(offset <= 100 ) && "hiding"}`} onClick={ToTop}>
//             <FaChevronUp className="chev-icon"/>
//         </div>
//     )
// }
// export default BtnToUp;