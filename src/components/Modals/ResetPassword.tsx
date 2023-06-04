import { auth } from '@/firebase/firebase';
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

type ResetPasswordProps = {

};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const actionCodeSettings = {
        url: 'https://www.example.com/login',
      }; 
    
    const handle=async (e:any)=>{
        e.preventDefault();
            const success = await sendPasswordResetEmail(email);
    }

    return <form action="post" className='space-y-6 px-6 pb-6'>
        <h3 className='text-black font-medium text-xl'>Reset Password</h3>
        {error && <p className='text-red-900 font-medium'>{error.message}</p>}
        {sending && <p className='text-red-900 font-medium'>Sent email</p>}
        <p className='text-black text-sm'>Fogotten your password?? Enter your email address below, and we&apos;ll send you an email allowing you to reset your password</p>
        <div>
            <label htmlFor="email" className='text-gray-900 text-sm block font-medium pb-2'>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Enter your email' className='p-2 rounded-lg 
         border-2 outline-none focus:ring-blue-300 focus:border-blue-500 block w-full' />
        </div>

        <button type="submit" onClick={handle} className='bg-black w-full p-2 text-sm font-medium rounded-md text-white  outline-none
        hover:bg-white hover:text-black hover:border-2 hover:border-black border-2 border-transparent transition duration-300 ease-in-out'>
            Reset Password
        </button>
        
    </form>
}
export default ResetPassword;