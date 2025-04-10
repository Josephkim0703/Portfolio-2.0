import {useState, useEffect, useRef} from 'react';
import { wallpaper, help, about, project, edit, file, main } from './data.js';

function OptionBox(props){
    
    const [currentArr, setCurrentArr] = useState(main);
    const boxRef = useRef(null);
    const [link, setLink] = useState(null);

    //switch statement to change option box buttons
    //the active[0] finds what the saved button presses were so when you go to the next box and come back your options are saved
    useEffect(() => {
        let i;
        switch (props.header) {
          case "main":
            setCurrentArr(main);
            i = props.active[0];
            break;
          case "file":
            setCurrentArr(file);
            i = props.active[1];
            break;
          case "edit":
            setCurrentArr(edit);
            i = props.active[2];
            break;
          case "project":
            setCurrentArr(project);
            i = props.active[3];
            break;
          case "about":
            setCurrentArr(about);
            i = props.active[4];
            break;
          case "wallpaper":
            setCurrentArr(wallpaper);
            i = props.active[5];
            break;
          case "help":
            setCurrentArr(help);
            i = props.active[6];
            break;
          default:
        }
        props.updateOpacity(i);
      
      }, [props.header]);

    //handles option box list functions
    function handleClick(index) {
        let i, x;
        setLink(null)
        switch(props.header){
            case "main":
                i = null;
                x = 0;
                setLink(main[index].link)
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
                i = null;
                x = 3;
                setLink(project[index].link)
                break;
            case "about":
                i = index;
                x = 4;
                  props.setTab((prev) => [
                    ...prev,
                    {name: about[index].name,
                     info: about[index].info,
                     index: about[index].index
                    } 
                ]);
                break;
            case "wallpaper":
                i = index;
                x = 5;
                    props.wallpaper(wallpaper[index].img); 
                    localStorage.setItem("wallpaper", wallpaper[index].img);
                break;
            case "help":
                i = index;
                x = 6;
                break;
            default: 
                i = index;
        }
        //this stores what index and buttonw as pressed
        props.setActive((prev) =>{
            const newArr = [...prev];
            newArr[x] = i;
            return newArr;
        }) 
        props.updateOpacity(i);
    }

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
        <ul>
       {currentArr.map((element, i) => (
               <a href={link} key={i} ><button key={i} onClick={() => handleClick(i)} >
                   
                    <p style={{opacity : props.opacity[i]}}><i className="fa-solid fa-check"></i></p>
                    <h1>{element.name}</h1>
                </button></a>     
       ))}
       </ul>
    </div>
    </>
)
};

export default OptionBox