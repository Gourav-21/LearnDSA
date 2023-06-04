import React, { useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import { useRecoilState } from 'recoil';
import { authModalState } from '@/atom/authModalAtom';

type AuthModalProps = {
};

const AuthModal:React.FC<AuthModalProps> = () => {
    const [AuthModalState,setAuthModalState]= useRecoilState(authModalState)
    const handleclick= ()=>{
        setAuthModalState((prev)=>({type:"login",isOpen:false}))
    }

    useEffect(()=>{
        const handleEsc=(e:KeyboardEvent)=>{
            if(e.key==="Escape") handleclick();
        }
        window.addEventListener("keydown",handleEsc)
        return window.removeEventListener("keydown",handleEsc)
    },[])

    return <>
    <div
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm'></div>
    <div className='w-full sm:w-[400px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b '>
                <div className='flex justify-end p-2'>
                    <button
                        type='button'
                        className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-black'
                        onClick={handleclick} 
                    >
                        <IoClose className='h-5 w-5'/>
                    </button>
                </div>
                {AuthModalState.type=='login'?<Login/>: AuthModalState.type=='register'?<Signup/>: <ResetPassword/>}
            </div>
        </div>
    </div>
</>
}
export default AuthModal;