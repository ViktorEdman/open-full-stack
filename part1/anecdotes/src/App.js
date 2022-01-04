import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Anecdote = ({ anecdote, votes, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{anecdote} </div>
      <div>has {votes} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandomValue = (maxValue) => Math.floor(Math.random() * maxValue)
  const getRandomAnecdote = () => {
    const randomValue = getRandomValue(anecdotes.length)
    setSelected(randomValue)
  }

  const addVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const getHighestNumber = (array) => array.indexOf(Math.max(...array))
  const highestVoteIndex = getHighestNumber(votes)

  return (
    <div>
      <Anecdote title="Anecdote of the day"anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={addVote} text="Vote" />
      <Button handleClick={getRandomAnecdote} text="Next Anecdote" />
      <Anecdote title="Anecdote with the most votes" anecdote={anecdotes[highestVoteIndex]} votes={votes[highestVoteIndex]} />
    </div>
  )
}

export default App