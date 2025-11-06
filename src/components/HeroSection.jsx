import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import herodesign from "../assets/hero-man-img.png";

const HeroSection = () => {
  const comp = useRef();
  const textRef = useRef();
  const imgRef = useRef();
  const quoteRef = useRef();

  const runAnimation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(textRef.current.querySelector("h2"), {
      opacity: 0,
      x: -100,
      duration: 0.8 // from left
    })
      .from(
        textRef.current.querySelector("p"),
        { opacity: 0, x: -100 },
        "-=0.2"
      )
      .from(
        textRef.current.querySelector("button"),
        {
          opacity: 0.8,
          duration: 0.8,
          ease: "back.out(3)",
        },
        "-=0.4"
      )
      .from(
        imgRef.current,
        { opacity: 0, x: 100, duration: 1 },
        "-=1.3"
      )
      .from(
        quoteRef.current,
        { opacity: 0, y: 80, duration: 1 },
        "-=0.8"
      );
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [textRef.current, imgRef.current, quoteRef.current],
        { opacity: 1, clearProps: "all" }
      );
      runAnimation();
    }, comp);

    // Re-run animation cleanly on reload
    const reloadAnim = () => {
      ctx.revert();
      gsap.context(() => {
        runAnimation();
      }, comp);
    };

    window.addEventListener("load", reloadAnim);
    return () => {
      window.removeEventListener("load", reloadAnim);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={comp}>
      <main className="flex flex-col md:flex-row justify-center items-center mt-[100px] gap-[120px] px-4 md:px-8">
        {/* Text Section */}
        <div ref={textRef} className="flex flex-col gap-8 md:gap-8">
          <h2 className="text-4xl font-fira font-semibold text-white">
            Sujal is a <span className="text-[#C778DD]">web developer</span>
          </h2>
          <p className="text-[#ABB2BF] text-md font-fira">
            I craft responsive websites where technologies <br /> meet creativity
          </p>
          <a href="#contacts">
            <button className="p-2 border-2 border-[#C778DD] font-fira text-white text-lg font-medium w-40 text-center cursor-pointer hover:bg-[#C778DD] hover:text-black transition-all duration-300">
              Contact me!!
            </button>
          </a>
        </div>

        {/* Image */}
        <div ref={imgRef} className="flex justify-center">
          <img
            src={herodesign}
            alt="Hero"
            className="w-[400px] sm:w-[350px] xs:w-[280px]"
          />
        </div>
      </main>

      {/* Footer Quote */}
      <footer className="flex justify-center mt-20 px-4 md:px-0">
        <div ref={quoteRef} className="relative flex flex-col items-start">
          <div className="border border-[#ABB2BF] px-12 py-6 max-w-2xl">
            <p className="text-white font-fira text-lg">
              “Simplicity is the soul of efficiency.”
            </p>
          </div>

          <div className="absolute -bottom-13 right-0 border border-[#ABB2BF] px-6 py-4 bg-[#282C33]">
            <p className="text-[#ABB2BF] font-fira text-sm">— Austin Freeman</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;






