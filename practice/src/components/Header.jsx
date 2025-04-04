import {useState, useEffect, useRef} from 'react';

function Header(props){
    const [time, setTime] = useState("");
    const buttonRef = useRef([]);
    const [active, setActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    //clock 
    useEffect(() => {
        function updateClock() {
            const d = new Date();
            const day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

            //creates 12 hour clock checks if its above 12 for pm and am then modules to return back to 1 or 12 if its 0 oclock
            let hours = d.getHours();
            const y = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            
            setTime(`${day[d.getDay()]}\u00A0 ${hours}:${d.getMinutes().toString().padStart(2, "0")} ${y}`);
        };

        //setInterval constantly updates the clock every 1 second
        updateClock(); 
        const interval = setInterval(updateClock, 1000); 
        return () => clearInterval(interval); 
    },[])

    //handle option bar logic when clicked
    function handleButtonClick(id, location, index){
        setActive(true)
        props.hide(0, true)
        props.grabHeaderId(id , location)
        props.index(index);
    };

    //when hovering over header buttons the option bar moves along with your hover
     function on(id, location, index){
        //if header is clicked then active if not then dont show option box
        if(active){
        props.grabHeaderId(id , location);
        props.hide(0, true);
        props.index(index);
        }

        //this makes sure if you enter into a different button then the current it turns off the previous button
        setActiveIndex(index);
        buttonRef.current[activeIndex].style.backgroundImage = '';
        buttonRef.current[activeIndex].style.color = ''; 
    }

    //handles hover off 
   function off(index){
        buttonRef.current[index].style.backgroundImage = '';
        buttonRef.current[index].style.color = ''; 
    }
    
    //handle click function for hiding option box
    useEffect(() => {
      if(active){
        function handleClick(event) {

            //this grabs header and option box
            const headerLeft = document.querySelector('#header_left');
            const optionBox = document.querySelector('#option_box');
           
            //contain returns a null value and checks if my mouse clicked on something thats not inside the headerLeft or optionbox dom
            if (!headerLeft.contains(event.target) && !optionBox.contains(event.target)) {
                buttonRef.current.forEach(button => {
                    button.style.backgroundImage = '';
                    button.style.color = ''; 
                });
                props.hide(0, false);
                setActive(false);
            }

    }
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            };
        }
    }, [active]);

    return(
        <header>
            <ul id='header_left'>
                <li><img src="./public/assets/star.png" alt="" style={{width:"1.5rem", transform: "translatey(2px)",filter: "brightness(0)"}}/></li>
                <button type='button' id='button0' onMouseEnter={() => on("main" , 2.71, 0)} onMouseLeave={() => off(0)} ref={(e) => buttonRef.current[0] = e} onClick={() => handleButtonClick("main" ,  2.71, 0)}><li style={{fontWeight : 900}}>Joseph Kim</li></button>
                <button type='button' id='button1' onMouseEnter={() => on("file" , 9.59, 1)} onMouseLeave={() => off(1)} ref={(e) => buttonRef.current[1] = e} onClick={() => handleButtonClick("file" , 9.59, 1)}><li>File</li></button>
                <button type='button' id='button2' onMouseEnter={() => on("edit", 12.64, 2)} onMouseLeave={() => off(2)} ref={(e) => buttonRef.current[2] = e} onClick={() => handleButtonClick("edit", 12.64, 2)}><li>Edit</li></button>
                <button type='button' id='button3' onMouseEnter={() => on("project", 15.75, 3)} onMouseLeave={() => off(3)} ref={(e) => buttonRef.current[3] = e} onClick={() => handleButtonClick("project", 15.75, 3)}><li>Project</li></button>
                <button type='button' id='button4' onMouseEnter={() => on("about", 20.45, 4)} onMouseLeave={() => off(4)} ref={(e) => buttonRef.current[4] = e} onClick={() => handleButtonClick("about",   20.45, 4)}><li>About</li></button>
                <button type='button' id='button5' onMouseEnter={() => on("wallpaper", 24.64, 5)} onMouseLeave={() => off(5)} ref={(e) => buttonRef.current[5] = e} onClick={() => handleButtonClick("wallpaper",   24.64, 5)}><li>Wallpaper</li></button>
                <button type='button' id='button6' onMouseEnter={() => on("help", 30.7, 6)} onMouseLeave={() => off(6)} ref={(e) => buttonRef.current[6] = e} onClick={() => handleButtonClick("help", 30.7, 6)}><li>Help</li></button>
            </ul>
     
            <ul id='header_right'>
                <li>{time}</li>
            </ul>
        </header>
    )
}

export default Header;