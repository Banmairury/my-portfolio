import "./styles/App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SkillMe from "./components/Skill-me";
import Project from "./components/Project";
import Experience from "./components/Experience";
import ContactMe from "./components/Contact-me";


function App() {
  

  return (
    <>
      <Navbar/>
      <Profile/>
      <SkillMe/>
      <Project/>
      <Experience/>
      <ContactMe/>
    </>
  );
}

export default App;
