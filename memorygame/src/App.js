import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";




function App() {

  const [counter, setCounter] = useState(0)
  const [bestCounter, setBestCounter] = useState(0)
  const [chosenList, setChosenList] = useState([])


  

  useEffect(() => {
    setCounter(chosenList.length)
    
  }, [chosenList])
  


  const modifyList = (id) => {
    
    if (chosenList.includes(id)) {
      alert("you lost")
      setChosenList([])
    }
    else{
      setChosenList(chosenList.concat(id))
      

    }
    
  }

  return (
    <div className="App">
      <Header counter={counter} bestCounter={bestCounter}></Header>
      <Items modifyList={modifyList}></Items>

    </div>
  );
}

export default App;
