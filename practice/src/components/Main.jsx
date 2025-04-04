import { useState, useEffect } from 'react'
import StartPage from './StartPage.jsx';

function Main(props) {

    const [hide, setHide] = useState([true, true]);
  
  function updateHide(index, value){
    setHide((prevHide) => {
      const newArr = [...prevHide];
      newArr[index] = value;
      return newArr;
    });
  }

    return (
      <>
             {hide[0] && <StartPage/>}
      </>
    )
  }
  export default Main;