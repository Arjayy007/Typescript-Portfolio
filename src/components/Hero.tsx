import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { GiSplash } from 'react-icons/gi'
import { TbFileCv } from "react-icons/tb"
import meImage from '../assets/me.png'
import { ScratchToReveal } from "./magicui/scratch-to-reveal"
import { SpinningText } from './magicui/spinning-text'

const Hero = () => {
  return (
    
    <div className="flex flex-col items-center justify-center mt-36 md:mt-20 h-screen">
     
      <SpinningText radius={16}>Scratch to Reveal . Scratch to Reveal . Scratch to Reveal .</SpinningText>
      <ScratchToReveal width={250} height={250} className='flex flex-col items-center rounded-full overflow-hidden -mt-31'>
        <img src={meImage} alt="saf" />
      </ScratchToReveal>

      <div className="text-center mt-10 flex flex-col items-center gap-1">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 flex items-center gap-3 mt-3 ">Hi, I'm Sustiii <GiSplash /></h1>
        <h2 className="text-2xl text-gray-600">Rodel Jr. DV. Sustiguer</h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
        Motivated and detail-oriented Computer Science student with a adequate foundation in programming and
problem-solving. Passionate about pursuing a career in frontend development, but open to all opportunities. Eager
to learn new technologies, collaborate with teams, and build efficient solutions in the real-world technology industry.
 </p>
      </div>
      <div className='flex flex-row items-center gap-7 mt-10 text-3xl'>
      <a aria-label='LinkedIn Profile' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/sustiguer-rodel-jr-dv-00155b291"> <FaLinkedin /> </a>
      <a aria-label='Github Acc' target='_blank' rel='noopener noreferrer' href="https://github.com/Arjayy007"><FaGithubSquare /> </a>
      <a aria-label='Instagram Acc' target='_blank' rel='noopener noreferrer' href="https://drive.google.com/file/d/1texCOt4H5Dk5YVbTS29sdElHZ9XakoGa/view?usp=sharing"><TbFileCv /> </a>
      </div>
    </div>
  )
}

export default Hero
