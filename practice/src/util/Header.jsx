import {useState, useEffect, useRef} from 'react';
function Header(){
    const [time, setTime] = useState("");
    
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
    

    return(
        <header>
            <ul id='header_left'>
                <li><img src="./public/assets/star.png" alt="" style={{width:"1.5rem", transform: "translatey(2px)",filter: "brightness(0)"}}/></li>
                <button type='button'><li style={{fontWeight : 900}}>Joseph Kim</li></button>
                <button type='button'><li>File</li></button>
                <button type='button'><li>Edit</li></button>
                <button type='button'><li>View</li></button>
                <button type='button'><li>Go</li></button>
                <button type='button'><li>Wallpaper</li></button>
                <button type='button'><li>Help</li></button>
            </ul>

            <ul id='header_right'>
                <li>{time}</li>
            </ul>
        </header>
    )
}

export default Header;