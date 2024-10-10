import React from 'react';
import './style.global.css';

const Banner = () => {
    return (
        <section className="hero-banner">
            <div className="overlay"></div>
            <div className='hero-pre-content'>
                <div className="hero-content">
                    <h1 className="hero-title">Encontre equilíbrio e bem-estar com a terapia online!</h1>
                    <p className="hero-subtitle">Receba o apoio psicológico necessário, no conforto do seu lar. Descubra como a terapia online pode transformar a sua vida!</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;