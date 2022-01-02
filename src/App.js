import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const resetCounter = () => setCounter(0)



  return (
    <>
      <Display counter={counter}/>

      <Button
      onClick={increaseByOne}
      text="Plus"/>

      <Button
      onClick={resetCounter}
      text="Zero"/>
    </>
  );

}

export default App;
