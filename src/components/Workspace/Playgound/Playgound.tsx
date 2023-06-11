import React, { useEffect, useState } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";
import { Problem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { settings } from "firebase/analytics";
import useLocalStorage from "@/hook/useLocalStorage";
import Ai from "./Ai";

type PlaygoundProps = {
  problem: Problem,
  setSuccess:any;
  setSolved:any;
};

export interface ISetting{
  fontSize:string,
  SettingsModalIsOpen:boolean,
  dropdownIsOpen:boolean
}

const Playgound: React.FC<PlaygoundProps> = ({ problem,setSuccess,setSolved }) => {
  const [activeTestCase,setActiveTestCase]=useState(0);
  let [userCode, setUserCode] = useState<string>(problem.starterCode)
  const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");
  const [ai, setAi] = useState(false)


  const [Settings, setSettings] = useState<ISetting>({
    fontSize:fontSize,
    SettingsModalIsOpen:false,
    dropdownIsOpen:false,
  })

  const [user] = useAuthState(auth)
  const {query: {pid}}=useRouter();

  const handleAi=()=>{
    setAi(!ai);
  }

  const handleSubmit= async ()=>{
    if(!user){
      toast.error("Please login to submit code",{position:"top-center",theme:"dark"})
      return
    }
    try {
      userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName))
      const cb=new Function(`return ${userCode}`)();
      const handler=problems[pid as string].handlerFunction;

      if(typeof handler === "function"){
        const success= handler(cb)
        if(success){
          toast.success("Congrats! All tests passed!",{
            position:"top-center",
            autoClose:3000,
            theme:"dark"
          })
          setSuccess(true);
          setTimeout(()=>{
            setSuccess(false);
          },3000)
  
          const userRef=doc(firestore,"users",user.uid);
          await updateDoc(userRef,({
            solvedProblems: arrayUnion(pid),
          }))
  
          setSolved(true);
        }
      }

    } catch (error:any) {
      console.log(error);
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
    }
  }

  useEffect(() => {
    const code = localStorage.getItem(`code-${pid}`);
    if(user){
      setUserCode(code? JSON.parse(code) : problem.starterCode)
    }else{
      setUserCode(problem.starterCode)
    }
  
    
  }, [pid,problem.starterCode,user])
  

  const onChange=(value:string)=>{
    setUserCode(value);
    localStorage.setItem(`code-${pid}`, JSON.stringify(value));
  }
  return (
    <>
      <div className="bg-dark-layer-1 flex flex-col relative overflow-hidden">
        <PreferenceNav settings={Settings} setSettings={setSettings} />

      {ai?<Ai/>:
        <Split
          className="h-[calc(100vh-94px)]"
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}
        >
          <div className="w-full overflow-auto ">
            <CodeMirror
              value={userCode}
              extensions={[javascript()]}
              onChange={onChange}
              style={{ fontSize: Settings.fontSize }}
              theme={xcodeLight}
              
            />
          </div>

          <div className="w-full px-5  overflow-auto">
            <div className="flex h-10 items-center space-x-6">
              <div className="relative flex h-full flex-col justify-center cursor-pointer">
                <div className="text-xs font-medium leading-5 text-black">
                  Testcases{" "}
                </div>
                <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-black" />
              </div>
            </div>

            <div className="flex mt-2 text-sm">
              {problem.examples.map((example,index)=>(
                <div className="mr-2 item-start mt-2 text-black" key={example.id} onClick={()=>{setActiveTestCase(index)}}>
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all focus:outline-none inline-flex
                        bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                        ${activeTestCase===index?"bg-dark-fill-2":"text-gray-500"}`}>
                    Case {index +1 }
                  </div>
                </div>
              </div>
              ))}              
            </div>

            <div className="font-semibold text-black text-sm " >
              <p className="text-sm text-dark-label-2 font-medium mt-3">Input:</p>
              <div className="w-full  cursor-text rounded-lg bg-dark-fill-3 border border-transparent px-3 py-[5px] mt-2">
                {problem.examples[activeTestCase].inputText}
              </div>
              <p className="text-sm text-dark-label-2 font-medium mt-3">Output:</p>
              <div className="w-full cursor-text rounded-lg bg-dark-fill-3 border border-transparent px-3 mb-16 py-[5px] mt-2">
                {problem.examples[activeTestCase].outputText}
              </div>
            </div>
          </div>

         
        </Split>
         }
        <EditorFooter ai={ai} handleAi={handleAi} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};
export default Playgound;
function arrayunion(pid: string | string[] | undefined): any {
  throw new Error("Function not implemented.");
}

