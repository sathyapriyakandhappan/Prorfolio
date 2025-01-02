import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <Bars3Icon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
const Header = () => {
  const [toggedMenu, setTogglemenu] = useState(false)

  return (
    <header className='flex justify-between py-2 px-5 bg-secondary'>
      <a className='text-bold text-white' href="#">sathu logo</a>
      <nav className='hidden md:block'>
        <ul className='flex text-white'>
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Project">Project</a></li>
        </ul>
      </nav>
      {toggedMenu && <nav className='block md:hidden ' >
        <ul className='flex flex-col text-white mobile-nav'>
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Project">Project</a></li>
        </ul>
      </nav>
      }        <button onClick={() => setTogglemenu(!toggedMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'></Bars3Icon></button>
    </header>
  )
}

export default Header
