import React, { useRef, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { gsap } from "gsap";
import { FaBattleNet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const container = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        gsap.set(".nav-item", {
            opacity: 0,
            y: -20,
        });

        tl.to(".nav-icon", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
        });

        tl.to(".nav-item", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.15,
        }, "-=1");

        return () => tl.kill();
    }, []);

    return (
        <Navbar fluid rounded className="!bg-amber-50 dark:!bg-amber-50 p-4">
            <div className="flex items-center justify-between w-full">
                <Link to="/" className="flex items-center nav-icon opacity-0">
                    <FaBattleNet className="text-4xl sm:text-5xl lg:text-6xl" />
                </Link>

                <div className="flex gap-6 text-xl font-semibold">
                    <Link to="/" className="nav-item hover:text-red-800 text-black">
                        Home
                    </Link>
                    <Link to="/Gallery" className="nav-item hover:text-red-800 text-black">
                        Gallery
                    </Link>
                    <Link to="/Contact" className="nav-item hover:text-red-800 text-black">
                        Contact
                    </Link>
                </div>
            </div>
        </Navbar>
    );
};

export default Navbar1;
