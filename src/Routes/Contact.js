import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hr7xaxd",
        "template_v3cck5y",
        form.current,
        "HeR-toHgc4utB7DMC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h1 className="text-center text-3xl my-4">Contact(HireMe);</h1>
      <div className=" md:flex max-w-[950px] w-full h-screen mx-auto justify-between">
        <div className="">
          <form ref={form} onSubmit={sendEmail} className="">
            <label className="bg-slate-900 text-white rounded px-5 py-1 mx-5">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="my-5 py-1 mx-5 px-12 md:px-24"
              placeholder="Your Name"
            />
            <br />
            <label className="bg-slate-900 text-white rounded px-5 py-1 mx-5">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="my-5 py-1 mx-5 px-12 md:px-24"
              placeholder="Your Email id"
            />
            <br />
            <label className="bg-slate-900 text-white rounded px-5 py-1 mx-5">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message"
              className="px-12 md:px-24"
            />
            <br />
            <input
              type="submit"
              value="Send"
              className="my-5 mx-5 bg-blue-500 text-white border-slate-900 px-8 py-2 rounded"
            />
          </form>
        </div>
        <div className="my-5">
          <button className="my-5">
            <a
              href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"
              className="flex items-center "
            >
              <BsGithub className="mx-4" size={20} />
              Linkedin
            </a>
          </button>
          <br />
          <button className="my-5">
            <a
              href="https://github.com/Asfaquekhan"
              className="flex items-center"
            >
              <BsLinkedin className="mx-4" size={20} />
              github
            </a>
          </button>
          <br />
          <button className="my-5">
            <a href="https://wa.me/7001652818" className="flex items-center">
              <BsWhatsapp className="mx-4" size={20} />
              Whatsapp +917001652818
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
