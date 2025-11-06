import React, { useLayoutEffect, useRef } from 'react';
import line from '../assets/line-project.png';
import SkillDesign from '../assets/skills design.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {

    const skillsSectionRef = useRef();
    const skillBoxesRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Animation for skill boxes
            const anim = gsap.from(skillBoxesRef.current, {
                opacity: 0,
                y: 0,
                scale: 0.95,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: skillsSectionRef.current,
                    start: "top 75%",
                    toggleActions: "play reset play reset", // replay when scroll back
                }
            });

            // Ensure it restarts after reload
            const restartOnLoad = () => {
                anim.restart();
                ScrollTrigger.refresh();
            };
            window.addEventListener("load", restartOnLoad);

            return () => {
                window.removeEventListener("load", restartOnLoad);
            };
        }, skillsSectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={skillsSectionRef} className='flex flex-col items-center mt-[100px] px-8'>
            {/* Section Header */}
            <div className='flex flex-row gap-[12px] items-center mr-[100px] mb-[60px]'>
                <h2 className='text-3xl font-fira font-medium text-white'>
                    <span className='text-[#C778DD]'>#</span>skills
                </h2>
                <img src={line} alt="" className='w-[120px]' />
            </div>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-[30px] max-w-[1100px] ml-[30px] m-[15px]'>

                {/* Skill Image */}
                <div className='flex justify-center'>
                    <img src={SkillDesign} alt="Skill Design" className='w-[300px] md:w-[400px]' />
                </div>

                {/* Skills Grid (NO CHANGE) */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-200 font-mono p-6 rounded-lg'>

                    {/* Column 1 */}
                    <div className='space-y-4'>
                        <div ref={el => skillBoxesRef.current[0] = el} className='skillBox border border-gray-600 rounded-md p-3 w-44'>
                            <h3 className='font-semibold mb-2 text-white'>Languages</h3>
                            <div className='border-t border-[#ABB2BF] mt-1 mb-2'></div>
                            <p>C C++ JavaScript Python</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className='space-y-4'>
                        <div ref={el => skillBoxesRef.current[1] = el} className='skillBox border border-gray-600 rounded-md p-3 w-44'>
                            <h3 className='font-semibold mb-2 text-white'>Frontend</h3>
                            <div className='border-t border-[#ABB2BF] mt-1 mb-2'></div>
                            <p>HTML CSS Tailwind CSS React.js GSAP</p>
                        </div>
                        <div ref={el => skillBoxesRef.current[2] = el} className='skillBox border border-gray-600 rounded-md p-3 w-44'>
                            <h3 className='font-semibold mb-2 text-white'>Backend</h3>
                            <div className='border-t border-[#ABB2BF] mt-1 mb-2'></div>
                            <p>Node.js Express.js</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className='space-y-4'>
                        <div ref={el => skillBoxesRef.current[3] = el} className='skillBox border border-gray-600 rounded-md p-3 w-44'>
                            <h3 className='font-semibold mb-2 text-white'>Databases</h3>
                            <div className='border-t border-[#ABB2BF] mt-1 mb-2'></div>
                            <p>MySQL MongoDB</p>
                        </div>
                        <div ref={el => skillBoxesRef.current[4] = el} className='skillBox border border-gray-600 rounded-md p-3 w-44'>
                            <h3 className='font-semibold mb-2 text-white'>Tools</h3>
                            <div className='border-t border-[#ABB2BF] mt-1 mb-2'></div>
                            <p>VS Code Git GitHub Figma Vite</p>
                        </div>
                        <div ref={el => skillBoxesRef.current[5] = el} className='skillBox border border-gray-600 rounded-md p-3 w-44'>
                            <h3 className='font-semibold mb-2 text-white'>Other</h3>
                            <div className='border-t border-[#ABB2BF] mt-1 mb-2'></div>
                            <p>REST API Responsive Design UI/UX</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Skill;


