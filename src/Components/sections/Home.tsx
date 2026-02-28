import AnimationText from "../Animattions/AnimationText";

const Home = () => {
  return (
    <section
      id="home"
      className="mt-6 w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="flex gap-4">
        {/* <div className="md:block hidden">
          <img src={Images.Avator} alt="image" />
        </div> */}
        <div className="text-center">
          <h1 className="md:text-5xl text-2xl font-bold font-Outfit mb-4 bg-gradient-to-bl from-lime-500 to-lime-200 bg-clip-text text-transparent">
            Welcome! I'm IrfanKhan
          </h1>
          <h1 className="md:text-2xl text-md font-bold font-Outfit mb-4 bg-gradient-to-tl from-lime-500 to-gray-200 bg-clip-text text-transparent">
            <AnimationText
              phrases={[
                "Frontend Developer",
                "Full-Stack Developer",
                "React Specialist",
                "TypeScript Architect",
                "Illustrator Expert",
                "2D Animations Lover",
              ]}
            />
          </h1>

          <p className=" text-gray-300  font-Outfit md:text-xl text-center text-sm tracking-[3px]  mb-0 md:max-w-lg max-w-[80%] mx-auto">
            Full-Stack Developer with 4+ years of experience in frontend
            development (React, Next.js, TypeScript) and 3+ years in backend
            development (.NET Core, Node.js, Express). Skilled in building
            scalable, responsive web applications with a strong focus on UI/UX
            design, SEO optimization, and web performance. Proficient in RESTful
            APIs, database optimization, and payment gateway integration, with
            experience leading crossfunctional projects
          </p>
          <div className="flex justify-center gap-4 mt-5">
            <a
              href="#projects"
              className="bg-lime-500 font-Outfit text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
          duration-400 hover:translate-y-2 hover:shadow-[0_0_25px_rgba(132,204,22,0.7)] cursor-pointer hover:bg-lime-600"
            >
              view my work
            </a>
            <a
              href="#contact"
              className="border border-lime-500 font-Outfit text-lime-500 py-3 px-6 rounded font-medium transition relative overflow-hidden
          duration-400 hover:translate-y-2 hover:shadow-[0_0_25px_rgba(132,204,22,0.7)] cursor-pointer
          hover:border-lime-500 hover:text-lime-500"
            >
              contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
