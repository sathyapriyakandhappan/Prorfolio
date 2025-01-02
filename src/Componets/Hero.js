import React from 'react'
import Heroimg from '../Images/Heromodi.png';

function Hero() {
    return (
        <section className='flex flec-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>Hi, <br/> Im Sathyapriya
                    <p className='text-2xl'>I'm a Full Stract Developer</p></h1>
                <div className='flex py-10'>
                    <a href='#' classname='pr-5 hover:text-white'></a>
                    <a href='#' classname='pr-5 hover:text-white'></a>
                    <a href='#' className='hover:text-white'></a>

                </div>
            </div>
            <img className='md:w-1/3 ' src={Heroimg} />

        </section>
    )
}

export default Hero
