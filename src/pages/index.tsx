import { authModalState } from '@/atom/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';
import Image from 'next/image';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';
import styled, { keyframes } from 'styled-components';
import Link from "next/link";

const gradientMove = keyframes`
0% {
    background-position: 0 50%
}
50% {
    background-position: 100% 50%
}
100% {
    background-position: 0 50%
}
`;


const GradientText = styled.div`
display: inline-block;
background: linear-gradient(to right, red, orange, yellow);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  animation: ${gradientMove} 1s linear infinite;
  background-size: 200% 200%;
`;

type AuthProps = {

};

const Auth: React.FC<AuthProps> = () => {

    const authModal = useRecoilValue(authModalState)
    const [user, loading, error] = useAuthState(auth);
    const [pageloading, setPageloading] = useState(true);

    useEffect(() => {
        // if(user)router.push("/basic")   ^&& !user
        if (!loading) setPageloading(false)
    }, [user, loading])

    if (pageloading) return null;

    return <div className=' h-screen '>
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <div className="flex flex-col text-center item-center justify-center sm:h-[calc(100vh-5rem)]">
                <div className='text-6xl pb-10  px-20 font-bold select-none'>Unlock the World of Coding Wizardry with LearnDSA🧝</div>
                <p className='p-10 text-dark-divider-border-2 text-xl select-none'> <GradientText>AI</GradientText>-Enhanced Journey to Master Data Structures and Algorithms</p>
                <div className="flex justify-center items-center">
                    <Link href="/basic">
                        <div className='p-4 m-4 rounded-md  border cursor-pointer border-slate-300 hover:border-black max-w-fit'>Start Learning</div>
                    </Link>

                    <Link
                        href={"/problem"}
                        className='bg-black p-4 sm:p-4 text-sm font-medium rounded-md text-white  outline-none
                        hover:bg-white hover:text-black hover:border-2 hover:border-black border-2 border-transparent transition duration-300 ease-in-out '
                    >
                        Problem set
                    </Link>
                </div>

            </div>
            {authModal.isOpen && <AuthModal />}
        </div>
    </div>
}
export default Auth;