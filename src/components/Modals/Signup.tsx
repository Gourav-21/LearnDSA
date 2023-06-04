import { authModalState } from '@/atom/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';



type SignupProps = {};

const Signup:React.FC<SignupProps> = () => {
    
    const setAuthModalState= useSetRecoilState(authModalState)
    const handleclick= ()=>{
        setAuthModalState((prev)=>({...prev,type:'login'}))
    }

    const [input, setinput] = useState({email:'',Displayname:'',password:''})
    
    const handleChangeInput=(e: { target: { name: any; value: any; }; })=>{
        setinput((prev)=>({ ...prev, [e.target.name]:e.target.value}))
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const router=useRouter();

    const handleRegister= async (e:React.FormEvent<HTMLFormElement>) =>{
        // if(!input.Displayname || !input.email || !input.password)alert("fill all the fields")        

        e.preventDefault();
        try {
            const newuser = await createUserWithEmailAndPassword(input.email, input.password)
            if(!newuser) return;
            setAuthModalState((prev)=>({...prev,isOpen:false}));
            const userdata={
                uid:newuser.user.uid,
                email:newuser.user.email,
                displayName:input.Displayname,
                createdAt:Date.now(),
                updatedAt:Date.now(),
                likedProblems:[],
                dislikedProblems:[],
                solvedProblems:[],
                starredProblems:[],
                admin:false
            }
            await setDoc(doc(firestore, "users", newuser.user.uid), userdata);
            router.push('/')
        } catch (error:any) {
            alert(error.message)
        }
    }

    return <form onSubmit={handleRegister} className='space-y-6 px-6 pb-6'>
    <h3 className='text-black font-medium text-xl'>Register</h3>
    {error && <p className='text-red-600 font-medium'>{error.message}</p>}
    

    <div>
        <label htmlFor="email" className='text-gray-900 text-sm block font-medium pb-2'>Email</label>
        <input onChange={handleChangeInput} required type="email" name="email" id="email" placeholder='Enter your email' className='p-2 rounded-lg 
         border-2 outline-none focus:ring-blue-300 focus:border-blue-500 block w-full' />
    </div>
    <div>
        <label htmlFor="Displayname" className='text-gray-900 text-sm block font-medium pb-2'>Display Name</label>
        <input type="text" required onChange={handleChangeInput} name="Displayname" id="Displayname" placeholder='Enter a Display name' className='p-2 rounded-lg 
         border-2 outline-none focus:ring-blue-300 focus:border-blue-500 block w-full' />
    </div>
    <div>
        <label htmlFor="password" className='text-gray-900 text-sm block font-medium pb-2'>Password</label>
        <input type="password" required onChange={handleChangeInput} name="password" id="password" placeholder='********' className='p-2 rounded-lg 
         border-2 outline-none focus:ring-blue-300 focus:border-blue-500 block w-full' />
    </div>
    <button  type="submit" className='bg-black w-full p-2 text-sm font-medium rounded-md text-white  outline-none
        hover:bg-white hover:text-black hover:border-2 hover:border-black border-2 border-transparent transition duration-300 ease-in-out'>
        {loading ? "Registering..." : "Register"}
    </button>
    <div className='text-sm font-medium text-gray-900'>
        Already have an Account?{" "}
        <a href="#" onClick={handleclick} className='text-blue-600 hover:underline'>
            Log in
        </a>
    </div>
</form>
}
export default Signup;