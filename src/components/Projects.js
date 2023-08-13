import React from "react";
import todo from "../assets/todo.png";
import password from "../assets/password.png";
import mannafalls from "../assets/mannafalls01.png";
import portfolio from "../assets/talent-portfolio.png";

const Projects = () => {
  const projects = [
    {
      img: todo,
      title: "TodoApp",
      desc: " A To do App. Built with Django Framework, Python, React, html, Bootstrap, Javascript and CSS ",
      code: "https://github.com/talent943/React-Django-To-Do-App",
    },
    {
      img: password,
      title: "PasswordGenerator",
      desc: "Password Generator app. Built with Django Framework, Python, HTML, Bootstrap, CSS and JavaScript",
      code: "https://github.com/talent943/django3-password-generator",
    },
    {
      img: mannafalls,
      title: "mannafalls",
      desc: "Website for marketing batteries. Built with HTML, Javascript, Bootstrap and CSS",
      live: "https://mannafallsbatterrie.pages.dev/about",
      code: "https://github.com/talent943/mannafallsbatteriess",
    },
    {
      img: portfolio,
      title: "Portfolio",
      desc: "My Portfolio website that showcase my skills. Built with Reactjs, Tailwind CSS, HTML, Javascript",
      live: "https://get-inspirred.netlify.app/",
      code: "https://github.com/talent943/talent-portfolio-react",
    },
  ]; 

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with Reactjs,
            Django Framework, Python, Javascript and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
