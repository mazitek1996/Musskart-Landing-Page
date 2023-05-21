import React from 'react'
import "./BodySection.css"
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Solution from './solution'
export default function BodySection() {
  return (
    <div className='body_root '>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>
      <Solution/>
    </div>
  )
}
