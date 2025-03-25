import {useState, useEffect, useRef} from 'react';
import Taskbar from './Taskbar.jsx'
import Header from './Header.jsx'
import '../css/Util.css';
function StartPage(){

 const [wallpaper, setWallpaper] = useState("./public/assets/head.jpg");

    return(
    <>
    <div id='screen_Border'>
        <Header/>
            <img src={wallpaper} alt="" />
        <Taskbar/>            
    </div>
    </>
    );
};

export default StartPage;