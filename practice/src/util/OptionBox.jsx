import {useState, useEffect, useRef} from 'react';
import { wallpaper, help, about, project, edit, file, main } from './data.js';

function OptionBox(props){
    
    const [currentArr, setCurrentArr] = useState(main);
    const boxRef = useRef(null);
    const [opacity, setOpacity] = useState(Array(10).fill(0));
    const [active, setActive] = useState(Array(6).fill(null))

    //function for changing the opacity for active buttons
    function updateOpacity(index) {
        setOpacity((prevOpacity) => {
          const newArr = Array(prevOpacity.length).fill(0); 
          if (index !== null) newArr[index] = 1; 
          return newArr;
        });
      }

    //switch statement to change option box buttons
    //the active[0] finds what the saved button presses were so when you go to the next box and come back your options are saved
    useEffect(() => {
        let i;
        switch (props.header) {
          case "main":
            setCurrentArr(main);
            i = active[0];
            break;
          case "file":
            setCurrentArr(file);
            i = active[1];
            break;
          case "edit":
            setCurrentArr(edit);
            i = active[2];
            break;
          case "project":
            setCurrentArr(project);
            i = active[3];
            break;
          case "about":
            setCurrentArr(about);
            i = active[4];
            break;
          case "wallpaper":
            setCurrentArr(wallpaper);
            i = active[5];
            break;
          case "help":
            setCurrentArr(help);
            i = active[6];
            break;
          default:
        }
        updateOpacity(i);
      
      }, [props.header]);


    //handles button colors if i hover over the corresponding option box
    function on() {
        const buttons = document.querySelectorAll('#header_left button');
    
        if (buttons[props.index]) {
            buttons[props.index].style.backgroundImage = 'linear-gradient(rgb(133, 196, 248), rgb(56, 133, 235), rgb(5, 53, 155))';
            buttons[props.index].style.color = 'white';
        }
    }

    //handles option box list functions
    function handleClick(index) {
      
        let i;
        let x;
        console.log(index, props.header)
        switch(props.header){
            case "main":
                i = index;
                x = 0;
                break;
            case "file":
                i = index;
                x = 1;
                break;
            case "edit":
                i = index;
                x = 2;
                break;
            case "project":
                i = index;
                x = 3;
                break;
            case "about":
                i = index;
                x = 4;
                break;
            case "wallpaper":
                i = index;
                x = 5;
                    props.wallpaper(wallpaper[index].img); 
                break;
            case "help":
                i = index;
                x = 6;
                break;
            default: 
                i = index;
        }
        //this stores what index and buttonw as pressed
        setActive((prev) =>{
            const newArr = [...prev];
            newArr[x] = i;
            return newArr;
        }) 
        updateOpacity(i);
    }


return(
    <>
    <div id="option_box" style={{left: `${props.location}rem` }} onMouseEnter={on} ref={boxRef}>
        <ul>
       {currentArr.map((element, i) => (
                <button key={i} onClick={() => handleClick(i)}>
                    <p style={{opacity : opacity[i]}}><i class="fa-solid fa-check"></i></p>
                    <h1>{element.name}</h1>
                </button>      
       ))}
       </ul>
    </div>
    </>
)
};

export default OptionBox