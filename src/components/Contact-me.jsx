import facebook from "../images/feacbook.png";
import linkin from "../images/linkin.png";
import line from "../images/line.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tszf911",
        "template_jhbmtrf",
        form.current,
        "JGISZraFL72R7oi-S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact-me"
      className=" p-10 scroll-smooth h-fit bg-gradient-to-r from-black from-20% via-zine-800 via-80% to-gray-700 to-100% pb-10"
    >
      <h2 className=" text-lime-400 text-4xl ">ContactME </h2>
      <div className="flex justify-around">
        <div className="flex flex-col justify-end">
          <h4 className="text-lime-400 ">Contact info</h4>
          <span className="text-lime-400 ">Tel: 093-8575159</span>
          <span className="text-lime-400 ">Email: bammairuruy@gmail.com</span>
          <div className="flex gap-8 mt-4">
            <a href="https://www.facebook.com/beer.rider.16" target="_blank">
              <img
                className="w-16 h-16 hover:-translate-y-3 ease-out duration-300"
                src={facebook}
              />
            </a>
            <a href="https://www.linkedin.com/in/b-teerapong" target="_blank">
              <img
                className="w-16 h-16 hover:-translate-y-3 ease-out duration-300"
                src={linkin}
              />
            </a>
            <a href="https://line.me/ti/p/~budbeer" target="_blank">
              <img
                className="w-16 h-16 hover:-translate-y-3 ease-out duration-300"
                src={line}
              />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 mt-6"
        >
          <input
            type="text"
            name="from_name"
            className="bg-transparent text-xl text-yellow-500"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className="bg-transparent text-xl text-yellow-500"
            placeholder="Your email address"
          />
          <textarea
            name="message"
            className="bg-transparent text-xl text-yellow-500 text-clip "
            placeholder="How we can help you?"
          />
          <Popup
            trigger={
              <button
                type="submit"
                className=" text-white rounded-full text-xl bg-blue-500 h-12 w-45 hover:-translate-y-1 ease-out duration-300"
              >
                Send Message
              </button>
            }
            position="right center"
          >
            <div>
              Thank you for your interest. I will contact you back as soon as
              possible.{" "}
            </div>
          </Popup>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
