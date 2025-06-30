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
            <div className="content">
                <h1 className="title">Join Our Company Meeting</h1>
                <p className="subtitle">Collaborate, Connect & Grow</p>
                <button className="btn">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
