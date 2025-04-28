import { BlurFade } from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/ui/project_card";
import coupon from "../assets/coupon.png";
import giga from "../assets/giga.png";
import myx from "../assets/myx.png";
import navigaze from "../assets/navi.jpg";


const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center w-full mt-20 h-full ">
      <BlurFade
        className="flex flex-col items-center justify-center w-full"
        duration={1}
      >
        <h1 className="justify-center text-5xl font-bold">Programming Skills & Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 p-6 md:grid-cols-2 mt-20">

          <ProjectCard
            title="MyxCulture E-Commerce Website "
            role="Project Manager/ Frontend Lead"
            description="Developed a full-stack e-commerce website for a real client using HTML, Tailwind CSS, JavaScript, Node.js, Express.js,
and MongoDB, featuring a responsive design, user authentication, product catalog, shopping cart, and secure checkout
system as part of the Systems Fundamentals course at the University of Caloocan City (UCC)."
            imageUrl={myx}
            imageAlt="Screenshot of Coupon Management System code"
            link="https://www.youtube.com/watch?v=rh38Le-7Izs"
          />

          <ProjectCard
            title="Navigaze (Mobile App for Indoor Navigation)"
            role="Navigation Developer"
            description="Designed a 3D model of the school in Blender and integrated it into Unity for navigation, utilizing baked paths and AI
algorithms for the shortest path. Implemented AR to merge the 3D model with the real world using Line Renderer."
            imageUrl={navigaze}
            imageAlt="Screenshot of Coupon Management System code"
            link="https://www.youtube.com/shorts/3NNzBikGzBQ"
          />

          <ProjectCard
            title="Coupon Management System"
            role="Independent Developer (CS50P Final Project)"
            description="Developed a Coupon Management System as the final project for Harvard's CS50P (Python Programming) course,
applying best coding practices with a focus on modular programming and code readability."
            imageUrl={coupon}
            imageAlt="coupon management system"
            link="https://www.youtube.com/watch?v=sN2hLJm0es0"
          />

          <ProjectCard
            title="Accounting Management System for Gigatech Inc."
            role="Full-Stack Developer"
            description="Developed a basic Accounting Management System for Gigatech Inc. using Java and Scene Builder, integrating CRUD
functionalities for managing transactions, invoices, and financial records, as the final project for TESDA NC III Java
Programming certification."
            imageUrl={giga}
            imageAlt="coupon management system"
          />
        </div>
      </BlurFade>
    </div>
  )
}

export default Projects
