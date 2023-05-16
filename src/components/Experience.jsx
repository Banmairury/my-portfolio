import { FcLibrary, FcVlc, FcRating, FcProcess } from "react-icons/fc";
const Experience = () => {
  return (
    <div id="experience-me" className="h-fit bg-black text-lime-400  p-10">
      <h2 className="text-4xl">Experience</h2>
      {/* 1 */}
      <div className="flex justify-around items-center">
        {/* right */}
        <div className=" bg-black w-40 h-40"></div>
        {/* left */}
        <div className=" bg-black w-2/5 h-auto">
          <h3 className=" text-3xl">2023</h3>
          <span className=" text-xl">Feb - May</span>
          <br />
          <span className=" text-xl flex items-center">
            Generation Thailand
            <FcLibrary />
          </span>

          <span className=" text-xl">Training - Junior Software Developer</span>
          <br />
          <span className=" text-xl">
            Program Cohort 4(Full-Stack Web Developer)
          </span>

          <ul>
            <li className="flex items-center">
              <FcProcess />
              Learn GIT & GitHub Source Control
            </li>
            <li className="flex items-center">
              <FcProcess />
              Learn SCRUM Agile Software Development
            </li>
            <li className="flex items-center">
              <FcProcess />
              Build front-end with HTML ,CSS, JavaScript
            </li>
            <li className="flex items-center">
              <FcProcess />
              Build front-end with react
            </li>
            <li className="flex items-center">
              <FcProcess />
              Learn Behaviours and Mindsets
            </li>
            <li className="flex items-center">
              <FcProcess />
              Create a backend project with node.js with express
            </li>
            <li className="flex items-center">
              <FcProcess />
              Create a database with sql(MySql) and nosql (mongodb)
            </li>
          </ul>
        </div>
      </div>
      {/* 2 */}
      <div className="flex justify-around items-center">
        {/* right */}
        <div className=" bg-black w-2/5 h-auto">
          <h3 className=" text-3xl">2014 - 2021</h3>
          <span className=" text-xl flex items-center">
            CHEVALIER ITECH THAI CO., LTD
            <FcLibrary />
          </span>

          <span className=" text-xl">Engineer Telecom</span>
          <br />

          <p></p>
          <ul className=" list-inside list-decimal ">
            <li>
              Installation, modification and maintenance of IP telephone systems
              (VOIP).
            </li>
            <li>
              Set up a service network system and maintenance (Avaya PABX).
            </li>
            <li>
              Produce weekly and monthly office phone data reports to send to
              Krungsri Auto for data analysis. Use of phones by employees of
              various departments.
            </li>
            <li>
              Coordinate with each customer department. To support and solve
              problems that arise about the system.
            </li>
          </ul>
        </div>
        {/* left */}
        <div className=" bg-black w-40 h-40"></div>
      </div>
      {/* 3 */}
      <div className="flex justify-around items-center mt-10">
        {/* right */}
        <div className=" bg-black w-40 h-40"></div>
        {/* left */}
        <div className=" bg-black w-2/5 h-auto">
          <h3 className=" text-3xl">2012 -2013</h3>
          <span className=" text-xl">Feb - May</span>
          <br />
          <span className=" text-xl flex items-center">
            Tarnas Co., Ltd.
            <FcLibrary />
          </span>
          <span className=" text-xl">Project Engineer - Tarnas Co., Ltd.</span>
          <br />
          <ul className=" list-inside list-decimal ">
            <li>Manage of the project tracking progress.</li>
            <li>
              Estimate the cost of materials and installation of Fiber optic
              equipment.
            </li>
            <li>
              Coordinate with contractors/contractors/consultants. Participate
              in problem solving.
            </li>
            <li>
              Check the quality of work. to meet the conditions of employment
              Coordinate with related agencies. inside and outside.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
