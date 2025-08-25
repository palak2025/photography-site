import React, { useEffect } from 'react';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from 'react-icons/hi';
import { gsap } from 'gsap';

const Contact = () => {
  useEffect(() => {
    gsap.fromTo('.form-field',
      { opacity: 0, y: 20, scale: 1.1 },
      { opacity: 1, y: 0, scale: 1.0, duration: 0.6, stagger: 0.12, ease: 'power1.out' }
    );
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen w-full bg-gray-700 p-6'>
      <form className="bg-white shadow-md rounded-xl p-8 w-full max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 form-field">Book a session with us!</h1>
 
        
        <div className='flex flex-col gap-6 w-full'>
          <div className='form-field'>
            <Label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name</Label>
            <TextInput type="text" id="firstName" className='w-full shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' placeholder="John" required />
          </div>

          <div className='form-field'>
            <Label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name</Label>
            <TextInput type="text" id="lastName" className='w-full shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' placeholder="Kenny" required />
          </div>

          <div className='form-field'>
            
            <TextInput id="email1" type="email" icon={HiMail} className='w-full shadow-sm border-gray-300 mt-6 focus:border-indigo-500 focus:ring-indigo-500' placeholder="name@flowbite.com" required />
          </div>

          <div className='form-field'>
            <Label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Feel free to tell us more!</Label>
            <Textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 shadow-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Leave a message..." required />
          </div>
        </div>

        <div className="flex items-center gap-2 form-field mt-6 ml-46 ">
          <Checkbox id="remember" />
        
        </div>
        <Button type="submit" className='form-field font-bold bg-indigo-600 hover:bg-indigo-700 text-white mt-6 ml-28 flex items-center justify-center w-40 h-10'>Submit</Button>
      </form>
    </div>
  );
};

export default Contact;