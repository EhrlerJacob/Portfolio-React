import { motion } from 'framer-motion';
import React from 'react'


const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <motion.div 
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Let Me Introduce Myself</p>
            </div>
            <p className='text-xl mt-20'>
                My name is Jacob Ehrler and I am a full-stack developer. I am committed writing
                efficient, reusable and scalable code that can be implemented in even the largest
                of code bases. I have a passion for technology and want to aid in the furthering of 
                technology. I have a knack for creating beautiful user-interfaces as well as a user-friendly 
                experience in all of the applications I develop or play a roll in deploying. 
            </p> <br />

            <p className='text-xl'>
                I am fluent in JavaScript, TypeScript and Python. I am capable of developing and deploying
                full-stack applications in each of these scripting languages, also while intertwining the languages
                into a single application. I like to use each individual scripting language for their strengths so
                using multiple into a single application can help to achieve the perfect product. I take pride in my 
                ability to organize and structure a solid back-end which are built to scale in each application I produce. 
            </p>
        </motion.div>
    </div>
  )
}

export default About;