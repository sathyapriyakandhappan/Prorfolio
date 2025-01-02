import React from 'react'
import Calculator from '../Images/calculatorim.avif';
import Todo from '../Images/todoo.jpg';
import Form from '../Images/formmim.jpg';

const Projects = () => {
    return (
        <section className='flex flex-col py-20 px-5 justify-center bg-primary'>
            <div className='w-full'>
                <div className='flex flex-col px-10 py-5'>
                    <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[150px]'>Projects</h1>
                    <p>These are some of my projects. I have built these with react</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-row px-10 gap-5'>
                    <div className='relative'>
                        <img className='h-[200] w-[300px]' src={Calculator} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>A Ecommerce Webside</p>
                        </div>
                    
                    <div className='relative'>
                        <img className='h-[200] w-[300px]' src={Todo} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>A Ecommerce Webside</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200] w-[300px]' src={Form} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>A Ecommerce Webside</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
