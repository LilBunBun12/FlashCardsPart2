import './App.css';
import {useState, useEffect} from 'react';
import items from "./data.json";
import Card from './components/Card';
import Data from './components/Data'

const App = () => {

  const [index,setIndex] = useState(0);
  const [show,setShow] = useState(0);
  const [lock,setLock] = useState(true);
  const [streak,setStreak] = useState(0);
  const [longestStreak,setLongestStreak] = useState(0);
  const structuredDataOriginal = items.map(item => new Data(item.Question, item.Answer));
  const [structuredData,setsStructuredData] = useState(structuredDataOriginal);

  // console.log(structuredData[index]);

  const Prev = () =>{
    setIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : structuredData.length - 1));
    setShow(0);
    setLock(true);
  }

  const Next = () => {
    setIndex(prevIndex => (prevIndex < structuredData.length - 1 ? prevIndex + 1 : 0)); 
    setShow(0);
    setLock(true);
  };

  const ToggleCard = () =>{
    console.log(show);
    if(show == 0)
      setShow(1);
    else
      setShow(0);
    // console.log("This function is getting used")
  };

  const shuffle = () =>{
    let shuffledArray = [...structuredData];
    for(let i = 0; i < shuffledArray.length;i++)
    {
      let j = Math.floor(Math.random() * (i+1));
      let temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }

    setsStructuredData(shuffledArray);
  };

  useEffect(() =>{
    if(streak > longestStreak)
      setLongestStreak(streak);
    },[streak])

  return (
    <div className="App">
      <h1>Math</h1>
      <p>Number of Cards: {items.length}</p>
      <p>Longest Streak: {longestStreak}</p>
      <p>Streak: {streak}</p>
      <Card question = {structuredData[index].question} 
            answer = {structuredData[index].answer}
            onCard = {show}
            index = {index}
            lock = {lock}
            setLock = {setLock}
            ToggleCard = {ToggleCard}
            streak = {streak}
            setStreak = {setStreak}/>
      <div className = "ButtonContainer">
        <p onClick = {Prev}>Prev</p>
        <p onClick = {Next}> Next</p>
      </div>
      <button onClick = {shuffle}>Shuffle</button>
    </div>
  )
}

export default App