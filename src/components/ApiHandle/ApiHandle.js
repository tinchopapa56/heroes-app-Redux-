import Axios from "axios"
import HeroCard from "../Herocard/HeroCard.js"
import { useState, useEffect } from "react"
import "./ApiHandle.css"


export default function ApiHandle(){

    const [state, setState] = useState(0); //control useEffect
    const [team,setTeam] = useState([]);    
    const [herosId,setHerosId] = useState([]) //control duplicates


useEffect( ()=>{
    const handleData = (data) => {
        const character = data;
        
        setTeam((prevTeam)=>{ return [...prevTeam, character]}) //set Team
        console.log(team);
        
        const id = parseInt(character.id);                          //set IDs to Avoid duplicates
        setHerosId((prevHerosId)=>{ return [...prevHerosId, id] })
        console.log(herosId)
    }

        const randomHero = Math.abs(Math.floor(Math.random()*1000-267) + 1);

        Axios.get(`https://www.superheroapi.com/api.php/5264020983645129/${randomHero}`)
        .then((res)=> {handleData(res.data)})
        
        .catch((err)=>{console.log(err)})
    },[state]
)
    const errorImg = "https://img.freepik.com/vector-gratis/concepto-fallo-tecnico-landing-page_52683-13617.jpg?w=2000"; 

    return(
        <main>
            <h2 onClick={() => setState(state+1)}>Get a Hero</h2>
            <div className="team-container">
                {/* {state} */}
                {team.map( (hero)=>{
                    return (
                        <HeroCard
                        key={hero.id}
                        name={hero.name}
                        response={hero.response}
                        img={hero.image.url ? `${hero.image.url}` : `${errorImg}`}  
                        race={hero.appearance.race}
                        combat={hero.powerstats.combat}
                        durability={hero.powerstats.durability}
                        />
                        )})
                }
            </div>
        </main>
    )
}




