import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMode } from "../component/Context/ThemeContext";

import TextToast from "./TextToast";

const ContactNew = () => {
    const [showToast, setShowToast] = useState(false);
  const mode = useMode();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleShowToast = () => {
    setShowToast(true);

    // Hide the toast after a few seconds
    setTimeout(() => {
      setShowToast(false);
    }, 10000); // Adjust the duration as needed
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_endb37n",
        "template_uuyat78",
        formRef.current,
        "cx9F9hXMccYkRo-FA"
      )
      .then(
        (result) => {
          console.log(result);
          handleShowToast()
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
         
        }
      );
  };

  return (
    <section className="relative min-h-screen" id="contact">
      <div className={"py-8 lg:py-16 px-4 mx-auto max-w-screen-md"}>
        <h1
          className="mb-4  tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8  decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
          id={mode ? "primary_dark" : "primary_light"}
        >
          Contact me
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Email - Asfaquekhan049@gmail.com
        </p>
        <div className="m-auto gap-3">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 justify-center "
          >
            <div className="w-full flex flex-col gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleForm}
                className=" focus:outline-none p-2 rounded-md border "
                placeholder="First Name"
               
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleForm}
                className="focus:outline-none p-2 rounded-md border "
                placeholder="Last Name"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleForm}
              className="focus:outline-none p-2 rounded-md border"
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleForm}
              className="focus:outline-none p-2 rounded-md border"
              placeholder="Message"
              required
            />
            <input
              type="submit"
              value="Send"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
          </form>
          {showToast && <TextToast/> }
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
