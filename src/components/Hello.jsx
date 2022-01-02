import React from 'react'

const Hello = ({name, age}) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow-age
    }

    return (
      <>
        <p>
          Hello {name}, you are {age} years old. You were probably born {bornYear()}
        </p>
      </>
    )
  }

export default Hello
