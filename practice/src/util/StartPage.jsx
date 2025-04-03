import {useState, useEffect, useRef} from 'react';
import Taskbar from './Taskbar.jsx'
import Header from './Header.jsx'
import Option_box from './OptionBox.jsx'
import '../css/Util.css';
function StartPage(){

 const [wallpaper, setWallpaper] = useState("./public/assets/skull.jpg");
 const [headerId, setHeaderId] = useState("");
 const [location, setLocation] = useState(0);
 const [index, setIndex] = useState(0);
 const [hide, setHide] = useState(Array(2).fill(false));

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
        {hide[0] && <Option_box header={headerId} location={location} index={index}/>}
        <Taskbar/>  
            <img src={wallpaper} alt="" id='wallpaper'/>          
    </div>
    </>
    );
};

export default StartPage;