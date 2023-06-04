import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useRecoilState } from "recoil";
import { authModalState } from "@/atom/authModalAtom";
import AuthModal from "../Modals/AuthModal";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user, loading, error] = useAuthState(auth);
  const [AuthModalState, setAuthModalState] = useRecoilState(authModalState);
  const router = useRouter();


  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
        const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
        router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
        const lastProblemKey = Object.keys(problems).find(
            (key) => problems[key].order === Object.keys(problems).length
        );
        router.push(`/problems/${lastProblemKey}`);
    } else {
        router.push(`/problems/${nextProblemKey}`);
    }
  };

  const handleclick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };

  return (
    <nav className="relative  flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-8">
      <div
        className={`flex w-full items-center justify-between ${
          !problemPage ? "max-w-[1200px] mx-auto" : ""
        }`}
      >
        <Link
          href={"/"}
          className='"h-[22px] flex-1 h-20 flex items-center font-medium text-3xl gap-1'
        >
          <Image src="/next-logo.svg" alt="logo" width={30} height={30} />
          {/* LearnDSA */}
        </Link>

        {problemPage && (
          <div className="flex items-center justify-center gap-4 flex-1 ">
            <div
              className="bg-dark-fill-3 p-2 rounded hover:bg-dark-fill-2"
              onClick={() => {
                handleProblemChange(false);
              }}
            >
              <FaChevronLeft />
            </div>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-dark-gray-8"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="bg-dark-fill-3 p-2 rounded hover:bg-dark-fill-2"
              onClick={() => {
                handleProblemChange(true);
              }}
            >
              <FaChevronRight />
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          {problemPage && <Timer />}

          {!user && (
            <Link href="/auth">
              <button
                onClick={handleclick}
                className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded "
              >
                Sign In
              </button>
            </Link>
          )}
          {user && (
            <div className="cursor-pointer group relative">
              <Image
                className="rounded-full"
                src="/user-logo.png"
                alt="user profile"
                width={32}
                height={100}
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}

          {user && <Logout />}
          {AuthModalState.isOpen && <AuthModal />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
