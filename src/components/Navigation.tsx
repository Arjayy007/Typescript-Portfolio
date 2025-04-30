import { GoHomeFill } from "react-icons/go"

const Navigation = () => {
    return (
        <nav className="fixed justify-center w-fit top-0 -m-8 z-20">
            <div className="flex items-center justify-center bg-gray-100  rounded-full px-8 pt-10 pb-2 gap-4 md:gap-6">

                <a href="#skills" className="font-bold text-sm md:text-base  hover:text-gray-400 transition-colors">
                    Skills
                </a>
                <a href="#projects" className="font-bold text-sm md:text-base hover:text-gray-400 transition-colors">
                    Projects
                </a>

                <a href="/" className=" hover:text-gray-400 transition-colors" title="Home">
                    <GoHomeFill className="text-2xl md:text-4xl" />
                </a>

                <a href="#certi" className="font-bold text-sm md:text-base  hover:text-gray-400 transition-colors">
                    Certi
                </a>
                <a href="#contact" className="font-bold text-sm md:text-base  hover:text-gray-400 transition-colors">
                    Contact
                </a>

            </div>
        </nav>
    )
}

export default Navigation
