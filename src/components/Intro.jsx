import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BG_Img from '../assets/couple_Img.png'


const Intro = () => {

    useEffect(() => {
    AOS.init({ duration: 1000 });
    }, []);


  return (
    <div className="Intro_Container">

        <div className="Bg_img" data-aos="fade-up">
            <img src={BG_Img} alt="" />
        </div>


        <div className="text" >
            <h2 data-aos="fade-up">The Wedding of </h2> <br />
            <h1 data-aos="fade-up">Raju & Rani
            </h1>
        </div>

        <br />

        <div className="Date" data-aos="fade-up" >
            <h3 data-aos="fade-up">Save the Date</h3>
            <p data-aos="fade-up">Sunday, 30th June 2026 <br />
              at 11:00 AM
            </p>
        </div>

        <br />

        <div className="Place" data-aos="fade-up">
            <h3 data-aos="fade-up">Royal Palace,</h3>
            <p data-aos="fade-up">456 Wedding lane , <br />
                       Hyderabad.
            </p>
        </div>


    </div>
  )
}

export default Intro