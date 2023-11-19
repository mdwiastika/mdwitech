import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/marcel-dwi-astika-6b93a0260/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://www.github.com/mdwiastika"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://www.youtube.com/channel/UC_l1cOL_9BUtJPUoQW7abIw"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={"https://www.instagram.com/marcelastika"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
