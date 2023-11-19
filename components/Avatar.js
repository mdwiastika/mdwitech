import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={"/final-avatar.png"} width={737} height={678} alt="My Photo" className="translate-z-0 w-full h-full mix-blend-luminosity" />
    </div>
  );
};

export default Avatar;
