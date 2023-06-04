import { authModalState } from '@/atom/authModalAtom';
import { auth } from '@/firebase/firebase';
import router from 'next/router';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';



type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    const setAuthModalState= useSetRecoilState(authModalState)
    const handleclick= (type:'register' | 'login' | 'forgotten password')=>{
        setAuthModalState((prev)=>({...prev,type:type}))
    }

    const [input, setinput] = useState({email:'',password:''})

    const handleChangeInput=(e: { target: { name: any; value: any; }; })=>{
        setinput((prev)=>({ ...prev, [e.target.name]:e.target.value}))
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin=async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const newuser = await signInWithEmailAndPassword(input.email, input.password)
            if(!newuser) return;
            setAuthModalState((prev)=>({...prev,isOpen:false}));

            router.push('/')
        } catch (error:any) {
            alert(error.message)
        }
    }

    return (
        <form onSubmit={handleLogin} className='space-y-6 px-6 pb-6'>
            <h3 className='text-black font-medium text-xl'>Sign In</h3>
            {error && <p className='text-red-600 font-medium'>{error.message}</p>}
            <div>
                <label htmlFor="email" className='text-gray-900 text-sm block font-medium pb-2'>Your Email</label>
                <input type="email" onChange={handleChangeInput} name="email" id="email" placeholder='Enter your email' className='p-2 rounded-lg 
                 border-2 outline-none focus:ring-blue-300 focus:border-blue-500 block w-full' />
            </div>
            <div>
                <label htmlFor="password" className='text-gray-900 text-sm block font-medium pb-2'>Your Password</label>
                <input type="password" onChange={handleChangeInput} name="password" id="password" placeholder='********' className='p-2 rounded-lg 
                 border-2 outline-none focus:ring-blue-300 focus:border-blue-500 block w-full' />
            </div>
            <button type="submit" className='bg-black w-full p-2 text-sm font-medium rounded-md text-white  outline-none
        hover:bg-white hover:text-black hover:border-2 hover:border-black border-2 border-transparent transition duration-300 ease-in-out'>
            {loading ? "Loading..." : "Login"}

            </button>
            <button className='flex justify-end w-full'>
                <a href="#" onClick={()=>{handleclick('forgotten password')}} className='hover:underline text-sm text-brand-orange text-right'>Forgot password?</a>
            </button>
            <div className='text-sm font-medium text-gray-500'>
                Not Registered?{" "}
                <a href="#" onClick={()=>{handleclick('register')}} className='text-blue-600 hover:underline'>
                     Create Account
                </a>
            </div>
        </form>
    )
}
export default Login;