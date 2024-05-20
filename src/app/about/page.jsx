"use client"
import { motion } from "framer-motion";

const AboutPage = () => {
    return(
    
    
    <motion.div
     className="h-full" 
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration: 1}}>
     
      {/* CONTAINER */}
      <div className="">

{/* TEXT CONTAINER */}
<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
  
  {/* BIOGRAPHY CONTAINER */}
  <div className="flex flex-col gap-12 justify-center">
    <hi>BIOGRAPHY </hi>

     {/* BIOGRAPHY DEC*/}
    <p>
     I am an enthusiastic and results-driven web developer
      with a strong background in creating and maintaining
       websites and applications. My expertise lies in coding, 
       debugging, and optimizing user experiences.
      I am committed to ensuring seamless navigation
       and delivering high-quality results
   
       </p>

       <span>
        I take responsibility on improving my skill on the web-development environment 
       </span>

         {/* BIOGRAPHY SIGN*/}
        <div className=""></div>

          {/* BIOGRAPHY SCROLL SVG*/}
  </div>

   {/* SKILLS CONTAINER */}
   <div className="">SKILLS</div>

    {/* EXPERIENCE CONTAINER */}
  <div className="">EXPERIENCE</div>

</div>


{/* SVG CONTAINER */}
<div className="hidden">

</div>
      </div>
     </motion.div>
    )
  };
  
  export default AboutPage;