import { useState, useEffect } from 'react'

import Main from './util/Main.jsx';
import './css/App.css'
function App() {

const [hide, setHide] = useState([true, true]);

  function updateHide(index, value) {
  setHide((prevHide) => {
    const newArr = [...prevHide];
    newArr[index] = value;
    return newArr;
  });
}





  
  return (
    <>
    <Main/>
    </>
  )

}
export default App;

