import React from 'react'
import Intro from '../components/Intro'
import Bride_Groom from '../components/Bride_Groom'
import Photo_Gallery from '../components/Photo_Gallery'
import Location from '../components/Location'
import Social_Share from '../components/Social_Share'
import Footer from '../components/Footer'

const Home = () => {
  return (
     <div className="Home">
        <div className="Home-page">
         <Intro/>
        <Bride_Groom/>
        <Photo_Gallery/>
        <Location/>
        <Social_Share/>
        </div>
     </div>
  )
}

export default Home