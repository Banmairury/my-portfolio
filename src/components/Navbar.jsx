import { RiMailSendLine } from "react-icons/ri";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black from-20% via-zine-900 via-80% to-gray-800 to-100% flex justify-between p-5 text-white">
      <h1 className=" text-4xl text-zinc-400">I'M Beer</h1>
      <div className="flex items-center justify-center gap-7">
        <a href="#experience-me" className="text-xl font-medium hover:text-sky-500 ">
        Experience
        </a>
        <a href="#skill-me" className="text-xl font-medium hover:text-sky-500 ">
          Skill
        </a>
        <a href="#project" className="text-xl font-medium hover:text-sky-500 ">
          Project
        </a>
      </div>
      <div className="flex">
        <a href="https://www.linkedin.com/in/b-teerapong" target="_blank">
          <button className=" text-lg flex items-center justify-center w-40 h-10 rounded-lg hover:bg-sky-700 gap-2">
            <AiFillLinkedin />
            Linkedin
          </button>
        </a>
        <a
          href="https://github.com/Banmairury" target="_blank"
          className=" text-lg flex items-center justify-center w-40 h-10 rounded-lg hover:bg-orange-700 gap-2"
        >
          <AiOutlineGithub />
          Github
        </a>
        <a
          href="#contact-me"
          className="scroll-smooth text-lg flex items-center justify-center w-40 h-10 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-2"
        >
          <RiMailSendLine /> Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
