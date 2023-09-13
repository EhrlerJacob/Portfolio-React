import React from 'react';
import congoStore from "../assets/Portfolio/congostore.png";
import packFit from "../assets/Portfolio/packfit.png";
import { motion } from 'framer-motion';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: congoStore,
            href: "https://github.com/mdejac/congoStore"
          },
          {
            id: 2,
            src: packFit,
            href: "https://github.com/EhrlerJacob/PackFit",
            link: "https://packfitness.netlify.app/",
          },
    ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">My Favorite Projects To Date</p>
        </div>

        <motion.div 
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {portfolios.map(({ id, src, href, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="application picture"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150">
                  Demo
                </a>
                <a href={href}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150"
                  >
                    Code
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;