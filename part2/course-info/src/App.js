import React from 'react'

const Header = ({ course }) => <h1>{course.name}</h1>
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </>)
}
const Total = ({ course }) => {
  console.log(course.parts.exercises)
  const total = course.parts.reduce((total, { exercises }) => total + exercises, 0)
  return <p>Number of exercises {total}</p>
}

const Course = ({ course }) => {

  return (<>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>)
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App