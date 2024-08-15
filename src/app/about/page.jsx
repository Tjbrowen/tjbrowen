"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutPage = () => {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  const containerRef = useRef ()

  const {scrollYProgress} = useScroll ({container:containerRef})
  const skillRef = useRef()
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
   
    return(
    
    
    <motion.div
     className="h-full" 
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration: 1}}>
     
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>

{/* TEXT CONTAINER */}
<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
  
  {/* BIOGRAPHY CONTAINER */}
  <div className="flex flex-col gap-12 justify-center">
    <h1 className="font-bold text-2xl">BIOGRAPHY </h1>

     {/* BIOGRAPHY DEC*/}
    <p className="text-lg">
     I am an enthusiastic and results-driven web developer
      with a strong background in creating and maintaining
       websites and applications. My expertise lies in coding, 
       debugging, and optimizing user experiences.
      I am committed to ensuring seamless navigation
       and delivering high-quality results
   
       </p>

       <span className="italic">
        I take responsibility on improving my skill on the web-development environment 
       </span>

         {/* BIOGRAPHY SIGN*/}
        <div className="self-end">

  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="385.000000pt" height="177.000000pt" viewBox="0 0 906.000000 704.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,704.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3344 4147 c-56 -86 -99 -124 -156 -141 -30 -8 -62 -24 -71 -34 -20
