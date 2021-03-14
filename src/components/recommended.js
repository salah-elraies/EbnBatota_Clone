import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Tour from './Tour'

import "./recommended.css";

function Recommended() {
    const { tours, loading } = useGlobalContext()

    let max = 49;
    let stop = 9;
    let numbers = [];
    let toursLoop = [];
    for (let i = 0; i < stop; i++) {
        let n =  Math.floor(Math.random() * max);
        let check = numbers.includes(n);

        if(check === false) {
        numbers.push(n);
        } else {
            while(check === true){
                n = Math.floor(Math.random() * max);
                check = numbers.includes(n);
                if(check === false){
                    numbers.push(n);
                }
            }
        }
        // console.log(numbers[i])
        toursLoop.push(tours.filter(trip => trip.id === numbers[i]).map((item) => {
            return <Tour key={item.id} {...item} />
        }))
    }
    
    return (
        <section className="main" id="tours">
        <main className="group container">
            <h2 className="title"><span>recommended</span> for you</h2>
            <div className="row">
            {toursLoop}
            </div>
            <p className="text-center">
                <Link to="/trips" className="toTrips">
                    <FaRegEye className="eyeI"/> hakona matata
                </Link>
            </p>
        </main>
        </section>
    )
}
export default Recommended