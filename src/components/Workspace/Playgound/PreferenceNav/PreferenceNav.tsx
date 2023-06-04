import React, { useEffect, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";
import { ISetting } from "../Playgound";
import SettingsModal from "@/components/Modals/SettingsModal";


type PreferenceNavProps = {
  settings: ISetting;
	setSettings: React.Dispatch<React.SetStateAction<ISetting>>;
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({settings,setSettings}) => {

  const [FullScreen, setFullScreen] = useState(false)
  const handleFullScreen=()=>{
    if(FullScreen){
      document.exitFullscreen();
    }else{
      document.documentElement.requestFullscreen();
    }
    setFullScreen(!FullScreen)
  }

  useEffect(() => {
		function exitHandler(e: any) {
			if (!document.fullscreenElement) {
				setFullScreen(false);
				return;
			}
			setFullScreen(true);
		}

		if (document.addEventListener) {
			document.addEventListener("fullscreenchange", exitHandler);
			document.addEventListener("webkitfullscreenchange", exitHandler);
			document.addEventListener("mozfullscreenchange", exitHandler);
			document.addEventListener("MSFullscreenChange", exitHandler);
		}
	}, [FullScreen]);

  return (
    <div className="bg-dark-layer-2 w-full h-11 flex items-center justify-between">

      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-gray-700 dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

        <div className="flex items-center m-2">
        <button className='preferenceBtn group' onClick={()=>setSettings({...settings,SettingsModalIsOpen:true})}>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>

				<button className='preferenceBtn group' onClick={handleFullScreen}>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
            {!FullScreen? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
						
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
        </div>
        {settings.SettingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />}
    </div>
  );
};
export default PreferenceNav;
