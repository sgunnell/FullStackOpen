import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


const Header = ({course}) => {
  return (
    <h1> {course}</h1>
  )
}

const Part = ({part}) => {
  return(
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </div>
  );
};

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  );
};

const Display = ({ counter }) => {
  return (<div>{counter}</div>)
}

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

function App() {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  //console.log('rendering...', counter)
  const course = {
    name: 'Half Stack application development',
  };

  return (
    <div className="App">
      <Header course={course.name} />

      <Display counter={counter}/>
      <Button 
        onClick={increaseByOne}
        text = 'plus'
      />
      <Button 
        onClick={setToZero}
        text = 'zero'
      />
      <Button
        onClick={decreaseByOne}
        text = 'minus'
      />
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
