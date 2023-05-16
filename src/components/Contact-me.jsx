import facebook from "../images/feacbook.png";
import linkin from "../images/linkin.png";
import line from "../images/line.png";



const ContactMe = () => {
  return (
    <div id="contact-me" className="scroll-smooth h-fit bg-gradient-to-r from-black from-20% via-zine-800 via-80% to-gray-700 to-100% pb-10">
      <h2 className=" text-lime-400 text-4xl ">ContactME </h2>
      <div className="flex justify-around">
        <div className="flex flex-col justify-end">
          <h4 className="text-lime-400 ">Contact info</h4>
          <span className="text-lime-400 ">Tel: 093-8575159</span>
          <span className="text-lime-400 ">Email: bammairuruy@gmail.com</span>
          <div className="flex gap-8 mt-4">
          <a href="https://www.facebook.com/beer.rider.16" target="_blank"><img className="w-16 h-16" src={facebook} /></a>
          <a href="https://www.linkedin.com/in/b-teerapong" target="_blank"><img className="w-16 h-16" src={linkin} /></a>
          <a href="https://line.me/ti/p/~budbeer" target="_blank"><img className="w-16 h-16" src={line} /></a>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-6">
          <input type="text" className="bg-transparent text-xl text-yellow-500" placeholder="Your Name"/>
          <input type="email" className="bg-transparent text-xl text-yellow-500" placeholder="Your email address"/>
          <input type="text" className="bg-transparent text-xl text-yellow-500" placeholder="Phone Number"/>
          <textarea className="bg-transparent text-xl text-yellow-500 text-clip " placeholder="How we can help you?"/>
          <button class="rounded-full text-xl bg-blue-500 h-10 w-40">Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
