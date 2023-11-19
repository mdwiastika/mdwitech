import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="w-full h-full">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto
        "
        >
          <h1 className="h1">
            Forging Imagination <br /> Into <span className="text-accent">Digital Experiences</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            <b>&quot;Forging Imagination into Digital Experiences&quot;</b> encapsulates the essence of a creative force dedicated to shaping innovative and immersive digital realms
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div className="" variants={fadeIn("down", 0.4)} intial="hidden" animate="show" exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="">Image</div>
    </div>
  );
};

export default Home;
