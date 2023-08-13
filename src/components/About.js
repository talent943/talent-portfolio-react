import React from "react";
import AboutImg from "../assets/logo.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Talent Pachena. I am a
            FullStack Developer. I build beautifull websites and web applications with React and
            Tailwind CSS, Html, Django Framework, Python, Javascript, SQL, Postgresql, MERN stack
          </p>
          <p className="pb-5">
            I am proficient in Frontend Developer skills like React.js, Axios, Tailwind CSS, SaSS, Css3.
          </p>

          <p>In backend I know Python, Django Framework, RNode.js, Express.js, MongoDB, and Mongoose</p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;