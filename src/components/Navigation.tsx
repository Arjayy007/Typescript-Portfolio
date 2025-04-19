import { GoHomeFill } from "react-icons/go"

const Navigation = () => {
  return (
    <nav className="fixed justify-center w-fit top-0 -m-8 z-20">
            <div className="flex items-center justify-center bg-gray-100 rounded-full px-8 pt-10 pb-2">
                <a href="#projects" className="font-bold text-base mr-8 hover:text-gray-500 transition-colors">
                    Projects
                </a>

                <a href="/" className="mx-2 hover:text-black transition-colors" title="Home">
                    <GoHomeFill className="text-4xl" />
                </a>

                <a href="#contact" className="font-bold text-base ml-8 hover:text-gray-500 transition-colors">
                    Contact
                </a>

            </div>
        </nav>
  )
}

export default Navigation
