import React from 'react';
import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '@/firebase/firebase'

type AdminProps = {
    
};

const Admin:React.FC<AdminProps> = () => {
    const [input, setInput] = useState({
        id: "",
        title:"",
        difficulty:"",
        category:"",
        link:"",
        order:0,
        like:0,
        dislike:0
    })

	const handleInputChange=(e:any)=>{
		setInput({...input,[e.target.name]:e.target.value})
	}

	const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
		console.log("its woeking")
		e.preventDefault();
		const newProblem={
			...input,order:Number(input.order)
		}
		await setDoc(doc(firestore, "problems", input.id), newProblem);
		alert("saved to db")
	}
    
    return <form className="p=6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}>
    <input onChange={handleInputChange} type="text" name="id" placeholder='id' />
    <input onChange={handleInputChange} type="text" name="title" placeholder='title' />
    <input onChange={handleInputChange} type="text" name="difficulty" placeholder='difficulty' />
    <input onChange={handleInputChange} type="text" name="category" placeholder='category' />
    <input onChange={handleInputChange} type="text" name="order" placeholder='order' />
    <input onChange={handleInputChange} type="text" name="link" placeholder='link?' />
    <button  className='bg-white'>save to db</button>
</form>
}
export default Admin;

