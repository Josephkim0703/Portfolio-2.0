import { useState, useEffect, useRef } from "react";
import { TaskBarApps } from "./data.js";
function Popup(props) {
  const noteRef = useRef([]);
  const [drag, setDrag] = useState(false);
  const [cursor, setCursor] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hide, setHide] = useState(Array(10).fill(false));
  const [radius, setRadius] = useState(null);

  const [active, setActive] = useState(false);
  const [prevLeft, setPrevLeft] = useState(null);
  const [prevTop, setPrevTop] = useState(null);
  //handles when i click down on the header of the textfile
  function mouseDown(e) {
    //grabs position of what you click and returns an object
    const rect = noteRef.current[props.index].getBoundingClientRect();
    setPosition({
      //calculating how far the mouse is from the left edge of the notepad. Same for top.
      //minus where i click to the current position of the box
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDrag(true);
    setCursor("grabbing");
  }

  //handles mouse up
  function mouseUp() {
    setDrag(false);
    setCursor("");
  }

  //handles mouse move
  function mouseMove(e) {
    if (!drag) return;

    const X = e.clientX - position.x;
    const Y = e.clientY - position.y;

    const limitY = Math.max(Y, 29);

    noteRef.current[props.index].style.left = `${X}px`;
    noteRef.current[props.index].style.top = `${limitY}px`;
    setPrevLeft(`${X}px`);
    setPrevTop(`${limitY}px`);
  }

  //handles close button on tab when clicked closes tab and makes sure only the current tab is closed
  function closeButton() {
    //it filters and creates a new array for each i that doesnt equal the index closed button we clicked
    props.setTab((prev) => {
      return prev.map((element, i) => (i == props.index ? null : element));
    });
    props.main.current.style.zIndex = 1;
  }

  //handles function call to minimize tab and place in taskbar
  function minimize() {
    props.setTab((prev) => {
      return prev.map((element, i) => (i == props.index ? null : element));
    });
    TaskBarApps.splice(TaskBarApps.length - 1, 0, {
      name: props.tabName,
      logo: "./public/assets/icons/txt.png",
      link: "",
      active: "on",
      position: "right",
    });
    props.main.current.style.zIndex = 1;

    //BUG when i minimize i can open another one of the same txt file and duplicates so i gotta clean duplicates
  }

  //handles maximize button when clicked increases or decreases size of notepad
  function maximize() {
    const note = noteRef.current[props.index];
    note.classList.toggle("tab-maximized");
   
    if (!active) {
      note.style.width = "100vw";
      note.style.height = "100vh";
      note.style.left = 0;
      note.style.top = 0;
      note.style.borderRadius = 0;
      props.main.current.style.zIndex = 5;
      setActive(true);
    } else {
      props.main.current.style.zIndex = 1;
      note.style.left = prevLeft;
      note.style.top = prevTop;
      if(props.popupSetting == "textfile") note.style.borderRadius = "10px 10px 0px 0px";
      else note.style.borderRadius = "10px";  
      note.style.width = props.width;
      note.style.height = props.height;
   
      setActive(false);
    }
  }

  //sets size of tab depending on what was clicked
  useEffect(() => {
    const note = noteRef.current[props.index];
    if (!note.style.width) note.style.width = props.width;
    if (!note.style.height) note.style.height = props.height;

  }, []);

  function handleCurrentTab() {
    props.handleTabClick(props.index);
  }

  function updateHide(index, value) {
    setHide((prevHide) => {
      const newArr = [...prevHide];
      newArr[index] = value;
      return newArr;
    });
  }

  //handles ui change for popup setting
  useEffect(() => {
    if (props.popupSetting == "file") {
      updateHide(1, true);
      updateHide(0, false);
      setRadius("10px");
    } else if (props.popupSetting == "textfile") {
      updateHide(0, true);
      updateHide(1, false);
      setRadius("");
    }
  }, [props.popupSetting]);

  return (
    <>
      <div
        id="tab"
        ref={(e) => (noteRef.current[props.index] = e)}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
        onMouseDown={handleCurrentTab}
        style={{
          zIndex: props.activeTabIndex === props.index ? 2 : 1,
          borderRadius: radius,
        }}
      >
        {hide[0] && (
          <>
            <div
              id="tab_textfile"
              onMouseDown={mouseDown}
              style={{ cursor: cursor }}
            >
              <div>
                <button
                  type="button"
                  id="button_x"
                  onClick={closeButton}
                ></button>
                <button
                  type="button"
                  id="button_min"
                  onClick={minimize}
                ></button>
                <button
                  type="button"
                  id="button_max"
                  onClick={maximize}
                ></button>
              </div>
              <h1>{props.tabName}</h1>
            </div>

            <div id="tab_data">
              <div dangerouslySetInnerHTML={{ __html: props.info }}></div>
            </div>
          </>
        )}

        {hide[1] && (
          <>
            <div
              id="tab_file"
              onMouseDown={mouseDown}
              style={{ cursor: cursor }}
            >
              <div id="tab_fileHeader">
                <div>
                  <button type="button" id="button_x" onClick={closeButton}></button>
                  <button type="button" id="button_min" onClick={minimize}></button>
                  <button type="button" id="button_max" onClick={maximize}></button>
                </div>
                <h1>{props.tabName}</h1>
              </div>
              <div id="tab_nav">
                <div>
                  <button type="button">&#10148;</button>
                  <button type="button">&#10148;</button>
                </div>

                <div>
                  <button type="button"><i class="fa-solid fa-bars"></i></button>
                  <button type="button"><i class="fa-solid fa-bars"></i></button>
                  <button type="button"><i class="fa-solid fa-bars"></i></button>
                </div>

                <div>
                  <button type="button"><i class="fa-solid fa-gear"></i></button>
                </div>
                <input type="text" placeholder="" />
              </div>
              <div id="tab_main">
                <div id="tab_left">
                  <button type="button"><img src="../public/assets/icons/network.png" alt="" />Network</button>
                  <button type="button"><img src="../public/assets/icons/hardrive.webp" alt="" />Joseph HD</button>
                  <button type="button"><img src="../public/assets/icons/hardrive.webp" alt="" />Secret HD</button>
                  <hr />
                  <button type="button"><img src="../public/assets/icons/desktop.png" alt="" />Desktop</button>
                  <button type="button"><img src="../public/assets/icons/house.png" alt="" />Wiki</button>
                  <button type="button"><img src="../public/assets/icons/app.png" alt="" />Applications</button>
                  <button type="button"><img src="../public/assets/icons/doc.png" alt="" />Documents</button>
                  <button type="button"><img src="../public/assets/icons/movie.png" alt="" />Movies</button>
                  <button type="button"><img src="../public/assets/icons/musicNote.png" alt="" />Music</button>
                  <button type="button"><img src="../public/assets/icons/picture.png" alt="" />Pictures</button>
                </div>
                <div id="tab_right"></div>
              </div>
              <p></p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Popup;

//maximize dynamic code
//find images
//minimize function to work when reopening tab
// applikcation on desktop
//other apps to work
//make finders work properly
