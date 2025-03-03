import React from "react";
import Title from "../Title";
const frontEndSkills = [
  "React",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Redux Toolkit",
  "Context API",
  "Razor Pages",
  "React Router"
];
const backendSkills = [
  "Dotnet Core MVC",
  "Node.JS",
  "Express.JS",
  "MongoDB",
  "SQL Server",
  "Postgre SQL",
  "DotNet Core APIs"
];
const otherSkills = [
  "Photoshop",
  "Illustrator",
  "Poster Designing",
  "Logo Designing",
  "Sketching",
  "Photography"
];
const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto font-bold px-4">
        <Title title="About us" />
      </div>
      <div className="glass max-w-[90%] rounded-xl p-8">
        <p
          className="text-gray-300 md:max-w-lg max-w-md m-auto mb-5 font-Outfit md:text-xl text-center text-sm tracking-[3px] 
        hover:-translate-y-1 transition-all duration-300"
        >
          A passionate developer with a strong expertise in building scalable
          web applications and crafting innovative solutions that enhance user
          experience and efficiency
        </p>
        {/* skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all duration-300 border-white/10 border">
              <h2 className="text-xl font-bold font-Outfit mb-4">FrontEnd</h2>
              <div className="flex flex-wrap gap-3">
                {frontEndSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-amber-500 duration-200 font-Outfit tracking-[1px]  text-gray-100 hover:text-white py-1 px-3 rounded-full 
                    hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] cursor-pointer text-sm hover:bg-amber-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all duration-300 border-white/10 border">
              <h2 className="text-xl font-bold font-Outfit mb-4">BackEnd</h2>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-amber-500 duration-200 font-Outfit tracking-[1px]  text-gray-100 hover:text-white py-1 px-3 
                    rounded-full text-sm hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] cursor-pointer hover:bg-amber-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all duration-300 border-white/10 border">
              <h2 className="text-xl font-bold font-Outfit mb-4">
                Other Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-amber-500 duration-200 font-Outfit tracking-[1px] text-gray-100 hover:text-white py-1 px-3 
                    rounded-full text-sm hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] cursor-pointer hover:bg-amber-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="eduaction" className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold font-Aclonica mb-4">Education</h3>
            <ul className="text-sm font-Outfit flex flex-col">
              <li className="flex flex-col my-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"></div>
                  <span className="text-xl font-bold">
                    BSc Computer Science
                  </span>
                </div>
                <p className="ml-5 text-base text-white/70">
                  CGPA 3.00 (2012) | AWK University Mardan, PAK
                </p>
              </li>
              <li className="flex flex-col my-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"></div>
                  <span className="text-xl font-bold">
                    MSc Computer Science
                  </span>
                </div>
                <p className="ml-5 text-base text-white/70">
                  CGPA 3.20 (2015) | IMSciences Peshawar, PAK
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold font-Aclonica mb-4">
                Experience
              </h3>
              <ul className="text-sm font-Outfit flex flex-col gap-y-5 list-disc list-inside">
                <li className="flex flex-row flex-wrap items-center gap-1 my-1">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Full Stack Web Developer
                  </span>{" "}
                  www.onlinehurak.com
                  <p className="ml-4 text-gray-300">
                    Developed a functional food delivery app (MERN stack) with
                    Stripe for secure payments, Redux Toolkit for state
                    management, and responsive design using Bootstrap
                  </p>
                </li>
                <li className="flex flex-row flex-wrap items-center gap-1 my-1">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Full Stack Web Developer
                  </span>{" "}
                  www.libaas.pk
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Developed a fully functional e-commerce platform where users
                    can browse, select, and purchase multiple products.
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Integrated Stripe for secure online payments, with an option
                    for cash-on-delivery (COD) for flexibility
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Implemented state management using Context API to manage
                    user data and cart functionality.
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Design user friendly layout using Tailwind CSS, to ensure
                    optimal user experience across devices
                  </p>
                </li>

                <li className="flex flex-row flex-wrap items-center gap-1 my-1">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Full Stack Web Developer
                  </span>{" "}
                  BrainXero PAK (2021 to 2024)
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Led the development of an innovative medical website
                    enabling users to access valuable resources and book
                    appointments with healthcare professionals
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Utilized .NET Core to build robust backend functionalities
                    and ensure seamless integration with frontend components
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Implemented state management using Context API to manage
                    user data and cart functionality.
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Implemented responsive design principles to optimize user
                    experience across various devices and screen sizes
                  </p>
                </li>

                <li className="flex flex-row flex-wrap items-center gap-1 my-1">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">React Developer Intern</span>{" "}
                  BrainXero PAK (feb 2021 to Nov 2021)
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Created responsive components for Data-Zoo, integrated React
                    with .NET Core APIs for dynamic data display.
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Developed and maintains company’s official website
                    (www.brainxero.com)
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Responsible for the frontend development of a leading
                    platform for booking tours in Pakistan from all over the
                    world (www.imusafir.pk)
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Designed marketing and graphic materials like Logos,
                    Posters, Flexes and T-Shirts to promote tours offering
                    effectively
                  </p>
                </li>

                <li className="flex flex-row flex-wrap items-center gap-1 my-1">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Graphic Designer / Freelancer
                  </span>{" "}
                  H2O Tranders (June 2016 – 2020)
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Worked as Graphics Designer Team Leader
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Responsible for the Designing of T-Shirts, Logos, Posters,
                    Brochures Visiting Card etc
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Responsible for the frontend development of a leading
                    platform for booking tours in Pakistan from all over the
                    world (www.imusafir.pk)
                  </p>
                  <p className="ml-4 text-gray-300 flex items-center">
                    Designed marketing and graphic materials like Logos,
                    Posters, Flexes and T-Shirts to promote tours offering
                    effectively
                  </p>
                </li>

                <li className="flex flex-row flex-wrap items-center gap-1 my-1">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">Web Developer</span> H2O Tranders
                  (feb 2015 – March 2016)
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Started as an intern and later worked as graphic designer
                    and Front-End developer
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
