import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaRegSmileBeam } from 'react-icons/fa';
import Aos from "aos";

import "aos/dist/aos.css";
import "./Tour.css";

function Tour({ url, title, id, albumId, thumbnailUrl }) {
  useEffect(()=> {
    Aos.init({duration: 300,once: true, offset: 220})
  }, [])
  return (
    
    <article data-aos="zoom-in-up" className="tour col-lg-4 col-md-6 ">
      <div className="tour-shadow">
        <Link to={`/trips/${id}`} className='btn btn-primary btn-details'>
          <div className="img-accessories">
            <div className='img-container'>
              <img src={url} alt={title} />
            </div>
            <div className="ribbon popular">
              <span>popular</span>
            </div>
            <div className="priceContainer">
              <span className="price">
                <sup>EGP</sup>
                {`${albumId}${id}`}
              </span>
            </div>
          </div>
        </Link>
        <div className='tour-footer'>
          <h3>
            <strong>{title}</strong>&nbsp;
            tour
          </h3>
          <p>
            <FaRegSmileBeam className="smileIcone"/>
            <FaRegSmileBeam className="smileIcone"/>
            <FaRegSmileBeam className="smileIcone"/>
            <FaRegSmileBeam className="smileIcone"/>
            <FaRegSmileBeam className="smileIcone"/>
          </p>
        </div>
      </div>
    </article>
  )
}

export default Tour;