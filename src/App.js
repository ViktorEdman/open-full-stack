import './App.css';
import { useState } from "react"
import Button from "./components/Button"

const History = ({allClicks}) => allClicks.length === 0 
?  <div>The app is used by pressing the left and right buttons</div> 
: <div>{allClicks.join(" ")}</div>


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <>
      Left: {left}
      <Button 
      onClick={handleLeftClick}
      text="Left"/>

      <Button
      onClick={handleRightClick}
      text="Right"/>
      Right: {right}
      <History allClicks={allClicks}/>
    </>
  );

}

export default App;
