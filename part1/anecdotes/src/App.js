import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Anecdote = ({ anecdote, votes }) => 
  <div>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>

const MostVoted = ({ points }) => {
  const mostVoted = points.indexOf(Math.max(...points))

  // Checks if sum of points = 0 to know if there is any votes at all
  if(points.reduce((partialSum, a) => partialSum + a, 0) === 0)
    return(
      <div>
        <p>No votes yet</p>
      </div>
    )
  else
    return(
      <Anecdote anecdote={anecdotes[mostVoted]} votes={points[mostVoted]} />
    )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(6).fill(0))
  
  const nextAnecdote = () => {
    const getNumber = Math.floor(Math.random()*anecdotes.length)

    // if else statement to prevent repeated anecdotes
    if (getNumber === selected)
      nextAnecdote()
    else
      setSelected(getNumber)
  }
  
  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints([...copy])
  }
  
  return (
    <>
      <div>
        <Header text='Anecdote of the day' />
        <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
        <Button onClick={vote} text='vote' />
        <Button onClick={nextAnecdote} text='next anecdote' />
      </div>
      <div>
        <Header text='Anecdote with most votes' />
        <MostVoted points={points} />
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

export default App
