import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testamonials from './components/Testamonials/Testamonials'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle={"Our Program"} title={"What We Offer"}/>
        <Programs />
        <About />
        <Title subTitle={"Gallery"} title={"Our Campus"}/>
        <Campus />
        <Title subTitle={"TESTAMONIALS"} title={"What Student Says"}/>
        <Testamonials />
        <Title subTitle={"Contact Us"} title={"Get in Touch"}/>
        <Contacts />
      </div>
    </div>
  )
}

export default App
