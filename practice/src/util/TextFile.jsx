import {useState, useEffect, useRef} from 'react';
function TextFile(props){

    const noteRef = useRef(null);
    const [drag, setDrag] = useState(false);
    const [cursor, setCursor] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [active, setActive] = useState(false);
    const [prevLeft, setPrevLeft] = useState(0);
    const [prevTop, setPrevTop] = useState(0);
    const [prevWidth, setPrevWidth] = useState("40rem");
    const [prevHeight, setPrevHeight] = useState("40rem");

    //handles when i click down on the header of the textfile
    function mouseDown(e) {
        //grabs position of what you click and returns an object
      const rect = noteRef.current.getBoundingClientRect();
      setPosition({
        //calculating how far the mouse is from the left edge of the notepad. Same for top.
        //minus where i click to the current position of the box
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setDrag(true);
      setCursor("grabbing");
    };

    //handles mouse up
    function mouseUp() {
        setDrag(false);
        setCursor("");
      };
  
    //handles mouse move
    function mouseMove(e) {
        if (!drag) return;
      
        const X = e.clientX - position.x;
        const Y = e.clientY - position.y;
      
        const limitY = Math.max(Y, 29);
      
        noteRef.current.style.left = `${X}px`;
        noteRef.current.style.top = `${limitY}px`;
        setPrevLeft(`${X}px`);
        setPrevTop(`${limitY}px`);
      };

    function closeButton(){
      //it filters and creates a new array for each i that doesnt equal the index closed button we clicked
     props.setTab((prev) => {
        return prev.map((element, i) => i == props.index? null : element)
     })
     props.main.current.style.zIndex = 1;
    }

    function minimize(e){
      
    }

    function maximize(){
      if(!active){
      noteRef.current.style.width = "100vw";
      noteRef.current.style.height = "100vh";
      noteRef.current.style.left = 0;
      noteRef.current.style.top = 0;
      noteRef.current.style.borderRadius = 0;
      props.main.current.style.zIndex = 5;
      setActive(true);
      }else{
        props.main.current.style.zIndex = 1;
        noteRef.current.style.left = prevLeft;
        noteRef.current.style.top = prevTop;
        switch(props.tabName){
          case 'How to Navigate':
            noteRef.current.style.width = "40rem";
            noteRef.current.style.height = "30rem";
            break;
          case 'About Me':
            noteRef.current.style.width = "40rem";
            noteRef.current.style.height = "35rem";
            break;
          case 'Resume':
            break;
          case 'Contact':
              break;
          default:
        }
    
        
            
        setActive(false);
    }
    }


    useEffect(() => {
      switch(props.tabName){
        case 'How to Navigate':
          noteRef.current.style.width = "40rem";
          noteRef.current.style.height = "30rem";
          break;
        case 'About Me':
          noteRef.current.style.width = "40rem";
          noteRef.current.style.height = "35rem";
          break;
        case 'Resume':
          break;
        case 'Contact':
            break;
        default:
      }
    },[])



    return(
        <>
            <div id='tab' ref={noteRef} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp}>
                <div id='tab_header' onMouseDown={mouseDown} style={{cursor: cursor}}>
                    <div>
                    <button type='button' id='button_x' onClick={closeButton}></button>
                    <button type='button' id='button_min' onClick={minimize}></button>
                    <button type='button' id='button_max' onClick={maximize}></button>
                    </div>
                    <h1>{props.tabName}</h1>
                </div>
                <div id='tab_data'>
                      <div dangerouslySetInnerHTML={{__html : props.info}}></div>
                </div>
            </div>
        </>
    )


}

export default TextFile