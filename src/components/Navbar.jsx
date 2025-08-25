import React, { useRef, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { gsap } from "gsap";
import { FaBattleNet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const container = useRef(null);

    useEffect(() => {
  
        const tl = gsap.timeline();

       
        gsap.set(".fade-in", {
            opacity: 0,
            y: -70,
        });

     
        tl.to(".icon", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
        });

    
        tl.to(".nav-link", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.15,
        }, "-=1");

        return () => tl.kill();

    }, []);

    return (
        <div  ref={container}>
            <div ></div>
            <Navbar className='flex   flex-row justify-between items-center !important dark:bg-amber-50 '>
                <div className="text-6xl py-1 px-8 m-2.5 fade-in icon">
                    <FaBattleNet/>
                </div>
                <div className='flex flex-row justify-end gap-10 text-xl font-semibold mr-56 mb-8'>
                    <Link to="/" className="nav-link fade-in hover:text-red-800 hover:cursor-pointer">Home</Link>
                    <Link to="/Gallery" className="nav-link fade-in  hover:text-red-800 hover:cursor-pointer">Gallery</Link>
                    <Link to="/Contact" className="nav-link fade-in  hover:text-red-800 hover:cursor-pointer ">Contact</Link>
                </div>
            </Navbar>
        </div>
    );
}

export default Navbar1;