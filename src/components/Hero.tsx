import meImage from '../assets/me.png'
import { ScratchToReveal } from "./magicui/scratch-to-reveal"
import { SpinningText } from './magicui/spinning-text'

const Hero = () => {
  return (
    <div>
      <SpinningText radius={19} className='mt-70'>Scratch to Reveal . Scratch to Reveal . Scratch to Reveal .</SpinningText>
      <ScratchToReveal width={300} height={300} className='rounded-full overflow-hidden -mt-37'>
       <img src={meImage} alt="saf" />
      </ScratchToReveal>
      
    </div>
  )
}

export default Hero
