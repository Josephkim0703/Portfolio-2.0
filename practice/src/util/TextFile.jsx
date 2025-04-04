import {useState, useEffect, useRef} from 'react';
function TextFile(props){

    const noteRef = useRef(null);
    const [drag, setDrag] = useState(false);
    const [cursor, setCursor] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    //handles when i click down on the header of the textfile
    const mouseDown = (e) => {
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
    const mouseUp = () => {
        setDrag(false);
        setCursor("");
      };
  
    //handles mouse move
    const mouseMove = (e) => {
        if (!drag) return;
      
        const X = e.clientX - position.x;
        const Y = e.clientY - position.y;
      
        const limitY = Math.max(Y, 29);
      
        noteRef.current.style.left = `${X}px`;
        noteRef.current.style.top = `${limitY}px`;
      };

    return(
        <>
            <div id='notepad' ref={noteRef} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp}>
                <div id='notepad_header' onMouseDown={mouseDown} style={{cursor: cursor}}>
                    <div>
                    <button type='button' id='button_x'></button>
                    <button type='button' id='button_min'></button>
                    <button type='button' id='button_max'></button>
                    </div>
                    <h1>{props.tabName}</h1>
                </div>
                <div>

                </div>
            </div>
        </>
    )


}

export default TextFile