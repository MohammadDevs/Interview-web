import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div className='max-w-[1080px] mx-auto'>
        <header>
            <img className='mx-auto w-5xl my-10' src="https://i.ibb.co/DHcfLhGL/about.png" alt="about" />    
        </header> 
        <div className='md:flex gap-10 md:p-6'>
            <aside className='md:w-1/4 m-5 p-4 flex flex-col md:border-r border-amber-500'>
                
                {/* Our Story link (exact match only) */}
                    <NavLink
                        to="/about"
                        end // ✅ only active when path is exactly "/about"
                        className={({ isActive }) =>
                            `btn rounded-2xl p-5 mb-3 text-left ${
                                isActive
                                    ? "bg-[#8b1215] text-white"
                                    : "bg-[#8b1215]/30 text-white/70 hover:bg-[#8b1215]/70"
                            }`
                        }
                    >
                        Our Story
                    </NavLink>

                    {/* Our Vision link */}
                    <NavLink
                        to="vision"
                        className={({ isActive }) =>
                            `btn rounded-2xl p-5 mb-3 text-left ${
                                isActive
                                    ? "bg-[#8b1215] text-white"
                                    : "bg-[#8b1215]/30 text-white/70 hover:bg-[#8b1215]/70"
                            }`
                        }
                    >
                        Our Vision
                    </NavLink>

                    {/* Optional: Mission, License etc. future links */}
                    <NavLink
                        to="mission"
                        className={({ isActive }) =>
                            `btn rounded-2xl p-5 mb-3 text-left ${
                                isActive
                                    ? "bg-[#8b1215] text-white"
                                    : "bg-[#8b1215]/30 text-white/70 hover:bg-[#8b1215]/70"
                            }`
                        }
                    >
                        Our Mission
                    </NavLink>

                    <NavLink
                        to="license"
                        className={({ isActive }) =>
                            `btn rounded-2xl p-5 mb-3 text-left ${
                                isActive
                                    ? "bg-[#8b1215] text-white"
                                    : "bg-[#8b1215]/30 text-white/70 hover:bg-[#8b1215]/70"
                            }`
                        }
                    >
                        License Info
                    </NavLink>
            </aside>
            <div className='m-3 md:m-0 md:w-3/4 md:mt-10 px-2'>
            <Outlet>
            </Outlet>
            </div>
        </div>

        </div>
    );
};

export default About;