import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-[#8b1215] p-10 md:p-0 md:flex items-center justify-evenly mb-4 md:mb-10'>
            {/* first child */}
            <div className='w-72 text-white md:mt-18'>
                <div className='flex gap-3'><div><img className='w-12 bg-white rounded-sm mb-5' src="https://i.ibb.co/bgqq79Jz/pngegg.png" alt="logo" /></div> <div><h2 className='text-white font-medium text-2xl'>KHAWAJA</h2>
        <div><span className='text-amber-300'>MANPOWER</span> <span className='text-white'>SERVICES</span></div></div></div>
                <p className='mb-5'>Khawaja Manpower is an ISO certified agency, licensed by Government of Pakistan. Providing manpower recruiting services in Pakistan. Besides Human resource consultancy, Khawaja manpower provides 3rd party recruitment solutions to all Top employers worldwide.</p>
                <p>✓ License # 0711 / RWP</p>
                <span className='flex gap-1 mt-5 mb-5 justify-center'>
                    <FaFacebookF className='text-white border rounded-2xl text-2xl p-1 cursor-pointer hover:bg-blue-500 border-white'/>
                    <FaTwitter className='text-white border rounded-2xl text-2xl p-1 cursor-pointer hover:bg-blue-400 border-white'></FaTwitter>
                    <IoMdCall className='text-white border rounded-2xl text-2xl p-1 cursor-pointer hover:bg-green-500 border-white'></IoMdCall>
                    <FaLinkedinIn className='text-white border rounded-2xl text-2xl p-1 cursor-pointer hover:bg-blue-400 border-white'></FaLinkedinIn>
                </span>
                <div className="mb-5 flex gap-1 items-center justify-center group text-white/60 hover:text-white transition">
                <FaMapMarkerAlt className="text-lg opacity-60 group-hover:opacity-100 transition"></FaMapMarkerAlt>
                <a href="https://maps.app.goo.gl/ApjsGK5FvkjZ3UvKA" target="_blank" rel="noopener noreferrer" className="relative after:content-[''] after:block after:h-[2px] after:bg-white after:opacity-30 after:scale-x-50 group-hover:after:scale-x-100 group-hover:after:opacity-100 after:transition-transform after:duration-300">Google Map Here</a>    
                </div>
            </div>

            {/* second child */}
            <div className='w-60 text-white flex flex-col'>
                <a className='border-b-2 border-white/30 pb-0.5' href="">About Us</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Contact Us</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Executive Search</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Our Services</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Overseas Employment</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Permanent Recruitment and Staffing</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Staffing & HR Solution</a>
            </div>
            {/* third child */}
            <div className='w-60 text-white flex flex-col'>
                <a className='border-b-2 border-white/30 pb-0.5' href="">KSA Recruitment</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Recruitment Agency In Pakistan to Dubai</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Recruitment Agency in Pakistan to Bahrain</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Recruitment Agency in Pakistan to Kuwait</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Recruitment Agency in Pakistan to Qatar</a>
                <a className='border-b-2 border-white/30 pb-0.5' href="">Recruitment Agency in Pakistan to Malaysia</a>
            </div>
        </div>
    );
};

export default Footer;