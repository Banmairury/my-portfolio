import ImgProfile from "../images/TeerapongProfile.png";
import "../styles/Profile.css";
import { FcInTransit, FcNews, FcDebt, FcManager } from "react-icons/fc";
import reactIcon from "../images/react.png";
import cssIcon from "../images/css3.png";
import javascriptIcon from "../images/javascript.png";
import nodejsIcon from "../images/nodejs.png";

const Profile = () => {
  return (
    <div className=" p-10 bg-gradient-to-r from-black from-20% via-zine-900 via-80% to-gray-800 to-100% grid grid-cols-2 h-fit text-white">
      <div className="">
        <h2 className="">Hello, I am</h2>

        <h1 className="flex items-end text-lime-400 text-4xl">
          &#123; Teerapong &#125;
          <FcManager />
        </h1>
        <h2 className="text-gray-200 text-lg">Fullstack Developer</h2>
        <p className="text-gray-200 text-lg">Career switcher</p>
        <p className="text-gray-200 text-lg">I am learner generation thailand #jsd4 </p>
        <div className=" mt-10">
          <h1 className="flex items-end text-lime-400 text-3xl">
            AboutMe&#40; <FcNews /> &#41;
          </h1>
          <p className=" w-9/12 text-gray-300 text-lg">
            I am a learner from Generation's Junior Software Developer Bootcamp
            looking for a full-stack developer position. Previously, I had
            experience Having worked on IP-phones for 7 years, I am experienced
            in teamwork and working well under pressure. I am excited that will
            bring experience and knowledge from the Generation's Junior Software
            Developer Bootcamp project to create good works and develop even
            better in the future.
          </p>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className="avatar">
          <div className="load">
            <img src={reactIcon} />
            <img src={cssIcon} />
            <img src={javascriptIcon} />
            <img src={nodejsIcon} />
          </div>
          <img src={ImgProfile} id="profile" className="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
