import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto
      "
        >
          <motion.h1 className="h1" variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden">
            Forging Imagination <br /> Into <span className="text-accent">Digital Experiences</span>
          </motion.h1>
          <motion.p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden">
            <b>&quot;Forging Imagination into Digital Experiences&quot;</b> encapsulates the essence of a creative force dedicated to shaping innovative and immersive digital realms
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div className="hidden xl:flex" variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="hidden xl:block w-[1200px] h-full absolute right-0 bottom-0">
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: "easeInOut" }} className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></motion.div>
        <ParticlesContainer />
        <motion.div className=" h-full w-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] mix-blend-luminosity" variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: "easeInOut" }}>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
