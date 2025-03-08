import './App.css';
import {useState} from 'react';
import items from "./data.json";
import Card from './components/Card';
import Data from './components/Data'

const App = () => {

  const [index,setIndex] = useState(0);
  const [show,setShow] = useState(0);
  const structuredData = items.map(item => new Data(item.Question, item.Answer));
  console.log(structuredData[index]);

  const Prev = () =>{
    setIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : structuredData.length - 1));
  }

  const Next = () => {
    setIndex(prevIndex => (prevIndex < structuredData.length - 1 ? prevIndex + 1 : 0)); 
  };

  const flip = () => {
    setShow(prevShow => {
        console.log("Previous State:", prevShow);
        return prevShow === 0 ? 1 : 0;
    });
};

  return (
    <div className="App">
      <h1>Math</h1>
      <p>Number of Cards: 10</p>
      <Card onClick = {flip} 
            question = {structuredData[index].question} 
            answer = {structuredData[index].answer}
            onCard = {show}/>
      <div className = "ButtonContainer">
        <p onClick = {Prev}>Prev</p>
        <p onClick = {Next}> Next</p>
      </div>
    </div>
  )
}

export default App