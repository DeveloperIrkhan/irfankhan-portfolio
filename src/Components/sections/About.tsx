import { FaGithub, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
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
  "React Router",
];
const databasesSkills = ["MongoDB", "SQL Server", "Postgre SQL", "Supabase"];
const backendSkills = [
  "NEXT.JS",
  "Dotnet Core MVC",
  "Node.JS",
  "Express.JS",
  "DotNet Core APIs",
];
const otherSkills = [
  "Photoshop",
  "Illustrator",
  "Poster Designing",
  "Logo Designing",
  "Sketching",
  "Photography",
];
const About = () => {
  return (
    <div
      data-aos="fade-right"
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div data-aos="flip-left" className="max-w-3xl mx-auto font-bold px-4">
        <Title title="About us" />
      </div>
      <div className="glass md:max-w-[90%] rounded-xl p-8">
        <p
          data-aos="flip-right"
          className="text-gray-300 md:max-w-lg max-w-md m-auto mb-5 font-Outfit md:text-xl text-center text-sm tracking-[3px] 
        hover:-translate-y-1 transition-all duration-300"
        >
          Hi 🖐, I'm a full-stack web developer with 4 years of experience in
          creating responsive websites. Additionally, I have a strong background
          in Graphic designing as well
        </p>
        <p
          data-aos="flip-right"
          className="text-gray-300 md:max-w-lg max-w-md m-auto mb-5 font-Outfit md:text-xl text-center text-sm tracking-[3px] 
        hover:-translate-y-1 transition-all duration-300"
        >
          if you're looking for someone collaborate with you in your project
          with modren technologies then you found it 😊
        </p>
        <p
          data-aos="flip-right"
          className="text-gray-300 md:max-w-lg max-w-md m-auto mb-5 font-Outfit md:text-xl text-center text-sm tracking-[3px] 
        hover:-translate-y-1 transition-all duration-300"
        >
          I have 2 years of expertise in React, the most popular framework for
          building modern web applications. and I have also worked as a .NET
          Core developer for 2 years, where I utilized .NET Core and Web APIs to
          build scalable applications. Over the past year, I have started
          working with Node.js and Express.js for backend development.
          Additionally, I am proficient in MongoDB and PostgreSQL, two of the
          most widely used databases for web development.
        </p>
        <div
          data-aos="flip-up"
          className="border border-white/10 rounded-xl text-gray-300 md:max-w-lg max-w-md m-auto mb-5 font-Outfit md:text-xl text-center text-sm tracking-[3px] 
        hover:-translate-y-1 transition-all duration-300 py-10 px-3"
        >
          find me out on
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              data-aos="zoom-in"
              data-aos-duration="1500"
              href="https://github.com/DeveloperIrkhan"
              target="_blank"
              className="hover:text-gray-600 duration-200"
            >
              <FaGithub />
            </a>
            <a
              data-aos="zoom-in"
              data-aos-duration="1500"
              href="https://www.facebook.com/IRKhan1438/"
              target="_blank"
              className="hover:text-blue-600 duration-200"
            >
              <FaFacebookSquare />
            </a>
            <a
              data-aos="zoom-in"
              data-aos-duration="1500"
              href="https://www.instagram.com/irfanshah.exe/"
              target="_blank"
              className="hover:text-pink-500 duration-200"
            >
              <FaInstagram />
            </a>
            <a
              data-aos="zoom-in"
              data-aos-duration="1500"
              href="https://www.x.com/irfansha1435/"
              target="_blank"
              className="hover:text-blue-600 duration-200"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
        {/* skills */}
        <div
          data-aos="flip-left"
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <div className="grid grid-cols-1 gap-6">
            <div
              className="rounded-xl md:p-6 p-2 hover:translate-y-1 transition-all duration-300
             border-white/10 border"
            >
              <h2 className="text-xl font-bold font-Outfit mb-4">FrontEnd</h2>
              <div className="flex flex-wrap gap-3">
                {frontEndSkills.map((skill, index) => (
                  <span
                    data-aos="flip-right"
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
                    data-aos="flip-left"
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
              <h2 className="text-xl font-bold font-Outfit mb-4">Databases</h2>
              <div className="flex flex-wrap gap-3">
                {databasesSkills.map((skill, index) => (
                  <span
                    data-aos="flip-left"
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
                    data-aos="flip-right"
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
        <div className="md:my-10 my-5 flex justify-center items-center flex-col">
          <h2 className="text-xl text-center font-bold font-Outfit mb-4">
            Why Hire me? 😏
          </h2>

          <p
            data-aos="flip-right"
            className="relative font-Outfit list-none my-3 ml-4 text-gray-300 flex items-center before:content-[''] 
            before:w-2 before:h-2 before:bg-amber-500 before:rounded-full before:absolute before:left-[-15px]"
          >
            Experience in collaborating on different types of projects with
            International Clients
          </p>
          <p
            data-aos="flip-right"
            className="relative font-Outfit list-none my-3 ml-4 text-gray-300 flex items-center before:content-[''] 
            before:w-2 before:h-2 before:bg-amber-500 before:rounded-full before:absolute before:left-[-15px]"
          >
            100% clients satisfaction on Upwork and fiver
          </p>
          <p
            data-aos="flip-right"
            className="relative font-Outfit list-none my-3 ml-4 text-gray-300 flex items-center before:content-[''] 
            before:w-2 before:h-2 before:bg-amber-500 before:rounded-full before:absolute before:left-[-15px]"
          >
            Creative and problem solving skills for challenging projects
          </p>
          <p
            data-aos="flip-right"
            className="relative font-Outfit list-none my-3 ml-4 text-gray-300 flex items-center before:content-[''] 
            before:w-2 before:h-2 before:bg-amber-500 before:rounded-full before:absolute before:left-[-15px]"
          >
            Proven track record of delivering high quality projects
          </p>
          <p
            data-aos="flip-right"
            className="relative font-Outfit list-none my-3 ml-4 text-gray-300 flex items-center before:content-[''] 
            before:w-2 before:h-2 before:bg-amber-500 before:rounded-full before:absolute before:left-[-15px]"
          >
            Completed many Ecommerce stores and other Full Stack Projects.
          </p>
        </div>
        <p
          data-aos="flip-right"
          className="text-gray-300 md:max-w-lg max-w-md m-auto mb-5 font-Outfit md:text-xl text-center text-sm tracking-[3px] 
        hover:-translate-y-1 transition-all duration-300"
        >
          I'm looking for opportunities to collaborate with other web developers
          and create amazing web experiences for uses. if you are intrested in
          working with me or want to see some of my previous work please feel
          free to contact me.
        </p>
        <div
          data-aos="fade-down-right"
          id="eduaction"
          className="grid grid-cols-1 md:grid-cols-2 gap-3 "
        >
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3
              data-aos="fade-down-right"
              className="text-2xl font-bold font-Aclonica mb-4"
            >
              Education
            </h3>
            <ul className="text-sm font-Outfit flex flex-col">
              <li
                data-aos="fade-right"
                aos-duration="1500"
                className="flex flex-col my-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"></div>
                  <span className="text-xl font-bold">
                    BSc Computer Science
                  </span>
                </div>
                <p className="ml-5 text-base text-white/70">
                  CGPA 3.00 | AWK University Mardan, PAK
                </p>
              </li>
              <li
                data-aos="fade-right"
                aos-duration="3000"
                className="flex flex-col my-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"></div>
                  <span className="text-xl font-bold">
                    MSc Computer Science
                  </span>
                </div>
                <p className="ml-5 text-base text-white/70">
                  CGPA 3.20 | IMSciences Peshawar, PAK
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap">
            <div
              data-aos="fade-up"
              className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
            >
              <h3 className="text-2xl font-bold font-Aclonica mb-4">
                Experience
              </h3>
              <ul className="text-sm font-Outfit flex flex-col gap-y-5 list-disc list-inside">
                <li
                  data-aos="fade-up"
                  aos-duration="1000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Volinteer Full Web Developer
                  </span>{" "}
                  Pakistan Red Crescent Society (PRCS)
                  <p className="ml-4 text-gray-300">
                    Working as a Full Stack Web Developer & IT Assistent at the 
                    Pakistan Red Crescent Society (PRCS), 
                    I have been responsible for designing and developing a 
                    Complaint Registration System and a 
                    comprehensive Fleet and Logistics Resource Request Portal. 
                    This portal allows PRCS staff to submit resource requests, 
                    track their status in real time, and manage logistics efficiently.
                    I implemented a robust role-based access control system with 
                    dedicated dashboards for administrators and technicians, 
                    enabling seamless task assignment and progress monitoring. 
                    This solution significantly improved the efficiency of 
                    resource management and enhanced the overall operational 
                    capabilities of PRCS.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  aos-duration="2000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Full Stack Web Developer
                  </span>{" "}
                  www.onlinehurak.com
                  <p className="ml-4 text-gray-300">
                    Developed a functional food delivery app (MERN stack) with
                    Stripe for secure payments, Redux and redux Toolkit for
                    state management and api calls, and created a responsive
                    designs using Bootstrap for all devices
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  aos-duration="3000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
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

                <li
                  data-aos="fade-up"
                  aos-duration="4000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
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

                <li
                  data-aos="fade-up"
                  aos-duration="5000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
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
                <li
                  data-aos="fade-up"
                  aos-duration="6000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">Web Developer</span> BrainXero
                  Islamabad (Dec 2018 – Oct 2020)
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Started as an intern and later worked as graphic designer
                    and Front-End Web developer
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  aos-duration="7000"
                  className="flex flex-row flex-wrap items-center gap-1 my-1"
                >
                  <div className="w-2 h-2 rounded-2xl bg-amber-500"> </div>
                  <span className="font-bold">
                    Graphic Designer / Freelancer
                  </span>{" "}
                  H2O Tranders (June 2016 – 2018)
                  <p className="list-disc list-inside ml-4 text-gray-300 flex items-center">
                    Worked as Graphics Designer Team-Leader
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
