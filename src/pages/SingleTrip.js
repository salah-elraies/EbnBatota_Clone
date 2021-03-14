import React, { Component } from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import { FaRegSmileBeam } from 'react-icons/fa';
import { Slide } from 'react-slideshow-image';
import Booking from '../components/Booking'
// import { Redirect } from "react-router-dom";

import 'react-slideshow-image/dist/styles.css'
import './SingleTrip.css'
import Error from "./Error"
export default function SingleTour() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [tour, setTour] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getTour() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/?albumId=1`
        )
        const data = await response.json()
        // console.log(data)
        if (data) {
          const {
            title: title,
            url: url,
            albumId: albumId,
            id: idReal,
            thumbnailUrl,
          } = data[id - 1 ]
          const ingredients = [
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
            thumbnailUrl,
          ]
          const newTour = {
            title,
            url,
            albumId,
            idReal,
            ingredients,
          }
          setTour(newTour)
        } else {
          setTour(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getTour()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  // console.log([], "fuck")
  if (!tour) {
    return <Error />
  } else {
    const {
      title,
      url,
      albumId,
      idReal,
      ingredients,
    } = tour
    const zoomOutProperties = {
      indicators: true,
      scale: 0.4,
      indicators: i => (<img className="indicator" src={ingredients[i]} />)
    }
    let lol = 1, lel=0;
    return (
      <>
        <section className="STrip" style={{}}>
          <section className="SPageHead">
            <img src={url}/>
            <div className="TourName">
              <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8" style={{"padding": 0}}>
                      <div className="row"><h1>{title}</h1></div>
                      <div className="row">
                        <div className='tour-footer' style={{"color": "#fff", "padding": 0}}>
                          <h3 style={{"display": "inline-block"}}>
                          Ra7alah
                          </h3>
                          <p style={{"display": "inline-block"}}>
                            <FaRegSmileBeam className="smileIconePage"/>
                            <FaRegSmileBeam className="smileIconePage"/>
                            <FaRegSmileBeam className="smileIconePage"/>
                            <FaRegSmileBeam className="smileIconePage"/>
                            <FaRegSmileBeam className="smileIconePage"/>
                          </p>
                        </div>
                      </div>  
                    </div>
                    <div className="col-12 col-md-4" style={{"textAlign": "right"}}>
                      <h1 style={{"color": "#3CF", "marginTop": "2rem","fontSize": "4rem", "fontWeight": "normal"}}><sup style={{"fontSize": "1rem","position": "relative", "top": "-30px"}}>EGP/Person</sup>{`${albumId}${idReal}`}</h1>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section className="slide-container" style={{"height": "100vh", "overflow": "hidden"}}>
          <div className="container">
          <div className="row">
            <Slide {...zoomOutProperties}  className="col-12 col-lg-8">
              {ingredients.map((slider)=>{
                return <div key={lel++} className="each-slide">
                          <div style={{'backgroundImage': `url(${slider})`}}>
                            <span className="span">Slide {lol++}</span>
                          </div>
                        </div>
              })}
            </Slide>
            <div className="col-12 col-lg-4 d-none d-lg-block"><Booking className="" idReal={idReal} albumId={albumId} /></div>
            </div>
          </div>
        </section >
          <article className="covering" style={{"marginBottom": "20vh"}}>
            <section className="description" style={{}}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3"><h3 style={{"fontSize": "22px", "marginTop": "2rem"}}>Description</h3></div>
                    <div className="col-lg-5"><p style={{"textAlign": "right", "lineHeight": "2", "maxWidth": "300px", "float": "right"}}>Et id ullamco minim ad nisi et exercitation reprehenderit. Minim do proident Lorem anim eu veniam. Excepteur est et velit voluptate officia qui dolor eu. In officia incididunt in incididunt proident eiusmod commodo eiusmod ipsum culpa sunt velit anim. Fugiat proident ullamco occaecat voluptate non ex proident ea labore minim tempor.

                                  Dolore tempor excepteur magna nisi nostrud sit duis ea commodo commodo amet magna est tempor. Aliqua ad ea reprehenderit exercitation excepteur et reprehenderit ea Lorem aute deserunt. Ex enim sunt labore anim laborum aute deserunt nulla ullamco duis laborum est consectetur.Pariatur minim in Lorem sit sunt in ipsum sint cillum laboris elit nulla. Minim incididunt cillum minim aliqua officia ut minim amet. Dolore irure pariatur exercitation do in sint in dolore ipsum enim laborum dolore anim ipsum. Id eu amet ut aliqua laborum labore irure deserunt. Fugiat sit nisi consectetur cupidatat anim ex Lorem anim minim aliqua amet commodo ex ex.

                                  Nisi ipsum ea sunt esse ut reprehenderit excepteur laborum eu incididunt veniam consectetur incididunt. Do id et duis commodo consequat est reprehenderit do veniam eiusmod deserunt. Est incididunt anim esse ipsum nostrud ipsum nisi pariatur laboris veniam labore. Aliquip quis velit exercitation anim quis ea. Sunt est sint excepteur excepteur adipisicing id qui in incididunt non ad culpa fugiat nostrud.

                                  Incididunt ad ipsum aliqua proident. Id et ut magna do duis magna voluptate dolor nulla. Ea mollit occaecat culpa ut duis et adipisicing reprehenderit consequat deserunt labore. Consequat cillum sunt ut reprehenderit. Ea magna pariatur laboris ipsum.</p></div>
                  </div>
                </div>
            </section>
          </article>
          <span className="col-12 col-lg-4 d-lg-none"><Booking className="col-12 col-lg-4 d-lg-none" idReal={idReal} albumId={albumId}/></span>
        </section>
      </>
    )
  }
}
