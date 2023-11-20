import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiMysql, SiPostman, SiPhp, SiLaravel, SiNginx } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Stack",
        icons: [<FaHtml5 key="faHtml" />, <FaCss3 key="FaCss3" />, <FaJs key="FaJs" />, <FaReact key="FaReact" />, <SiNextdotjs key="SiNextdotjs" />],
      },
      {
        title: "Backend Stack",
        icons: [<SiPostman key="SiPostman" />, <SiPostgresql key="SiPostgresql" />, <SiMysql key="SiMysql" />, <SiPhp key="SiPhp" />, <SiLaravel key="SiLaravel" />, <SiNginx key="SiNginx" />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Politama Awards - Web Design",
        stage: "2022",
      },
      {
        title: "Menyusul - hehe :)",
        stage: "2023 - 9999",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Backend Developer - PT. Otak Kanan",
        stage: "2021 - 2021",
      },
      {
        title: "Web Developer - Minarsih TECH",
        stage: "2022 - 2023",
      },
      {
        title: "Fullstack Developer - Freelance",
        stage: "2021 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - SMK Negeri 2 Mojokerto",
        stage: "2020",
      },
      {
        title: "Informatics Engineering - Electronic Engineering Polytechnic Institute",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState("0");
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px] mix-blend-luminosity">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            A Programmer&apos;s <span className="text-accent">Journey</span> in Code.
          </motion.h2>
          <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Embark on coding adventures where the boundaries between imagination and functionality blur. As a programmer, I transform dreams into code, breathing life into digital realms through innovative solutions.
          </motion.p>
          <motion.div variants={fadeIn("right", 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={1} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px] lg:mt-10">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, item_index) => {
              return (
                <div className={`${index == item_index && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} key={item_index} onClick={() => setIndex(item_index)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start bg-purple-500/10 rounded-md lg:px-3">
            {aboutData[index].info.map((item, item_index) => {
              return (
                <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" key={item_index}>
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, item_index) => {
                      return (
                        <div className="text-2xl text-white" key={item_index}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
