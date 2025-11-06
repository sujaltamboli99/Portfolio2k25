import React, { useLayoutEffect, useRef, useState } from "react";
import logo from "../assets/portfolio-logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { opacity: 1, clearProps: "all" });

      gsap.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 bg-[#282C33] px-8 py-4 z-50 flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <span className="text-2xl font-fira font-bold text-white cursor-pointer">
            Sujal
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-16">
          {[
            ["#home", "home"],
            ["#projects", "works"],
            ["#skills", "skills"],
            ["#about-me", "about-me"],
            ["#contacts", "contacts"],
            ["/Sujal_Tamboli_CV.pdf", "CV", true],
          ].map(([href, label, isExternal]) => (
            <li key={label}>
              <a
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                className="text-lg text-white font-fira hover:text-[#C778DD]"
              >
                <b className="text-[#C778DD]">#</b>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </div>
      </nav>

      {/* ✅ Mobile Sidebar (fixed correctly now) */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-[#1f2329] shadow-lg flex flex-col items-start p-8 space-y-6 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 60 }}
      >
        {[
          ["#home", "home"],
          ["#projects", "works"],
          ["#skills", "skills"],
          ["#about-me", "about-me"],
          ["#contacts", "contacts"],
          ["/Sujal_Tamboli_CV.pdf", "CV", true],
        ].map(([href, label, isExternal]) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : ""}
            className="text-xl text-white font-fira hover:text-[#C778DD]"
          >
            <b className="text-[#C778DD]">#</b>
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;