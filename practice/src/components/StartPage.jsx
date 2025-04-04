import {useState, useEffect, useRef} from 'react';
import Taskbar from './Taskbar.jsx'
import Header from './Header.jsx'
import Option_box from '../util/OptionBox.jsx'
import TextFile from '../util/TextFile.jsx'
import '../css/Util.css';
function StartPage(){

 const [wallpaper, setWallpaper] = useState("./public/assets/wallpaper/default.png");
 const [headerId, setHeaderId] = useState("");
 const [location, setLocation] = useState(0);
 const [index, setIndex] = useState(0);

 const [hide, setHide] = useState(Array(10).fill(false));
 const [opacity, setOpacity] = useState(Array(10).fill(0));
 const [active, setActive] = useState(Array(6).fill(null))
 const [tab, setTab] = useState([]);

 //function for changing the opacity for active buttons
 function updateOpacity(index) {
     setOpacity((prevOpacity) => {
       const newArr = Array(prevOpacity.length).fill(0); 
       if (index !== null) newArr[index] = 1; 
       return newArr;
     });
   }

  //handles hide function 
 function updateHide(index, value){
   setHide((prevHide) => {
     const newArr = [...prevHide];
     newArr[index] = value;
     return newArr;
   });
 }

 //grabs all data needed when header is clicked for option box
 function handleGrabHeaderId(id , location){
    setHeaderId(id);
    setLocation(location);
 }

 //saves previous wallpaper even when you exit out to new tab or link
 useEffect(() =>{
  const session = localStorage.getItem("wallpaper")
  if(session){
    setWallpaper(session);
  }
},[])
    return(
    <>
    <div id='screen_Border'>
        <Header grabHeaderId={handleGrabHeaderId} hide={updateHide} index={setIndex}/>
        {hide[0] && <Option_box header={headerId} location={location} 
                                index={index} wallpaper={setWallpaper}
                                active={active} setActive={setActive}
                                opacity={opacity} updateOpacity={updateOpacity}
                                setHide={updateHide} setTab={setTab}/>}

        <main>
          {tab.map((t, i) => (
          t !== null ? <TextFile key={i} tabName={t.name} setTab={setTab} index={i}/> : null 
          ))}
        </main>
        <Taskbar/>  
            <img src={wallpaper} alt="" id='wallpaper'/>          
    </div>
    </>
    );
};

export default StartPage;


//List of things i need to do 
//fix tab where the current one i click the z index pushes forward and send everything back
//tab buttons need functionaily
//tabs need unique data