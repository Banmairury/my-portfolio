import ImgProfile from "../images/TeerapongProfile.png"



const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-black from-20% via-zine-900 via-80% to-gray-800 to-100% grid grid-cols-2 h-96 text-white">
      <div className="">
      <h2 className="">Hello, I am</h2>
        <h1 className=" text-lime-400 text-4xl">()=&#62; &#123; Teerapong &#125;</h1>
        <h2>Fullstack Developer</h2>
        <p>Career switcher</p>
        <p>I am learner  generation thailand #jsd4  </p>
      </div>
      <div className=" text-white grid justify-items-center ">
        <img src={ImgProfile} className="w-60"/>
      </div>
      <div className="">
        <h1 className=" text-lime-400 text-3xl">aboutMe&#40; &#41;</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus hic molestias ipsam perferendis. Vitae voluptate totam at. Vero repellendus animi, omnis quae saepe, neque officia totam, officiis nobis labore modi veniam cum obcaecati aperiam asperiores dolorem magnam eius explicabo.</p>
      </div>

    </div>
  );
};

export default Profile;
