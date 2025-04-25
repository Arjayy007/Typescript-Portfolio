import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { GiSplash } from 'react-icons/gi'
import meImage from '../assets/me.png'
import { ScratchToReveal } from "./magicui/scratch-to-reveal"
import { SpinningText } from './magicui/spinning-text'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <SpinningText radius={16}>Scratch to Reveal . Scratch to Reveal . Scratch to Reveal .</SpinningText>
      <ScratchToReveal width={250} height={250} className='flex flex-col items-center rounded-full overflow-hidden -mt-31'>
        <img src={meImage} alt="saf" />
      </ScratchToReveal>

      <div className="text-center mt-10 flex flex-col items-center gap-1">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-800 flex items-center gap-3 mt-3 ">Hi, I'm Sustiii <GiSplash /></h1>
        <h2 className="text-2xl text-gray-600">A Frontend Developer</h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Computer Science student passionate about frontend development. I love learning new technologies and collaborating to create seamless digital experiences. </p>
      </div>
       ///kupl ka idle
      <div className='flex flex-row items-center gap-7 mt-10 text-3xl'>
      <a aria-label='LinkedIn Profile' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/sustiguer-rodel-jr-dv-00155b291"> <FaLinkedin /> </a>
      <a aria-label='Github Acc' target='_blank' rel='noopener noreferrer' href="https://github.com/Arjayy007"><FaGithubSquare /> </a>
      <a aria-label='Instagram Acc' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/arjay.777/"><FaSquareInstagram /> </a>
      </div>
    </div>
  )
}

export default Hero
