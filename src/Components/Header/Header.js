import React, { useState } from 'react'
import "./Header.scss"
import Header1 from "./Header1/Header1"
import Header2 from "./Header2/Header2"
import Header3 from "./Header3/Header3"
// import more templates

function Hero({ selectedNavBar, setSelectedNavBar }) {
    const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
    const templates = [Header1, Header2, Header3];    // add templates here

    const nextTemplate = () => {                                                    // move through the template array
        setCurrentTemplateIndex((currentTemplateIndex + 1) % templates.length);     // ensures that the index wraps around to 0 if it exceeds the total number of templates
    };

    const previousTemplate = () => {
        setCurrentTemplateIndex((currentTemplateIndex - 1 + templates.length) % templates.length);
    };

    const renderHeaderTemplate = () => {                    // used to render the selected template component dynamically
        const Template = templates[currentTemplateIndex];
        return <Template />;
    };

    return (
        <div>
            <div className="hero-container">
                {renderHeaderTemplate()}
            </div>
            <div className="button-container">
                <button className='button-container__left' onClick={previousTemplate}>Previous</button>
                <button className='button-container__left' onClick={nextTemplate}>Next</button>
            </div>
        </div>
    )
}

export default Hero