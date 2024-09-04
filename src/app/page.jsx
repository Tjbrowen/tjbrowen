"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const Homepage = () => {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);
  
  return (
    <motion.div
      className="h-full overflow-scroll" 
      initial={{y:"-200vh"}}
      animate={{y:"0%"}} 
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mt-10">
          <Image 
            src="/hero.png" 
            alt="Hero Image" 
            fill 
            className="object-contain max-w-[400px] max-h-[400px]" 
            sizes="(max-width: 640px) 100vw, 50vw" 
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Shaping Digital Journeys, Crafting Future.
          </h1>

          {/* DESC */}
          <p className="md:text-xl">
            Producing Clean Code: Write efficient code based on specifications.
            Code Readability and Maintainability: I believe that clean code is essential for collaboration.
            I use descriptive variable names, avoid magic numbers, and provide thorough comments.
            My goal is to make the codebase accessible to other developers. 
            Continuous Learning and Adaptability: As a lifelong learner, I stay updated with industry trends.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/about">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
