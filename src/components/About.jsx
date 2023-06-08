import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import './about.css'



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[300px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 500,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[16px]  text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="container-about">
      <motion.div variants={textVariant()}>
        <h2 className={`text-fuchsia-600 ${styles.sectionSubText}`}>A little</h2>
        <h2 className={`${styles.sectionHeadText} abt`}>About me.</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
     
    </section>
  );
};

export default SectionWrapper(About, "about");