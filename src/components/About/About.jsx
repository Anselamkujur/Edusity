import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
            <img src={play_icon} className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolore omnis perspiciatis ad consequatur porro repudiandae magnam autem harum molestias.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor perferendis labore nemo repellendus laudantium expedita enim eligendi! Repudiandae quidem perspiciatis, ut voluptatem quis sint. Nulla unde totam officia doloremque modi.</p>
        </div>

      
    </div>
  )
}

export default About
