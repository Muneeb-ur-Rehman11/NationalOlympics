import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import C1 from './C1.jpg';
import C2 from './C2.jpg';
import C3 from './C3.jpg';
import C4 from './C4.jpg';


export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);   


  return (
    <div className="embla px-0 mt-5
    
    " ref={emblaRef}>
      <div className="embla__container">
        
        <div className="embla__slide flex justify-center">
            <img className='w-[90vw] h-[90vh] max-md:h-[60vh]' src={C1} alt="caurosel-img-main" />
        </div>
        <div className="embla__slide flex justify-center">
            <img className='w-[90vw] h-[90vh] max-md:h-[60vh]' src={C2} alt="caurosel-img-main" />
        </div>
        <div className="embla__slide flex justify-center">
            <img className='w-[90vw] h-[90vh] max-md:h-[60vh]' src={C3} alt="caurosel-img-main" />
        </div>
        <div className="embla__slide flex justify-center">
            <img className='w-[90vw] h-[90vh] max-md:h-[60vh]' src={C4} alt="caurosel-img-main" />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;
