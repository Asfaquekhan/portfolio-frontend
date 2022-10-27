import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TextField } from "@mui/material";

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
      <h1 className="text-center text-3xl my-4">Contact("Hire me");</h1>
      <div className=" md:flex max-w-[950px] w-full h-screen mx-auto justify-between ">
        <div className="">
          <form ref={form} onSubmit={sendEmail} className="">
           <div className="my-6 mx-9">
            <TextField id="outlined-basic" label="Name" variant="outlined"  type="text"
              name="user_name" fullWidth />
              </div>
            <div className="my-6 mx-9">
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email"
              name="user_email" fullWidth/>
              </div>
            <div className="my-6 mx-9">

           
            <TextField
          id="outlined-multiline-static"
          label="Message"
          rows={8}
          fullWidth
          multiline
          name="message"
        />
         </div>
            <input
              type="submit"
              value="Send"
              className="bg-slate-900 text-white rounded px-5 py-1 mx-9 "
            />
          </form>
        </div>
        <div className="my-5">
          <button className="my-5 mx-5">
            <a
              href="https://www.linkedin.com/in/asfaque-khan-359b39186/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEyfAlF%2B9RT2r9WAgMf2C4Q%3D%3D"
              className="flex items-center "
            >
              <BsGithub className="mx-4" size={20} />
              Linkedin
            </a>
          </button>
          <br />
          <button className="my-5 mx-5">
            <a
              href="https://github.com/Asfaquekhan"
              className="flex items-center"
            >
              <BsLinkedin className="mx-4" size={20} />
              github
            </a>
          </button>
          
        </div>
      </div>
    </>
  );
}
