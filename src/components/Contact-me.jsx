import facebook from "../images/feacbook.png";
import linkin from "../images/linkin.png";
import line from "../images/line.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "reactjs-popup/dist/index.css";
import Swal from "sweetalert2";
import nycscar from '../images/CoarseOne.gif'

const ContactMe = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const fromName = formData.get("from_name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!fromName) {
      Swal.fire({
        icon: "warning",
        text: "Please enter your name",
      });
      return;
    }
    if (!email) {
      Swal.fire({
        icon: "warning",
        text: "Please enter your email",
      });
      return;
    }
    if (!message) {
      Swal.fire({
        icon: "warning",
        text: "Please enter your message",
      });
      return;
    }

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
          Swal.fire({
            title: `<p >Thank you for your attention.</p>  <p>I will reply as soon as possible.</p> `,
            width: 575,
            padding: '3em',
            color: '#009940',
            textShadow: '4px 4px 4px black',
            background: `#fff url(${nycscar})`,
            //backgroundSize: '100% auto'
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // form.current.reset();
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

          <button
            type="submit"
            className=" text-white rounded-full text-xl bg-blue-500 h-12 w-45 hover:-translate-y-1 ease-out duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
