import React from 'react';
import Navbar from './components/Navbar';
import SignUpForm from "./components/SignUpfrom.jsx";

import UserCard from './components/UserCard';

function App() {
  

  return (
    <>
      <Navbar/>
      <div className='p-4'>
        <SignUpForm/>
        <div className='mt-10'>
          <h2 className='text-xl font-bold mb-4'>User Cards</h2>
          <div className='flex flex-wrap'>
            <UserCard name="John Doe" email="mukesh@123.com"/>
            <UserCard name="Priya Sharma" email="priya@example.com" />
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
