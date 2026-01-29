import React, { useLayoutEffect, useRef } from 'react';
import line from '../assets/line-project.png';
import ProjectCard from './ProjectCard';
import chertNodesImg from '../assets/codenode.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Shop from "../assets/shop.png"
import project2 from '../assets/engg info portal.png'
import cal from '../assets/calculator.png'
import project3 from '../assets/self.png'

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Scroll animation that plays on enter & replay when coming back
      const scrollAnim = gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reset play reset", // replay on scroll back
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out"
      });

      // Hover tilt + shadow
      cardsRef.current.forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            rotationX: -5,
            rotationY: 5,
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            duration: 0.3,
            transformOrigin: "center center",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            duration: 0.3,
            transformOrigin: "center center",
          });
        });
      });

      // Restart animation on page reload
      const restartOnLoad = () => {
        scrollAnim.restart();
        ScrollTrigger.refresh();
      };
      window.addEventListener("load", restartOnLoad);

      return () => {
        window.removeEventListener("load", restartOnLoad);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className='flex flex-col items-center mt-[160px] px-8'>

      {/* Section Header */}
      <div className="flex flex-row justify-evenly items-center gap-2 mb-[80px] flex-nowrap w-full">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <h2 className="text-3xl font-fira font-medium text-white">
            <span className="text-[#C778DD]">#</span>projects
          </h2>
          <img src={line} alt="" className="max-w-[80px] sm:w-[50px] md:w-[120px]" />
        </div>
        {/* <button className="border-none text-white font-fira text-lg font-medium cursor-pointer whitespace-nowrap">
          View all
        </button> */}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-[20px] md:gap-[20px]">

        {/* Card 1 */}
        <div ref={el => cardsRef.current[0] = el}>
          <ProjectCard
            image={Shop}
            tags={['React.js' , 'Node.js & Express.js' , 'MongoDB']}
            title="SHOP.CO"
            description="End-to-end e-commerce platform with React, Node.js, Express & MongoDB featuring auth, cart, orders, and Razorpay payments."
            liveLink="https://www.linkedin.com/posts/sujaltamboli_fullstackdevelopment-ecommercewebsite-reactjs-activity-7412017135037718528-fqwb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQ8Wi8Bs_e9HlQ1rb8aoSfLBGjw6FOP7Rk"
            codeLink="https://github.com/sujaltamboli99/SHOP.CO"
          />
        </div>

        {/* Card 2 */}
        <div ref={el => cardsRef.current[1] = el}>
          <ProjectCard
            image={cal}
            tags={['HTML', 'CSS', 'JS']}
            title="calculator"
            description="Built an interactive calculator with a clean UI to perform basic mathematical operations efficiently."
            liveLink="https://sujaltamboli99.github.io/calculator-project/"
            codeLink="https://github.com/sujaltamboli99/calculator"
          />
        </div>

        {/* Card 3 */}
        <div ref={el => cardsRef.current[2] = el}>
          <ProjectCard
            image={project3}
            tags={['React','TailwindCSS','GSAP']}
            title="Portfolio Website"
            description="A developer portfolio built using React and Tailwind CSS, showcasing projects and skills with smooth UI interactions."
            liveLink="https://sujal-portfolio2k25.netlify.app/"
            codeLink="https://github.com/sujaltamboli99/Portfolio2k25"
          />
        </div>

      </div>

    </main>
  )
}

export default Project;




