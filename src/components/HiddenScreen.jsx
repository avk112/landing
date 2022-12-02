import React, {useEffect} from 'react';
import cancel from "../image/cancel.png";
import {useState} from "react";

const HiddenScreen = ({justify, insertBlock, switcher}) => {

    const [hiddenScreen, setHiddenScreen] = useState(true);
    const [rootClasses, setRootClasses] = useState(["universal-hidden-screen"]);

    const switchHiddenScreen = (e,open=true)=> {
        setHiddenScreen(prev=>!prev);
        setRootClasses(prev=> {
            return open ? [...prev, "active-screen"] : ["universal-hidden-screen"];
        });
    };

useEffect(()=>{
    switcher && switchHiddenScreen();
}, [switcher])

    return (
        <div className={rootClasses.join(' ')}
             style={{display: hiddenScreen ? "none" : "flex", justifyContent: justify}}
        >
            <div className="universal-hidden-screen__background"
                 onClick={(e)=>switchHiddenScreen(e,false)}
            >
                <img  className="universal-hidden-screen__cancel" src={cancel}/>
            </div>
            {insertBlock}
        </div>
    );
};

export default HiddenScreen;