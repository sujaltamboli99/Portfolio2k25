import React, { useLayoutEffect, useRef } from 'react'
import line from '../assets/line-project.png'
import Footer from '../components/Footer'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// icons
import { FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import { FaFileAlt } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

  const contactSectionRef = useRef()
  const headingRef = useRef()
  const descRef = useRef()
  const boxRef = useRef()
  const mediaRef = useRef()
  const iconsRef = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 80%",
          toggleActions: "play reset play reset",
        }
      })

      // 1️⃣ Heading
      tl.from(headingRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out"
      })

      // 2️⃣ Description
      .from(descRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.6,
        ease: "power3.out"
      })

      // 3️⃣ Contact box
      .from(boxRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.6,
        ease: "power3.out"
      })

      // 4️⃣ Media title
      .from(mediaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power3.out"
      })

      // 5️⃣ Icons (stagger pop)
      .from(iconsRef.current, {
        opacity: 1,
        y: 12,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out"
      })
    }, contactSectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={contactSectionRef} className='flex flex-col items-center mt-[100px] px-8'>

      {/* Section Header */}
      <div className='flex flex-row items-center gap-[12px] mr-[100px] mb-[60px]'>
        <h2 ref={headingRef} className='text-3xl font-fira font-medium text-white'>
          <span className='text-[#C778DD]'>#</span>contacts
        </h2>
        <img src={line} alt="" className='w-[120px]'/>
      </div>

      {/* Contact Info Row */}
      <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-[50px]'>

        {/* Left Text */}
        <div ref={descRef} className='flex flex-col gap-[40px] justify-center w-full max-w-[560px]'>
          <p className='text-[#ABB2BF] text-sm font-fira font-medium break-words'>
            I'm open to exciting freelance projects and job opportunities. If you'd like to discuss a potential collaboration or have any questions, feel free to get in touch.
          </p>
        </div>

        {/* Contact Box */}
        <div ref={boxRef} className='flex flex-col justify-center h-[160px] w-[240px] border border-[#ABB2BF] p-4 rounded-md'>
          <h2 className='text-white font-semibold font-fira text-lg'>Message me here</h2>

          <h3 className='text-[#ABB2BF] font-fira text-sm mt-5'>
            <a href="https://www.linkedin.com/in/sujaltamboli/" target="_blank" rel="noopener noreferrer">
              SujalTamboli-linkedin
            </a>
          </h3>

          <h3 className='text-[#ABB2BF] font-fira text-sm mt-2'>
            <a href="mailto:sujaltamboli99@gmail.com">sujaltamboli99@gmail.com</a>
          </h3>
        </div>
      </div>

      {/* ⭐ Media Icons Section */}
      <div ref={mediaRef} className='mt-[120px] flex flex-col items-center'>
        <h3 className='text-white font-fira text-lg font-medium mb-6'>
          media
        </h3>

        <div className='flex flex-row items-center gap-[24px]'>

          {/* LinkedIn */}
          <a
            ref={el => iconsRef.current[0] = el}
            href="https://www.linkedin.com/in/sujaltamboli/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[#ABB2BF] hover:text-[#C778DD] hover:scale-110 transition-all duration-200 text-3xl'
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            ref={el => iconsRef.current[1] = el}
            href="mailto:sujaltamboli99@gmail.com"
            className='text-[#ABB2BF] hover:text-[#C778DD] hover:scale-110 transition-all duration-200 text-3xl'
          >
            <HiMail />
          </a>

          {/* Resume */}
          <a
            ref={el => iconsRef.current[2] = el}
            href="/Sujal_Tamboli_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[#ABB2BF] hover:text-[#C778DD] hover:scale-110 transition-all duration-200 text-3xl'
          >
            <FaFileAlt />
          </a>

        </div>
      </div>

      {/* Divider */}
      <div className='w-full mt-[70px]'>
        <hr className='border-[#ABB2BF]'/>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Contact



