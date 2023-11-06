import React from 'react'
import placeholder from "../../../Assets/placeholder.jpg"
import "./Hero1.scss"

function Hero1() {
    return (
        <main>
            <div className='hero-container'>
                <div className='leftside'>
                    <h1 className='leftside__header'>Lorem ipsum dolor sit amet </h1>
                    <h3 className='leftside__body'>Urabitur venenatis pulvinar lorem in fermentum. Sed vitae erat 
                        ut sapien mollis ultricies. 
                    </h3>
                    <div className='leftside__button'>
                        <button className='leftside__button--click'>Call To Action</button>
                    </div>

                </div>
                <div className='rightside'>
                        <img className='rightside__img' src={placeholder} alt="placeholder img" />
                </div>

            </div>
        </main>
    )
}

export default Hero1