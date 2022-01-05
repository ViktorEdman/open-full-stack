import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>
const Part = ({part, excercises}) => <p>{part} {excercises}</p>
const Content = (props) => {
  return (
  <>
    <Part part={props.part1} excercises={props.exercises1}/>
    <Part part={props.part2} excercises={props.exercises2}/>
    <Part part={props.part3} excercises={props.exercises3}/>
  </>)
}
const Total = ({ total }) => <p>Number of exercises {total}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App