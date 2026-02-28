import ProjectCard from "../ProjectCard";
import Title from "../Title";
const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <Title title="Featured Projects" />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 h-auto">
        <ProjectCard
          projectName="Fleets & Logistics ERP for PRCS"
          description="Designed and developed a comprehensive Fleet and Logistics Resource Request Portal for
           the Pakistan Red Crescent Society (PRCS) using .Net Core WEBAPI, Next, TypeScript, and PostgresSQL. 
           The portal features a user-friendly interface that allows PRCS staff to submit resource requests,
           track their status in real time, and manage logistics efficiently. 
           I implemented a robust role-based access control system with dedicated dashboards for 
           administrators and technicians, enabling seamless task assignment and progress monitoring.
            This solution significantly improved the efficiency of resource management and enhanced
             the overall operational capabilities of PRCS."
          skills={[
            ".Net Core WEBAPI",
            "NEXT.js",
            "NEXT.js API routes",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Auth0",
            "PostgresSQL",
          ]}
          link="#"
        />
        <ProjectCard
          projectName="Complaint Registeration system"
          description="I designed and developed a complete Complaint Registration System using Next.js, TypeScript, and MongoDB, allowing users to register complaints and track their status in real time. The system includes a robust role-based access structure with two dedicated dashboards: an Admin Dashboard for viewing all complaints, assigning tickets and tasks to technicians, managing priority levels, and monitoring progress, and a Technician Dashboard for accessing assigned tasks, updating complaint statuses, and managing daily workflow. I also implemented a user-friendly interface that improved complaint submission accuracy and significantly reduced processing time."
          skills={[
            "NEXT.js",
            "NEXT.js API routes",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Auth.js",
            "MongoDB",
          ]}
          link="#"
        />
        <ProjectCard
          projectName="Medgic.pk"
          description="As a Full Stack Developer at Medgic.pk, I led the development of an innovative medical website that allows users to access healthcare resources and book appointments with professionals. I utilized .NET Core to build a robust backend, ensuring seamless integration with the frontend for a smooth user experience. Additionally, I implemented responsive design principles to optimize accessibility across different devices, enhancing usability and engagement."
          skills={[
            "Dotnet Core WebAPIs",
            "Razor Pages",
            "HTML5",
            "CSS3",
            "PayPro Integration",
            "C#",
            "javascript",
            "jQuery",
          ]}
          link="https://www.medgic.pk"
        />

        <ProjectCard
          projectName="Pharmacare billing solutions"
          description="Designed all graphic materials for the website and developed a fully responsive React-based frontend. Applied SEO best practices to improve search rankings and enhance online visibility. Managed deployment and ongoing maintenance to ensure optimal performance, security, and a seamless user experience."
          skills={[
            "ReactJS",
            "Bootstrap",
            "aos animation",
            "EmailJS",
            "javascript",
            "SEO optimized",
          ]}
          link="https://pcaresolution.com/"
        />

        <ProjectCard
          projectName="Unicare Psychiatry"
          description="Designed and developed a React-based portfolio website to enhance the online presence of the
medical practice. Created custom graphics and icons, integrated appointment booking via email, and
ensured a user-friendly interface while managing deployment and ongoing maintenance for optimal
performance"
          skills={[
            "ReactJS",
            "Bootstrap",
            "aos animation",
            "EmailJS",
            "javascript",
            "Photoshop",
            "Illustrator",
            "SEO optimized",
          ]}
          link="https://www.unicarepsychiatry.com"
        />

        <ProjectCard
          projectName="Online Tours Booking System"
          description="Developed the frontend for iMusafir.pk, a leading platform for booking tours in Pakistan, ensuring a seamless and responsive user experience. Implemented SEO best practices to enhance search engine visibility and website performance. Additionally, designed all graphic materials, including logos, brochures, and other visual assets, to maintain a strong brand identity."
          skills={[
            "HTML5",
            "CSS3",
            "Bootstrap",
            "aos animation",
            "javascript",
            "Photoshop",
            "Illustrator",
            "Wordpress",
            "SEO optimization",
          ]}
          link="https://www.imusafir.pk"
        />
        <ProjectCard
          projectName="BrainXero"
          description="Developed the Company's offical website www.brainxero.com,
          Created a responsive and user-friendly interface, implemented SEO best practices to enhance search engine visibility and website"
          skills={[
            "HTML5",
            "CSS3",
            "Bootstrap",
            "aos animation",
            "javascript",
            "Photoshop",
            "Illustrator",
            "SEO optimization",
          ]}
          link="https://www.brainxero.com"
        />
        <ProjectCard
          projectName="Online Shopping Website"
          description="Developed a fully functional e-commerce platform that allows users to browse, select, and purchase products seamlessly. Integrated secure online payment processing through Stripe while also providing a cash-on-delivery (COD) option for flexibility. Implemented efficient state management to handle user data and cart functionality, ensuring a smooth shopping experience. Designed a user-friendly and responsive layout to enhance accessibility across all devices"
          skills={[
            "MERN Stack",
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "Context API",
            "Stripe Payment gateway",
            "Cloudinary",
            "Tailwind CSS",
          ]}
          link="#"
        />
        <ProjectCard
          projectName="Online Food Delivary System"
          description="Developed a functional food delivery app (MERN stack) with Stripe for secure
payments, Redux Toolkit for state management, and responsive design using
Bootstrap"
          skills={[
            "MERN Stack",
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "Redux and Redux Toolkit",
            "React Router v6",
            "Stripe Payment gateway",
            "Cloudinary",
            "Bootstrap 4",
          ]}
          link="#"
        />
      </div>
    </div>
  );
};

export default Projects;
