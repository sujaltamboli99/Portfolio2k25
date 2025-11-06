import React, { useLayoutEffect, useRef } from 'react';
import Line from '../assets/line-project.png';
import AboutMan from '../assets/About img.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

  // refs
  const aboutSectionRef = useRef();
  const headingRef = useRef();
  const para1Ref = useRef();
  const para2Ref = useRef();
  const para3Ref = useRef();
  const aboutImageRef = useRef();

useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 80%",
        toggleActions: "play reset play reset", // replay on scroll back
      }
    });

    // 1️⃣ Heading
    tl.from(headingRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.out",
    })

    // 2️⃣ Para 1
    .from(para1Ref.current, {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: "power3.out",
    })

    // 3️⃣ Para 2
    .from(para2Ref.current, {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: "power3.out",
    })

    // 4️⃣ Para 3
    .from(para3Ref.current, {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: "power3.out",
    })

    // 5️⃣ Image (only after ALL para complete)
    .from(aboutImageRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power3.out",
    });

    // Restart timeline on page reload
    const restartOnLoad = () => {
      tl.restart();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", restartOnLoad);

    return () => window.removeEventListener("load", restartOnLoad);
  }, aboutSectionRef);

  return () => ctx.revert();
}, []);



  return (
    <main ref={aboutSectionRef} className='flex flex-col items-center mt-[100px] px-8'>
      
      {/* Section Header */}
      <div className='flex flex-row items-center gap-[12px] mr-[100px] mb-[60px] flex-nowrap'>
        <h2 ref={headingRef} className='text-3xl font-fira font-medium text-white whitespace-nowrap'>
          <span className='text-[#C778DD]'>#</span>about-me
        </h2>
        <img src={Line} alt="" className='w-[120px]' />
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-[40px]'>

        {/* LEFT TEXT BLOCK */}
        <div className='flex flex-col gap-[24px] justify-center w-full max-w-[560px] mt-[80px]'>

          <p ref={para1Ref} className='text-[#ABB2BF] font-fira text-sm'>
            Hey there, I'm Sujal!
          </p>

          <p ref={para2Ref} className='text-[#ABB2BF] break-words text-sm font-fira leading-[1.625] md:text-sm'>
            I'm a self-taught web developer from Solapur, India, who loves turning ideas into beautiful, functional websites. I enjoy crafting responsive designs and smooth user experiences that make the web a little better each day.
          </p>

          <p ref={para3Ref} className='text-[#ABB2BF] font-fira text-sm leading-[1.625]'>
            For more than a year, I've been exploring the world of web development — learning, creating, and growing with every project. I'm always curious about new technologies and love experimenting with fresh tools to keep improving my craft.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div ref={aboutImageRef} className='flex justify-center items-center'>
          <img src={AboutMan} alt="About Me" className='w-[400px] sm:w-[350px] xs:w-[280px]' />
        </div>

      </div>
    </main>
  );
};

export default AboutMe;


