import React from "react"

const Content = () => {
  const handleNameChange = () => {
    const names = ["John", "Paul", "George"]
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }
  return (
    <main>
      <p>Hello, my name is {handleNameChange()}!</p>
    </main>
  )
}

export default Content
