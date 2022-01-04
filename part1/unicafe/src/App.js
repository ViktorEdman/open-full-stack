import React, { useState } from 'react'
import Button from "./components/Button"

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const positivePercentage = `${(good / all) * 100}%`
  if (all === 0) return <p>No feedback given</p>
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {(good - bad) / all}</p>
      <p>Positive: {positivePercentage}</p>
    </>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const reset = () => {
    setBad(0)
    setGood(0)
    setNeutral(0)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Button onClick={reset} text="Reset"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App