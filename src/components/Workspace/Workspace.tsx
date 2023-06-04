import React, { use, useState } from "react";
import Split from "react-split";
import ProblemDesciption from "./ProblemDescription/ProblemDesciption";
import Playgound from "./Playgound/Playgound";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/hook/useWindowSize";


type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const {width,height}=useWindowSize();
  const [success, setSuccess] = useState(false)
	const [solved, setSolved] = useState(false);

  return (
    <Split className="split" gutterAlign="end" minSize={0}>
      <ProblemDesciption problem={problem} _solved={solved} />
      <div className='bg-dark-fill-2'>
      <Playgound problem={problem} setSuccess={setSuccess} setSolved={setSolved}/>
      {success && <Confetti gravity={0.4} numberOfPieces={500} className="z-50" tweenDuration={4000} width={width} height={height-1}/>}
      </div>
    </Split>
  );
};
export default Workspace;
