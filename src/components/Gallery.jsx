import React, { useRef, useEffect } from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import '../index.css';
import MyCarousel from "./Carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const mainContainer = useRef(null);

    useEffect(() => {
        // Timeline for the first section (Client Galleries)
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-section-1",
                start: "top 80%",
            },
        });

        gsap.set(".fade-in-up", { opacity: 0, y: 50 });
        gsap.set([".animate-move-left", ".animate-move-right"], { opacity: 0, y: 50 });

        tl1.to(".fade-in-up", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.6,
            ease: "power3.out",
        })
        .to(".animate-move-left", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
        }, "-=0.8")
        .to(".animate-move-right", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
        }, "<");


        
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-section-2",
                start: "top 80%",
            },
        });

        gsap.set(".fade-in-down-stagger", { opacity: 0, y: -50 });

        tl2.to(".fade-in-down-stagger", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.6,
            ease: "power2.out",
        });

     
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-section-3",
                start: "top 80%",
            },
        });
        
        gsap.set(".fade-in-stagger", { opacity: 0, y: 50 });

        tl3.to(".fade-in-stagger", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.6,
            ease: "power2.out",
        });

        return () => {
            tl1.kill();
            tl2.kill();
            tl3.kill();
        };

    }, []);

    return (
        <div ref={mainContainer}>
           
            <div className="gallery-section-1 flex justify-center items-center py-16 px-6 bg-[url(https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
                <div className="w-full max-w-4xl rounded-4xl shadow-2xl bg-gray-800 text-gray-400 shadow-xl p-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-6 uppercase fade-in-up">
                        Client Galleries
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8 fade-in-up">
                        A glimpse into the cherished moments we’ve captured for our clients. Each gallery tells a unique story filled with emotions, details, and timeless memories. Every photo holds a memory, every gallery tells a story. Here are some of the journeys we’ve documented for our clients.
                    </p>
                    <div>
                        <button className="flex items-center gap-2 text-xl font-semibold underline text-yellow-300 hover:text-yellow-800 transition fade-in-up">
                            Learn More <FaAngleRight />
                        </button>
                    </div>
                    <div className="relative mt-8">
                        <img
                            src="https://px-studioassets.pixpa.com/pixpacom/images/homepage-2/build-website/clientgallery.jpg"
                            alt="Gallery"
                            className="rounded-lg shadow-lg relative z-10 fade-in-up"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1755702864424-bc88de1b04c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Gallery detail"
                            className="rounded-lg shadow-lg w-40 h-40 absolute z-10 top-10 -left-10 animate-move-left"
                        />
                        <img
                            src="https://px-studioassets.pixpa.com/pixpacom/images/homepage-2/build-website/build-website.jpg"
                            alt="Gallery detail"
                            className="mt-24 ml-auto rounded-lg shadow-lg w-40 h-40 absolute z-10 top-10 -right-10 animate-move-right"
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 2: Photography Templates */}
            <div className="gallery-section-2">
                <div className="h-full bg-black pt-10 text-white flex flex-col items-center font-bold text-5xl text-center">
                    <h1 className="bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 fade-in-down-stagger">
                        200+ Stunning, Responsive
                    </h1>
                    <h1 className="bg-clip-text bg-gradient-to-r text-sky-400 from-indigo-500 via-purple-500 to-pink-500 pb-1.5 fade-in-down-stagger">
                        Photography Templates
                    </h1>
                    <p className="text-xl text-gray-300 text-center font-light font-serif mt-16 max-w-4xl mx-auto fade-in-down-stagger">
                        Start your journey with us and let every moment turn into a timeless memory. From the laughter of celebrations to the quiet beauty of portraits, we capture it all with passion and precision. Your story is unique, and through our lens, it becomes unforgettable. We don’t just take pictures — we preserve emotions, details, and experiences. Every click is a step in your journey, and we’re honored to walk that path with you. Let us create images that speak louder than words and last for generations.
                    </p>
                    <button className="text-xl font-medium my-20 mb-24 gap-4 flex flex-row items-center justify-center mx-auto text-white hover:text-purple-400 transition-colors fade-in-down-stagger">
                        Browse Templates<FaArrowRight />
                    </button>
                </div>
            </div>

            {/* SECTION 3: Latest Work Gallery */}
            <div className="gallery-section-3">
                <div className="font-bold font-extralight text-2xl mt-12 py-12 text-center fade-in-stagger">
                    <h1>Latest work Gallery</h1>
                </div>
                <MyCarousel/>
            </div>
        </div>
    );
};

export default Gallery;