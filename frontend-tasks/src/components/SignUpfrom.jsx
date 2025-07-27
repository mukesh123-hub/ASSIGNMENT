import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({name:'', email: '', password: ''});
    const [errors,setErrors]=useState({})

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});

    }
    const validate=()=>{
        const errs={};
        if(!formData.name){
            errs.name="Name is required";
        }
        if(!formData.email){
            errs.email="Email is required";
        }
        if(formData.password<6){
            errs.password="Password is required";
        } 
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            console.log("Form submitted successfully", formData);
            // Here you can handle the form submission, e.g., send data to an API
        } else {
            console.log("Form has errors", errors);
        }
    };
    return (
       <form onSubmit={handleSubmit} className="mx-w-wd mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white">
         <h2 className='text-xl font-bold mb-4'>Sign Up</h2>
         <label className='block mb-2'>
            Full Name:
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className='w-full p-2 border rounded mt-1'
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
         </label>
         <label className='block mb-2'>
            Email:
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className='w-full p-2 border rounded mt-1'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
         </label>
         <label className='block mb-4'>
            Password:
            <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className='w-full p-2 border rounded mt-1'
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
         </label>
         <button className='bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600'>
            Sign Up
         </button>
       </form> 
    )
}

export default SignUpForm;