import { BlurFade } from "@/components/magicui/blur-fade";
import { FaGitAlt, FaGithub, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    return (
        <div id="skills" className="flex flex-col items-center justify-center w-full mt-5 h-full ">
            <BlurFade
                className="flex flex-col items-center justify-center w-full"
                duration={1}
                triggerOnScroll={true} // Animation starts when fully visible
            >
                <h1 className="justify-center text-3xl sm:text-4xl md:text-5xl font-bold">Programming Skills & Tools</h1>


                <div className="flex flex-row justify-center items-center text-5xl md:text-9xl my-7 mt-20 gap-5 md:gap-20">
                    <FaHtml5 />
                    <SiJavascript />
                    <SiTypescript />
                    <FaReact />
                    <RiTailwindCssFill />
                </div>

                <div className="flex flex-row justify-center items-center text-5xl md:text-9xl my-7 gap-5 md:gap-20">
                    <IoLogoNodejs />
                    <FaPython />
                    <FaJava />
                    <SiMysql />
                    <SiMongodb />
                </div>

                <div className="flex flex-row justify-center items-center text-5xl md:text-9xl my-7 gap-5 md:gap-20">
                    <VscVscode />
                    <FaGitAlt />
                    <FaGithub />
                    <FaUnity />
                </div>
            </BlurFade>

        </div>
    )
}

export default Skills
