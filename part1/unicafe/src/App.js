import React, { useState } from 'react'

const StatisticLine = ({statistic, text}) => {
  return (<tr>
              <td>{text}</td>
              <td>{statistic}</td>
          </tr>)
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const positivePercentage = `${(good / total) * 100}%`
  const average = (good - bad) / total
  if (total === 0) return <p>No feedback given</p>
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine statistic={good} text="Good"/>
          <StatisticLine statistic={neutral} text="Neutral"/>
          <StatisticLine statistic={bad} text="Bad"/>
          <StatisticLine statistic={total} text="Total"/>
          <StatisticLine statistic={average} text="Average"/>
          <StatisticLine statistic={positivePercentage} text="Positive"/>
        </tbody>
      </table>
    </>)
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

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