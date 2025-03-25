import {useState, useEffect, useRef} from 'react';
import Taskbar from './Taskbar.jsx'
import Header from './Header.jsx'
import Option_box from './OptionBox.jsx'
import '../css/Util.css';
function StartPage(){

 const [wallpaper, setWallpaper] = useState("./public/assets/head.jpg");

    return(
    <>
    <div id='screen_Border'>
        <Header/>
        <Option_box/>
        <Taskbar/>  
        <img src={wallpaper} alt="" id='wallpaper'/>          
    </div>
    </>
    );
};

export default StartPage;