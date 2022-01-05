import React from "react"; 

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
  const totalStyle = {textStyle: "bold"}
  const total = course.parts.reduce((total, { exercises }) => total + exercises, 0)
  return <p style={totalStyle}>Number of exercises {total}</p>
}

const Course = ({ course }) => {

  return (<>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>)
}

export default Course