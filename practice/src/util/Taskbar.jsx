import {useState, useEffect, useRef} from 'react';
import { TaskBarApps } from './data.js';

function Taskbar(){

    const [opacity, setOpacity] = useState(Array(10).fill(0));
    const [hide, setHide] = useState(Array(10).fill(false));
    const [app, setApp] = useState(TaskBarApps);
    const imgRef = useRef([]);
   

    function updateOpacity(index, value) {
        setOpacity((prevOp) => {
            const newArr = [...prevOp];
            newArr[index] = value;
            return newArr;
        });
    }

    function updateHide(index, value) {
        setHide((prevHide) => {
            const newArr = [...prevHide];
            newArr[index] = value;
            return newArr;
        });
    }
 
    async function handleClick(i) { 
            app[i].active = "yes";
            console.log(imgRef.current[i])

            if (imgRef.current[i]) {
                imgRef.current[i].classList.add('active');
                setTimeout(() => { 
                    imgRef.current[i]?.classList.remove('active'); 
                }, 1000);
            }
            
            await delay(500);
           
            updateOpacity(i, 1)
            updateHide(i, false)       
    };

    function delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function hoverOn(i){
        updateHide( i,true)
    }

    function hoverOff(i){
        updateHide(i, false)
    }

    return(
        <footer>
            <div id="taskbar">
                <ul style={{borderRight: "none", borderRadius: "5px 0px 0px 0px"}}>
                    {app.filter(app => app.position === "left").map((app, i) => (
                        <li key={i}>  
                            {hide[i] && <div id='icon_name'><p>{app.name}</p></div>}
                            <button type='button' id={i} onClick={() => handleClick(i)} onMouseEnter={() => hoverOn(i)} onMouseLeave={ () =>hoverOff(i)}>
                                <img src={app.logo} alt={app.name} ref={(e) => imgRef.current[i] = e}/>
                                <div id={"active_button" + i} className='active_button' style={{opacity : opacity[i]}}></div>
                            </button>
                        </li>
                    ))}
                </ul>
                <ul style={{ borderRadius: "0px 5px 0px 0px"}}>
                    {app.filter(app => app.position === "right").map((app, i ) => (
                        <li key={i}>
                            {hide[(i + TaskBarApps.length -1)] && <div id='icon_name'><p>{app.name}</p></div>}
                            <button type='button' id={(i + TaskBarApps.length -1)} onClick={() => handleClick(i + TaskBarApps.length -1)} onMouseEnter={ () =>hoverOn(i + TaskBarApps.length -1)} onMouseLeave={ () =>hoverOff(i + TaskBarApps.length -1)}>
                                <img src={app.logo} alt={app.name}  ref={(e) => imgRef.current[i + TaskBarApps.length -1] = e}/>
                                <div id={"active_button" +(i + TaskBarApps.length -1)} className='active_button' style={{opacity : opacity[ (i + TaskBarApps.length - 1)]}}></div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Taskbar;