-22 -22 -81 -4 -106 12 -16 10 -27 -11 -79 -56 -139 -74 -313 -40 -384 19 -41
67 -42 186 -2 234 77 321 137 284 196 -4 7 -79 61 -166 120 -88 60 -164 116
-169 124 -7 12 0 31 32 77 45 67 58 73 164 76 l52 1 48 -145 c27 -80 82 -261
122 -404 122 -422 173 -571 207 -605 28 -28 58 -32 58 -9 0 6 -11 21 -24 33
-28 25 -100 243 -190 570 -30 110 -69 245 -85 300 -17 54 -29 100 -28 101 1 1
43 -6 92 -16 124 -25 204 -57 215 -83 12 -35 -15 -87 -75 -143 -64 -60 -68
-80 -26 -145 29 -46 93 -95 187 -142 29 -14 107 -67 174 -117 114 -86 121 -93
106 -108 -12 -13 -39 -18 -102 -21 -78 -3 -87 -1 -100 18 -20 28 -28 27 -75
-11 -42 -34 -43 -36 -29 -58 16 -25 262 -8 336 25 63 27 69 31 73 51 2 10 22
46 44 79 23 33 58 93 78 133 l36 73 58 -133 c71 -160 86 -179 153 -186 46 -4
51 -2 71 26 17 25 21 44 21 109 0 66 -5 88 -29 138 -16 33 -42 75 -58 94 -26
31 -35 34 -91 37 -34 2 -70 8 -81 14 -42 22 -55 13 -89 -62 -36 -79 -124 -238
-132 -238 -3 0 -16 25 -30 56 -51 112 -55 119 -74 119 -39 0 -41 -28 -7 -100
17 -37 30 -70 28 -72 -2 -1 -45 28 -95 66 -51 38 -130 93 -177 121 -95 58
-142 100 -151 137 -6 21 1 33 40 69 49 47 86 109 86 144 0 41 -30 80 -81 105
-43 22 -95 38 -282 86 -37 10 -43 17 -61 76 l-7 23 228 2 c228 3 228 3 231 26
l3 22 -239 0 -240 0 -29 48 c-15 26 -30 56 -33 67 -11 38 -45 30 -76 -18z
m136 -572 c0 -7 -9 -20 -19 -29 -26 -24 -191 -94 -268 -114 -59 -16 -64 -16
-80 1 -34 34 -17 217 31 332 l15 36 161 -107 c88 -59 160 -112 160 -119z
m1163 -217 c32 -17 67 -106 67 -170 0 -62 -9 -75 -40 -58 -21 11 -51 70 -96
189 l-24 63 37 -7 c21 -4 46 -11 56 -17z"/>
<path d="M5834 3526 c-3 -9 4 -31 15 -50 18 -28 85 -179 122 -275 11 -27 15
-29 -71 40 -123 98 -296 193 -376 205 -24 3 -57 1 -74 -4 l-30 -11 0 39 c0 27
-5 42 -18 49 -28 15 -52 -5 -52 -42 0 -19 -8 -39 -19 -48 -10 -9 -21 -35 -25
-59 -4 -23 -14 -56 -23 -74 l-17 -31 -9 35 c-4 19 -17 58 -28 85 -10 28 -19
58 -19 67 0 19 -28 38 -48 31 -6 -3 -31 -37 -54 -76 -32 -56 -103 -164 -135
-206 -14 -19 -73 167 -73 229 0 38 -22 63 -51 58 -18 -2 -25 -10 -27 -30 -4
-33 53 -269 76 -318 20 -42 62 -52 94 -23 25 22 105 140 143 211 16 29 32 49
36 45 4 -5 17 -41 28 -82 23 -82 43 -111 77 -111 23 0 68 45 79 80 5 16 10 18
24 10 20 -10 61 12 61 34 0 17 39 52 68 61 55 16 229 -68 392 -191 89 -68 117
-84 129 -76 30 19 15 75 -70 257 -82 175 -109 212 -125 171z"/>
</g>
</svg>


 
        </div>

          {/* BIOGRAPHY SCROLL SVG*/}
            
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
  </div>

   {/* SKILLS CONTAINER */}
   <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
     {/* SKILLS TITLE */}
    <motion.h1 
    initial={{x:"-300px"}}
     animate= {isSkillRefInView ? {x: 0} : {} }
     transition={{delay: 0.2}}
     className="font-bold text-2xl"
     >
      SKILLS 
      </motion.h1>

    {/* SKILLS LIST */}

    <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML 5</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
    </motion.div>

      {/* SKILL SCROLL SVG */}
      <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
    
    </div>



    {/* EXPERIENCE CONTAINER */}
    <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
      {/* EXPERIENCE TITLE */}
      <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>

         {/* EXPERIENCE LIST */}
         <div className="flex flex-col gap-6 justify-center">
           
         </div>
          
           {/* EXPERIENCE ITEM */}
           <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                 {/* job title */}
                 <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Software Developer</div>

                 
                 {/* job des */}
                 <div className="p-3 text-sm italic">
                  Designing and maintaining websites</div>

                 
                 {/* job date */}
                 <div className="text-red-400 text-sm font-semibold">
                  2022 - Present</div>
                 {/* company name */}
                 <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  IDEV Digital</div>

              </div>
            {/* center */}
            <div className="w-1/6 ">
             
             {/* line */}
             <div className=" flex-box w-1 h-full bg-gray-600 rounded relative">
               {/* circle line */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
               
              </div>
             </div>
            </div>
             {/* right */}
             <div className="w-1/3 "></div>
           </div>
           <div className="h-5">
           {/* EXPERIENCE ITEM */}
           <div className="flex justify-between h-68  ">
              {/* left */}
              <div className="w-1/3">
                 

              </div>
            {/* center */}
            <div className="w-1/6 ">
             
             {/* line */}
             <div className="w-1 h-full bg-gray-600 rounded relative">
               {/* circle line */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
               
              </div>
             </div>
            </div>
             {/* right */}
             <div className="w-1/3 ">
              {/* job title */}
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Assistant Project Manager 
              </div>

                 
             {/* job des */}
         <div className="p-3 text-sm italic">
         Ensure that projects are completed on time, 
        within budget, and meet all the objectives and 
        requirements set by the
        client. This involves creating and managing a 
        detailed project plan, assigning tasks to team 
       members, and monitoring progress throughout 
       the project lifecycle.
        Creating a progress report and presenting it at 
      the monthly site meetings. ordering materials on 
     time. Payroll Processing, Invoicing, Accounts 
    Receivable and Payable Recordkeeping</div>


          {/* job date */}
       <div className="text-red-400 text-sm font-semibold">
         2018 - 2022</div>
         {/* company name */}
         <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
         The Curve Behind Trading</div>
             </div>
           </div>
           </div>
    </div>
    </div>


{/* SVG CONTAINER */}
<div className=" hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
<Brain scrollYProgress={scrollYProgress}/>
</div>
      </div>
     </motion.div>
    )
  };
  
  export default AboutPage;
