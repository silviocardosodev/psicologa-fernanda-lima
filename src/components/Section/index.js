import React from 'react';
import './style.global.css';

const Section = ({ title, subtitle }) => {
    return (
        <section>
            <div className="section-content">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
            </div>
        </section>
    );
};

export default Section;
