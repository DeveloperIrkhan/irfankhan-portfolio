import { FaArrowRight } from "react-icons/fa6";

interface IProjectCardProps {
  projectName: string;
  description: string;
  skills: string[];
  link: string;
}
const ProjectCard = ({
  projectName,
  description,
  skills,
  link
}: IProjectCardProps) => {
  return (
    <div data-aos="flip-up" className="max-w-lg h-auto">
      <div className="p-4 group rounded-md border border-lime-200/10 hover:-translate-y-1 duration-300 hover:shadow-[0_0_25px_rgba(132,204,22,0.7)] cursor-pointer">
        <h2 data-aos="fade-up-right" className="text-xl font-bold text-white/70 font-Outfit group-hover:text-white duration-300">
          {projectName}
        </h2>
        <p className="my-5 text-white/70 text-sm font-Outfit group-hover:text-white duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span data-aos="fade-left"
              key={index}
              className="bg-lime-500 duration-200 font-Outfit tracking-[1px] text-gray-100 hover:text-white py-1 px-3 
                    rounded-full text-sm hover:shadow-[0_0_25px_rgba(132,204,22,0.7)] cursor-pointer hover:bg-lime-400"
            >
              {skill}
            </span>
          ))}
        </div>
        <div data-aos="fade-right" className="my-5">
          <a
            className="flex items-center gap-3 text-white/70 text-sm font-Outfit
               group-hover:text-white duration-300"
            target="_blank"
            href={link}
          >
            view project <FaArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
