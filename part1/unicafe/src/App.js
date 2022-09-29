import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ clickHandler, text }) =>
  <button onClick={clickHandler}>
    {text}
  </button>

const StatsLine = ({ text, value }) => 
  <tr><td>{text} {value}</td></tr>

const Stats = (props) => {
  if (props.all === 0) {
    return (
      <div>
          No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatsLine text='good' value={props.good} />
          <StatsLine text='neutral' value={props.neutral} />
          <StatsLine text='bad' value={props.bad} />
          <StatsLine text='all' value={props.all} />
          <StatsLine text='average' value={props.average}/>
          <StatsLine text='positive' value={props.percentage + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const percentage = (good / all) * 100 

  return (
    <>
      <Header text='give feedback' />
      <Button clickHandler={handleGood} text='good' />
      <Button clickHandler={handleNeutral} text='neutral' />
      <Button clickHandler={handleBad} text='bad' />
      <Header text='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} all={all} average={average} percentage={percentage} />
    </>
  )
}
 
export default App;
