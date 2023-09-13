import React from 'react'
import Hero from "../assets/jacobhero.jpeg"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>
            <motion.div 
            className='flex flex-col justify-center h-full mt-10 max-md:mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
            >
                <h2 className='text-4xl sm:text-7xl sm:mt-20font-bold text-white'>
                    Full-Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                     Hello, World! I am a full-stack developer in JavaScript, TypeScript, and Python. <br/>
                    I have a passion for writing code, as well as delivering <br/>
                    a great UI/UX using front-end technologies like React and Tailwind, <br/>
                    which is what this porfolio site is made of here.   
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500}
                    className=' group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
                    cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}
                            className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
                <img 
                src={Hero} 
                alt='jacob picture'
                className='rounded-2xl mx-auto w-2/3 md:w-2/3 lg:' />
            </motion.div>
        </div>
    </div>
  )
}

export default Home;