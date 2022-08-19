import "./HeroCard.css"
export default function HeroCard(props) {

    // const powerstats = (props.powerstats)=>{
    //     return(
    //         <ul>
    //             {/* <li className="card-stats-li">Combat: {IMPORTED}</li>
    //             <li className="card-stats-li">Durability: {IMPORTED}</li>
    //             <li className="card-stats-li">Intelligence: {IMPORTED}</li>
    //             <li className="card-stats-li">Power: {IMPORTED}</li>
    //             <li className="card-stats-li">Speed: {IMPORTED}</li>
    //             <li className="card-stats-li">Strength: {IMPORTED}</li> */}
    //                 {/* map(()=>{return <p>Cool</p>}) */}
            
    //         </ul>
    //     )
    // } 

    return(
    <div className="card"> 
        <img className="card-img" src={props.img} alt="garbage" />
        <p className="card-text"> <strong>Name:</strong> {props.name}</p>
        <p className="card-text"> <strong>Race:</strong> {props.race}</p>
        <p className="card-text"> <strong>Combat:</strong> {props.combat}</p>
        <p className="card-text"> <strong>Durability:</strong> {props.durability}</p>
        {/* <p className="card-text"> <strong>Poqwerstats:</strong> {OTRO_COMPONENTE)}</p> */}
    </div>
    )
}