import React from 'react'
import javascript from "../assets/javascript.png"
import typescript from '../assets/typescript.png';
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import react from '../assets/react.png';
import flask from '../assets/flask.png';
import node from '../assets/node.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';
import postman from '../assets/postman.png';
import github from '../assets/github.png';
import { motion } from 'framer-motion';


const Experience = () => {

    const technologies = [
        {
            id:1,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id:2,
            src: typescript,
            title: "TypeScript",
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: python,
            title: "Python",
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id:5,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id:6,
            src: tailwind,
            title: "Tailwind CSS",
            style: 'shadow-cyan-300'
        },
        {
            id:7,
            src: bootstrap,
            title: "Bootstrap",
            style: 'shadow-purple-500'
        },
        {
            id:8,
            src: react,
            title: "ReactJS",
            style: 'shadow-blue-500'
        },
        {
            id:9,
            src: flask,
            title: "Flask",
            style: 'shadow-white'
        },
        {
            id:10,
            src: node,
            title: "NodeJS",
            style: 'shadow-green-500'
        },
        {
            id:11,
            src: mysql,
            title: "MySQL",
            style: 'shadow-sky-400'
        },
        {
            id:12,
            src: mongodb,
            title: "MongoDB",
            style: 'shadow-green-500'
        },
        {
            id:13,
            src: postman,
            title: "Postman",
            style: 'shadow-orange-500'
        },
        {
            id:14,
            src: github,
            title: "GitHub",
            style: 'shadow-white'
        },
    ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='max-sm:mt-40'>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Langauges, frameworks, and technologies I have worked with</p>
        </div>

        <motion.div 
        className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
            }}>
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;