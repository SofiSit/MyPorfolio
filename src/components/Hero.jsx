import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import './hero.css'

const Hero = () => {



  return (
    <>
    
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute  inset-0  top-[120px] max-w-7xl  mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center  mt-5'>
          <div className='w-3 h-3 rounded-full bg-[#915eff]' />
          <div className='w-0.5 sm:h-60 h-20 violet-gradient' />
        </div>
        <div>
          <h1 className={`h1-intro `}>Hi, I'm  <span className='h1-intro '> Sofía</span></h1>
          
          <p className={`${styles.heroSubText} text-fuchsia-600`}> And I'm  <br  className='sm:block font-mano hidden p-front'/>Front End Developer<br  className='sm:block hidden'/> </p>
        </div>
      </div>
        <ComputersCanvas />
       
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    
   
    </section>
    <div className="bubbles">
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 28 }}></span>
      </div>
    </>
   
  )
}

export default Hero