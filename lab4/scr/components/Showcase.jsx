import React from 'react';
import showcaseData from '../mockData/showcaseData';

const Showcase = () => {
    const { illustration, eyebrow, title, description, bottomCta } = showcaseData;

    return (
        <section className="showcase_section">
        <div className="showcase_section__left">
            <img 
            src={illustration.src} 
            alt={illustration.alt} 
            onError={(e) => {
                e.target.style.display = 'none';
            }}
            />
        </div>
        <div className="showcase_section__right">
            <p className="right__cta">{eyebrow}</p>
            <h2 className="right__header">{title}</h2>
            <p className="right__description">{description}</p>
            <a href="#" className="right__cta_bottom">{bottomCta}</a>
        </div>
        </section>
    );
};

export default Showcase;