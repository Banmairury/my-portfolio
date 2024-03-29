import project0 from '../images/project-2.png'
import project1 from '../images/project-1.png'
import project3 from '../images/project-3.png'

const Project = () => {
  return (
    <div id="project" className="bg-gradient-to-r from-black to-gray-500 p-10">
      <h2 className=" text-lime-400 text-4xl ">Project</h2>
      <div className="h-60  flex justify-around items-center">
        <div className=" bg-gray-400 w-60 h-40 rounded-lg text-center text-xl hover:-translate-y-3 ease-out duration-300 hadow-lg hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] "> <a href='https://replit.com/@TeerapongB/JSD0452-Find-Your-Hat' target='blank'><img className='rounded-lg w-60 h-40' src={project0}></img></a></div>
        <div className=" bg-gray-400 w-60 h-40 rounded-lg text-center text-xl hover:-translate-y-3 ease-out duration-300 hadow-lg hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"> <a href='https://career-changer-react-assessment-banmairury.vercel.app/' target='blank'><img className='rounded-lg w-60 h-40' src={project1}></img></a></div>
        <div className=" bg-gray-400 w-60 h-40 rounded-lg text-center text-xl hover:-translate-y-3 ease-out duration-300 hadow-lg hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"> <a href='https://gaintrack.online' target='blank'><img className='rounded-lg w-60 h-40' src={project3}></img></a></div>
        
      </div>
    </div>
  );
};
export default Project;
