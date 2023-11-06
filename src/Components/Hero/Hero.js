import React, { useState } from 'react'
import "./Hero.scss"
import Hero1 from "./Hero1/Hero1"
import Hero2 from "./Hero2/Hero2"
import Hero3 from "./Hero3/Hero3"
// import more templates

function Hero({ selectedHero, setSelectedHero }) {
    const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
    const templates = [Hero1, Hero2, Hero3];    // add templates here

    const nextTemplate = () => {                                                    // move through the template array
        setCurrentTemplateIndex((currentTemplateIndex + 1) % templates.length);     // ensures that the index wraps around to 0 if it exceeds the total number of templates
    };

    const previousTemplate = () => {
        setCurrentTemplateIndex((currentTemplateIndex - 1 + templates.length) % templates.length);
    };

    const renderHeroTemplate = () => {                          // used to render the selected template component dynamically
        const Template = templates[currentTemplateIndex];
        return <Template />;
    };

    return (
        <div>
            <div className="hero-container">
                {renderHeroTemplate()}
            </div>
            <div className="button-container">
                <button className='button-container__left' onClick={previousTemplate}>Previous</button>
                <button className='button-container__left' onClick={nextTemplate}>Next</button>
            </div>
        </div>
    )
}

export default Hero