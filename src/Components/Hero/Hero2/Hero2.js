import React from 'react'
import placeholder from "../../../Assets/placeholder.jpg"
import "./Hero2.scss"

function Hero2() {
    return (
        <main>
            <div className='hero-container'>

            <div className='leftside'>
                        <img className='leftside__img' src={placeholder} alt="placeholder img" />
                </div>

                <div className='rightside'>
                    <h1 className='rightside__header'>Lorem ipsum dolor sit amet </h1>
                    <h3 className='rightside__body'>Urabitur venenatis pulvinar lorem in fermentum. Sed vitae erat 
                        ut sapien mollis ultricies. 
                    </h3>
                    <div className='rightside__button'>
                        <button className='rightside__button--click'>Call To Action</button>
                    </div>

                </div>


            </div>
        </main>
    )
}

export default Hero2