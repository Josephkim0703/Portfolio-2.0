import {useState, useEffect, useRef} from 'react';
import { wallpaper, help, about, view, edit, file, main } from './data.js';

function OptionBox(props){

    const [currentArr, setCurrentArr] = useState(main);
    const boxRef = useRef(null);

    //switch statement to change option box buttons
    useEffect(() => {
        switch(props.header){
            case "main":
                setCurrentArr(main);
                break;
            case "file":
                setCurrentArr(file);
                break;
            case "edit":
                setCurrentArr(edit);
                break;
            case "view":
                setCurrentArr(view);
                break;
            case "about":
                setCurrentArr(about);
                break;
            case "wallpaper":
                setCurrentArr(wallpaper);
                break;
            case "help":
                setCurrentArr(help);
                break;
            default: 
        }
    },[props.header])

    //handles button colors if i hover over the corresponding option box
    function on() {
        const buttons = document.querySelectorAll('#header_left button');
    
        if (buttons[props.index]) {
            buttons[props.index].style.backgroundImage = 'linear-gradient(rgb(133, 196, 248), rgb(56, 133, 235), rgb(5, 53, 155))';
            buttons[props.index].style.color = 'white';
        }
    }



return(
    <>
    <div id="option_box" style={{left: `${props.location}rem` }} onMouseEnter={on} ref={boxRef}>
        <ul  >
       {currentArr.map((element, i) => (
                <button key={i} >
                    <h1>{element.name}</h1>
                </button>      
       ))}
       </ul>
    </div>
    </>
)
};

export default OptionBox