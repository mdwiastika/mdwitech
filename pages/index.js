import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import projectsBtn from "../components/projectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="">
        <div className="">
          <h1 className="h1">
            Architecting Dreams <br /> Into <span className="text-accent">Virtual Realities</span>
          </h1>
        </div>
      </div>

      <div className="">Image</div>
    </div>
  );
};

export default Home;
