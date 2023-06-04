import { auth, firestore } from '@/firebase/firebase';
import { problems } from '@/mockProblems/problems';
import { DBProblem } from '@/utils/types/problem';
import { query, collection, where, orderBy, getDocs, doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillYoutube } from "react-icons/ai"

type ProblemsTableProps = {
    setloading:any
};


const ProblemsTable:React.FC<ProblemsTableProps> = ({setloading}) => {
    const problems=useGetProblems(setloading);
    const solvedProblems=useGetSolvedProblems();
    return (
        <tbody className='text-black font-medium'>
            {problems.map((problem,i)=>{
                const difficultyColor= problem.difficulty==="Easy"?"text-dark-green-s":problem.difficulty==="Medium"?"text-dark-yellow":"text-dark-pink";
                return(
                    <tr key={problem.id} className={`${ i % 2 ==1 ?"bg-dark-layer-1":""}`}>
                        <th className='px-2 py-2'>
                           {solvedProblems.includes(problem.id) && <p className='text-2xl '>✅</p>} 
                        </th>
                        <td className='px-6 py-2'>
                            <Link className='cursor-pointer hover:text-blue-600' href={`/problems/${problem.id}`}>
                                {problem.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-2 ${difficultyColor}`}>
                            {problem.difficulty}
                        </td>
                        <td className='px-6 py-2'>
                            {problem.category}
                        </td>
                        <td className='px-10 py-2'>
                            <Link target="_blank" href={`https://www.youtube.com/results?search_query=${problem.title} problems`} >
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer hover:text-red-600'
									/>
                            </Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default ProblemsTable;

function useGetProblems(setloading: any){
    const [problems,setProblems]=useState<DBProblem[]>([]);

    useEffect(()=>{
        const getProblems = async ()=>{
            setloading(true);
            const q = query(collection(firestore, "problems"), orderBy("order","asc"));
            const querySnapshot = await getDocs(q);
            const tmp:DBProblem[]=[];
            querySnapshot.forEach((problem) => {
                tmp.push({id: problem.id,...problem.data()} as DBProblem)
            });
            setProblems(tmp);
            setloading(false)
        }
        getProblems();
    },[setloading])

    return problems;
}

function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const getSolvedProblems = async () => {
			const userRef = doc(firestore, "users", user!.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setSolvedProblems(userDoc.data().solvedProblems);
			}
		};

		if (user) getSolvedProblems();
		if (!user) setSolvedProblems([]);
	}, [user]);

	return solvedProblems;
}
