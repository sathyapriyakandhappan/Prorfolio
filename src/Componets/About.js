import React from 'react'
import Aboutimg from '../Images/Aboutimg.webp';

function About() {
  return (
    <section className='flex md-flex-col bg-secondary px-5'>
    <div className='py-5 md:w-1/2'>
      <img src={Aboutimg} />
    </div>
    <div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
      <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px]'>About Me</h1>
      <p classname='pb-5'>Hi my name is Sathyapriya. I am a full stack web developer</p>
      <p className='pb-5'>I am proficient in Frontend skill like react </p>
      <p></p>
    </div>
    </div>
    </section>
  )
}

export default About
