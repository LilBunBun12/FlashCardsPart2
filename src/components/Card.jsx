import './Card.css';
import {useState,useEffect} from "react";


const Card = ({question,answer,onCard,index,ToggleCard,lock,setLock,streak, setStreak}) =>{

    const[text,setText] = useState("");
    const[flashState,setFlashState] = useState(null);

    useEffect(() => {setText("")},[index]);
    useEffect(() => {console.log("Flash State Updated: " + flashState)},[flashState]);

    const check = () =>{
        if(text === answer)
        {
            setFlashState("correct");
            if(lock)
                setStreak(streak + 1);
        }
        else
        {
            setFlashState("wrong shake");
            if(lock)
                setStreak(0);
        }
        setLock(false);
        setTimeout(() => setFlashState(null),200);
    }

    const toggle = () =>{
        if(!lock)
            ToggleCard();
        // console.log("lock: " + lock)
    }

    return(
        <div className = {`Card ${flashState}`}>
            <p>{onCard == 0? question:answer}</p>
            <input 
            type="text"
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            />
            <div className = "CardButtons">
                <button onClick = {check}>Check Answer</button>
                <button onClick = {toggle}>{onCard == 0?"Reveal Answer":"Show Question"}</button>
            </div>
        </div>
    )

}

export default Card;


