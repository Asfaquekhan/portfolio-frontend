import React from "react";


export default function About(props) {
  const greet = new Date().getHours();
  let setgreet = "";
  if (greet < 12) {
    setgreet = "Good morning";
  } else if (greet < 18) {
    setgreet = "Good afternoon";
  } else {
    setgreet = "Good Evening";
  }
  return (
    <>
      <div className="about">
        <img src=".\Images\IMG_20221013_181332.jpg" alt="" className="photo" />
        <div className="about-write">
          <p className="Question">
            Hi,<span>{setgreet}!</span> Hope you having a great day
          </p>
          <p>
             My name is Asfaque khan. </p>
             <p className="aboutex">i'm 24 year old aspiring web
            devloper.Currenly working as a mechanical engineer in Reshmi
            metaliks.
            </p>
          <hr />
          <p className="Question">
            why this mechanical guy with a web portfolio?
          </p>
          <p className="aboutex">
            From college days i was passonate about coding.I love how it gives a
            free path for creativity & automate things.
          </p>
          <p className="aboutex">
            So here i'm coming crawling from tutorial hell with a portfolio and
            some projects using html css javascript react.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}
