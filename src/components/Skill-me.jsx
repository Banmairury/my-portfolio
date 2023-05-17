import figma from "../images/figma.png"
import css3 from "../images/css3.png"
import html5 from "../images/html5.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import nodejs from "../images/nodejs.png"
import mysql from "../images/SQLite370.svg.png"
import mongodb from "../images/mongodb.png"

const SkillMe = () => {
  return (
    <div id="skill-me" className="bg-gradient-to-r from-black from-20% via-gray-950 via-80% to-gray-900 to-100% p-10">
    <h2 className=" text-lime-400 text-4xl ">Skills</h2>
      <div className=" h-40  flex justify-center items-center gap-10">
      <img className=" h-20 w-20" src={figma}/>
      <img className=" h-20 w-20" src={html5}/>
      <img className=" h-20 w-20" src={css3}/>
      <img className=" h-20 w-20 rounded-lg" src={javascript}/>
      <img className=" h-20 w-20" src={react}/>
      <img className=" h-20 w-20" src={nodejs}/>
      <img className=" h-20 w-20 rounded-lg bg-white" src={mysql}/>
      <img className=" h-20 w-20 rounded-lg" src={mongodb}/>

    </div>
    </div>
    
  );
};
export default SkillMe;
