import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url('https://i.ibb.co/6086LC80/hero.jpg')`,
            }}
        >
            {/* ✅ Creamy white overlay */}
            <div className="overlay"></div>

            {/* ✅ Content on top */}
            <div className="content mt-4 md:ml-16 md:mt-30">
                <h3 className='text-[#8b1215] text-lg font-semibold mb-4'>Top Recruitment Agency in Pakistan</h3>
                <h1 className="title text-[#8b1215] text-4xl font-bold mb-4">Best Overseas Employment and Recruitment <br /> Agency In Pakistan</h1>
                <p className="subtitle text-[#8b1215] text-xl font-semibold mb-4">Efficient, Skilled, Reliable: Hire Pakistani Manpower for Your Business Needs!</p>
                <p>Khawaja Manpower is an international and one of the best and top overseas employment and recruitment agencies <br /> in Pakistan that provides recruitment, HR solutions, staffing and job consultancy to our clients and job seekers. <br /> Having 30+ years of HR staffing and recruiting experience we are considered among the list of top 10 manpower <br /> recruitment agencies in Pakistan. Khawaja Manpower is approved by the Bureau of Emigration & Overseas <br /> Employment, Pakistan. We are a registered overseas employment promoter (OEP) in Pakistan having a <a href="/">license no. 0711/Rwp.</a></p>
                <div className='flex items-center gap-6 mt-4 md:mt-10'>
                    <button className="btn bg-[#8b1215] text-white rounded-3xl hover:text-gray-500">Contact Us Now</button>
                    <a className='text-[#8b1215] text-lg font-semibold' href="/#">+923134289999</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
