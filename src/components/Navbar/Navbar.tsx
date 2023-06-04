import { authModalState } from '@/atom/authModalAtom';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {useSetRecoilState} from 'recoil'
import Logout from '../Buttons/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
type NavbarProps = {
    
};
 
const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState= useSetRecoilState(authModalState)
    const [user, loading, error] = useAuthState(auth);

    const handleclick= ()=>{
        setAuthModalState((prev)=>({...prev,isOpen:true}))
    }

    return <div className='flex item-center justify-between sm:px-12 px-2 md:px-24'>
       <Link href={"/"} className='h-20 flex items-center font-semibold text-3xl gap-1'>
        <Image src="/next-logo.svg" alt="logo" width={30} height={30} />
        LearnDSA
       </Link>
       <div className="flex items-center">
        {!user && <button onClick={handleclick} className='bg-black px-2 py-1 sm:px-4 text-sm font-medium rounded-md text-white  outline-none
        hover:bg-white hover:text-black hover:border-2 hover:border-black border-2 border-transparent transition duration-300 ease-in-out '>
            Sign In
        </button>}
        {user && 
        <div className='flex items-center justify-center gap-5'>
            <Link className='bg-black px-2 py-1 sm:px-4 text-sm font-medium rounded-md text-white  outline-none
        hover:bg-white hover:text-black hover:border-2 hover:border-black border-2 border-transparent transition duration-300 ease-in-out' href={"/problem"}>Problems</Link>
            <Logout />
        </div>
        }
       </div>
    </div>
}
export default Navbar;

