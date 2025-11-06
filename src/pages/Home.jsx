import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Project from '../components/Project'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import { gsap } from "gsap";

const Home = () => {
  return (
    <div className="bg-[#282C33] text-white overflow-x-hidden">
      
      {/* Section 1: Hero */}
      <section id="home" className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
      </section>

      {/* Section 2: Projects */}
      <section id="projects" className="min-h-screen flex flex-col">
        <Project />
      </section>

      {/* Section 3: Skills */}
      <section id="skills" className="min-h-screen flex flex-col">
        <Skill />
      </section>

      {/* Section 4: About Me */}
      <section id="about-me" className="min-h-screen flex flex-col">
        <AboutMe />
      </section>

      {/* Section 5: Contact */}
      <section id="contacts" className="min-h-screen flex flex-col">
        <Contact />
      </section>

    </div>
  )
}

export default Home



