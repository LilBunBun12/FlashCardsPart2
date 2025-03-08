import './Card.css';

let cnt = 0;

const Card = ({question,answer,onCard,onClick}) =>{

    let show = "";
    if(onCard == 0)
    {
        show = question;
    }
    else
    {
        show = answer
    }

    return(
        <div className = "Card" onClick={onClick}>
            <p>{show}</p>
        </div>
    )

}

export default Card;


