import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaBattleNet } from 'react-icons/fa'; // Assuming this is your logo icon
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand and About Section */}
                    <div className="md:col-span-1">
                        <div className="text-4xl text-white mb-4">
                            <FaBattleNet />
                        </div>
                        <p className="text-sm">
                            We capture life's moments through a unique lens, turning fleeting memories into timeless art.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Email: palaksharmaa83@gmail.com</li>
                            <li>Phone: +1 (123) 456-7890</li>
                            <li>Address: sector 62 , Art City, 54321</li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-white hover:text-blue-500 transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://twitter.com" className="text-white hover:text-blue-400 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="text-white hover:text-pink-500 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" className="text-white hover:text-blue-600 transition-colors">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>
                </div>

 
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Palak Sharma . All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;