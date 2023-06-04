import { auth } from '@/firebase/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from "react-icons/fi";


const Logout:React.FC = () => {

    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout = async ()=>{
        await signOut();
    }

    
    return (
        <button className='bg-dark-fill-3 hover:bg-dark-fill-2 py-2 px-3 rounded text-brand-orange' onClick={handleLogout}>
			<FiLogOut /> 
        </button>
    ); 
}
export default Logout;