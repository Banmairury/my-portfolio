const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black from-20% via-zine-900 via-80% to-gray-800 to-100% flex justify-between p-5 text-white">
      <h1>I'M BEER</h1>
      <div className="">
        <a href="#" className="menu-navbar">
          About
        </a>
        <a href="#" className="menu-navbar">
          Skill
        </a>
        <a href="#" className="menu-navbar">
          Project
        </a>
      </div>
      <div className="">
        <a href="#" className="menu-navbar">Linkedin</a>
        <a href="#" className="menu-navbar">Github</a>
        <a href="#" className="menu-navbar">Contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;
