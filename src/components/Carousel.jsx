import React from 'react'
import { Carousel } from "flowbite-react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const MyCarousel = () => {
  return (
    <div className="h-150 m-5 ">
                    <Carousel 
                slideInterval={5000}
                leftControl={<FaAngleDoubleLeft className="text-4xl text-zinc-100" />} 
                rightControl={<FaAngleDoubleRight className="text-4xl  text-zinc-100" />} 
                       >
                        <img src="https://px-web-images2.pixpa.com/Xc21FHalGEoAH8wCqR7jFXARMo3cdS8jGlM8vDLjDzs/rs:fit:2560:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS82MzIzNzEvNjMyMzcxLTE3NDg2MDE4NzYtc2VyZW5lLXBvcnRyYWl0LW9mLWEteW91bmctd29tYW4tNC5qcGVn" className='transition-transform  duration-700 hover:scale-120' alt="Carousel image 1" />
                        <img src="https://px-web-images9.pixpa.com/hfsuyzOeeVDcB-OYD4OjBM1_papvCrKnpSYPr8o8Wpo/rs:fit:2560:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS82MzIzNzEvNjMyMzcxLTE3NDg2MDE5NzAtdHJhbnF1aWwtcG9ydHJhaXQtb2YtYS15b3VuZy13b21hbi5qcGVn" className='transition-transform  duration-700 hover:scale-120' alt="Carousel image 2" />
                        <img src="https://px-web-images2.pixpa.com/CRwbqBfmol7fAeOJptn7RLPF8V5zC2ZmcHzjatj4IW8/rs:fit:2560:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS82MzIzNzEvNjMyMzcxLTE3NDg2MDIwMTctcG9ydHJhaXQtb2YteW91bmctd29tYW4tMS5qcGVn" className='transition-transform  duration-700 hover:scale-120' alt="Carousel image 3" />
                        <img src="https://px-web-images1.pixpa.com/8l5Kyf12_kFA4Wu6FxwSmWnW1t2bIRiOyRGDsz-ceuM/rs:fit:2560:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS82MzIzNzEvNjMyMzcxLTE3NDg2MDIxODAtc2VyZW5lLXBvcnRyYWl0LTEuanBlZw==" className='transition-transform  duration-700 hover:scale-120' alt="Carousel image 4" />

                    </Carousel>
                </div>
  )
}

export default MyCarousel;