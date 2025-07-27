import React,{useState} from 'react';
import {FaBars} from 'react-icons/fa'

const Navbar=()=>{
    const [open,setOpen]=useState(false);

    return (
        <nav className='bg-gray-800 text-white p-4 '>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
                <h1 className='text-xl font-bold'>MySite</h1>
                <button className='md:hidden' onClick={()=> setOpen(!open)}>
                    <FaBars/>
                </button>
                <ul className={`md:flex space-x-4 ${open ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
                    <li><a href="#" className='hover:underline'>Home</a></li>
                    <li><a href="#" className='hover:underline'>About</a></li>
                    <li><a href="#" className='hover:underline'>Contact</a></li>

                </ul>
            </div>
        </nav>

    )
}

export default Navbar;