import {useState, useEffect, useRef} from 'react';
import { TaskBarApps } from '../util/data.js';

function Taskbar(props){

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
 
    //handle taskbar ui and function and animation
    async function handleClick(i) { 
            handleApp(i)
            app[i].active = "yes";
            if (imgRef.current[i]) {
                imgRef.current[i].classList.add('active');
                setTimeout(() => { 
                    imgRef.current[i].classList.remove('active'); 
                }, 1000);
            }
           

            await delay(500);
           
            updateOpacity(i, 1)
            updateHide(i, false)  
            
         if(app[i].position == "right"){
                props.setTab((prev) => {
        return prev.map((element, i) => i == props.index? element : null)
     })
         }
            
    };

    //delay for animation opacity
    function delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function hoverOn(i){
        updateHide( i,true)
    }

    function hoverOff(i){
        updateHide(i, false)
    }

    //switch statement to track which app on taskbar was clicked and functionality
    function handleApp(index){
             let i, id, x;
        switch(index){
            case 0:
                i = index;
                id = "finder";
                x = 0;
                props.setPopup("file")
                    props.setTab((prev) => [
                      ...prev,
                      {
                          name: app[index].name,
                          index: app[index].index
                      } 
              ]);
                break;
            case 1:
                i = index;
                id = "dashboard";
                x = 1;
                break;
            case 2:
                i = index;
                id = "photo";
                x = 2;
                break;
            case 3:
                i = index;
                id = "contact";
                x = 3;
                break;
            case 4:
                i = index;
                id = "photobooth";
                x = 4;
                break;
            case 5:
                i = index;
                id = "itunes";
                x = 5;
                break;
            case 6:
                i = index;
                id = "calendar";
                x = 6;
                break;
            case 7:
                i = index;
                id = "quicktime";
                x = 7;
                break;
            case 8:
                i = index;
                id = "settings";
                x = 8;
                break;
            default: 
                i = index;
        }
        
         props.setActive((prev) =>{
            const newArr = [...prev];
            newArr[x] = i;
            return newArr;
         }) 
    }


    //function to handle minimize function grabs index of left taskbar and opens the corresponding txtfile


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