import {useState, useEffect, useRef} from 'react';
import Taskbar from './Taskbar.jsx'
import Header from './Header.jsx'
import Option_box from './OptionBox.jsx'
import '../css/Util.css';
function StartPage(){

 const [wallpaper, setWallpaper] = useState("./public/assets/wallpaper/skull.jpg");
 const [headerId, setHeaderId] = useState("");
 const [location, setLocation] = useState(0);
 const [index, setIndex] = useState(0);
 const [hide, setHide] = useState(Array(2).fill(false));
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

 function updateHide(index, value){
   setHide((prevHide) => {
     const newArr = [...prevHide];
     newArr[index] = value;
     return newArr;
   });
 }

 function handleGrabHeaderId(id , location){
    setHeaderId(id);
    setLocation(location);
 }

    return(
    <>
    <div id='screen_Border'>
        <Header grabHeaderId={handleGrabHeaderId} hide={updateHide} index={setIndex}/>
        {hide[0] && <Option_box header={headerId} location={location} 
                                index={index} wallpaper={setWallpaper}
                                active={active} setActive={setActive}
                                opacity={opacity} updateOpacity={updateOpacity}/>}
        <Taskbar/>  
            <img src={wallpaper} alt="" id='wallpaper'/>          
    </div>
    </>
    );
};

export default StartPage;