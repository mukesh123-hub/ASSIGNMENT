import React from 'react';
const UserCard=({name,email})=>{
    return(
        <div className='max-w-sm p-4 border rounded-lg shadow-md bg-white m-4'>
            <h2 className='text-xl font-bold mb-2'>{name}</h2>
            <p className='text-gray-600'>{email}</p>
        </div>
    )
}

export default UserCard;