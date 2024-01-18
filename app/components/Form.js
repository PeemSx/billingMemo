"use client"
import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        lender: 'lender', 
        borrower: 'borrower', 
        list : "description",
        money : 0,

    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch("api/lists", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData ),
            });
        
            const result = await response.json();
            console.log("Success:", result);
            location.reload()
          } catch (error) {
            console.error("Error:", error);
          }
    }

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    }
  return (
    <div className='flex justify-center my-8'>
      <form className='pb-8 bg-gray-800 sm:max-lg:w-full lg:w-1/2 items-center text-center rounded-xl space-x-2 py-4' onSubmit={handleSubmit}>
        <h1 className='font-bold my-4 text-xl'>Write Your List Here</h1>
        <select className='bg-black px-2 rounded-lg py-1 sm:max-lg:my-2 ' name='lender' onChange={handleChange}>
            <option defaultValue="Lender">Lender</option>
            <option value="Peem">Peem</option>
            <option value="OT">OT</option>
            <option value="Tonkla">Tonkla</option>
        </select>
        
        <select className='bg-black px-2 rounded-lg py-1'  name='borrower' onChange={handleChange}>
            <option defaultValue="Borrower">Borrower</option>
            <option value="Peem">Peem</option>
            <option value="OT">OT</option>
            <option value="Tonkla">Tonkla</option>
        </select>
        
        <input type='text' placeholder='description' className='bg-black px-2 rounded-lg py-1 my-2' autoComplete="off" name='list' onChange={handleChange}></input>
        <input type='number' placeholder='money' className='bg-black px-2 rounded-lg py-1 my-2' autoComplete="off" name='money'  onChange={handleChange}></input>
        <br/>
        <button type='submit' className='bg-green-600 px-4 p-1 rounded-lg font-bold my-2' >OK</button>
      </form>
    </div>
  )
}

export default Form
