import React from "react";

import { useState } from "react";

import { useMode } from "../component/Context/ThemeContext";

export default function Contact() {
  const mode = useMode();
  const [email, setEmail] = useState("");

  const sendEmail =async(e)=>{
 e.preventDefault();
 const res = await fetch('/register',{
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({email})
 })
 console.log(res)
  }

  return (
    <section className="min-h-screen" id="contact">
      <div
        className={
          "py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
        }
      >
        <h1
          className="mb-4  tracking-tight  text-center p-3 m-3 text-4xl font-extrabold dark:text-white underline underline-offset-3 decoration-8  decoration-blue-600  leading-none  text-gray-900 md:text-5xl lg:text-6xl "
          id={mode ? "primary_dark" : "primary_light"}
        >
          Contact me
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Email - Asfaquekhan15@gmail.com
        </p>

        <form className="space-y-8" >
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Enter your name"
            required
          />
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type Your message here"
            required
          ></textarea>

          <button
            type="submit"
            onClick={sendEmail}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </form>
      </div>

      <br />
    </section>
  );
}
