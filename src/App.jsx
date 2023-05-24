import "./styles/App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SkillMe from "./components/Skill-me";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Experience1 from "./components/Experience1";
import ContactMe from "./components/Contact-me";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <SkillMe />
      <Project />
      <Experience1 />
      <ContactMe />
    </>
  );
}

export default App;
