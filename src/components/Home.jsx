import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar";

const Home = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial state for overlay and text
    gsap.set(overlayRef.current, { opacity: 1 });
    gsap.set(".fade-in", {
      opacity: 0,
      y: 30,
    });


    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });

 
    tl.to(
      ".fade-in",
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      },
      "-=0.7"
    );

    return () => tl.kill();
  }, []);

  return (
    <>
      <Navbar1/>

      <section
        className="relative w-screen h-screen bg-cover bg-no-repeat bg-center text-white flex items-center justify-center flex-col
        bg-[url('https://px-web-images6.pixpa.com/375cs_ILYbR5kpyAcIamnvAKHCzplBfOwkFFPorMxU0/rs:fit:2560:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS82MjIwMzcvMTY1MDEwMjE1MC03NTQwMDMtamMtZ2VsbGlkb24teGRzcTN1M3p1cWMtdW5zcGxhc2guanBn')]"
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black bg-opacity-100 z-10"
        ></div>

        <div className="relative text-center z-20 p-4">
          <h1 className="text-5xl md:text-6xl font-bold fade-in">
            Capturing Moments
          </h1>
          <p className="mt-4 text-lg fade-in">
            Professional Photography for Every Occasion
          </p>
          <div className="flex justify-center mt-6 fade-in">
            <Link to="/Contact" className="font-bold text-xl hover:text-amber-400">
              Book a Shoot
            </Link>
          </div>
          <div className="text-center max-w-2xl mx-auto mt-10 text-lg fade-in">
            Hello, I am Palak, a lifestyle photographer based in Noida, Uttar Pradesh. My passion is to document the fleeting moments of love to create timeless, beautiful images as memories. I love capturing weddings, elopements and also families. My style is minimal, natural and understated. Looking forward to capturing your special day for eternity.
          </div>
        </div>
      </section>

      <div className="text-center mb-6 mt-10">
        <Link to="/Gallery" className="text-blue-950 font-bold text-xl hover:cursor-pointer backdrop-brightness-88 hover:bg-amber-400">
          Say Hello
        </Link>
      </div>
    </>
  );
};

export default Home;
