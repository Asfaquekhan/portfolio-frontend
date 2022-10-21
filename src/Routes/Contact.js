import React from "react";

export default function Contact() {
  return (
    <div className="max-w-[900px] mx-auto">
      <p className="text-center text-xl ">Contact me</p>
      <form action="https://formspree.io/f/xdojlvew" method="POST">
        <label className="my-12">
            <p>Your Email</p>
          <input type="email" name="email" placeholder="Enter your Email" className=""/>
        </label>
        <br />
        <label className="my-12">
          <p>Your message</p>
          <textarea name="message" placeholder="Enter your message"></textarea>
        </label>
        <br />
        <button type="submit" className="my-12 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Send</button>
      </form>
    </div>
  );
}
