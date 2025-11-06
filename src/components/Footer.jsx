import React from 'react'
import logo from '../assets/portfolio-logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-0 mt-5 px-8'>
      <div className='flex flex-row justify-center items-center gap-[230px] w-full'>
        <div className='flex flex-col justify-center gap-1'>
          <div className='flex flex-row gap-2 items-center'>
            <img className='h-5 w-5' src={logo} alt="logo" />
            <h2 className='text-white font-fira font-medium text-xl'>Sujal</h2>
          </div>
          <p className='text-white font-fira text-sm'>web developer</p>
        </div>
      </div>

      <div className='flex justify-center items-center mt-5'>
        <p className='text-[#ABB2BF] text-sm font-fira font-medium'>
          © Copyright 2025. Made by Sujal
        </p>
      </div>
    </footer>
  )
}

export default Footer

