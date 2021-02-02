import React from 'react'
import introImg from '../assets/intro-whatsapp.jpg'

const Welcome = () =>{
    return (
        <div className="welcome">
            <img src={introImg} alt="" />
            <h2>Keep your phone connected</h2>
        </div>
    )
}

export default Welcome
