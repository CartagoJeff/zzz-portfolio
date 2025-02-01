import React from 'react'
import Designer from './Designer'
import About from './About'
import Work from './Work'
import NavBar from './NavBar'
import Experience from './Experience'
import Skills from './Skills'

export default function Main() {
  return (
    <>
      <NavBar />
      <main>
          <Designer /> 
          <About />
          <Work />
          <Experience />
          <Skills />
      </main>
    </>
  )
}
