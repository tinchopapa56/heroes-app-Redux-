import HeroCard from "../Herocard/HeroCard.js"
import { useState, useEffect } from "react"
import "./ApiHandle.css"
import {Link} from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { getHeros } from "../store/actions/herosActions.js"

export default function ApiHandle(){

    const [state, setState] = useState(0); //control useEffect
    const [listedTeam,setListedTeam] = useState([
        {
        id: 2,
        name:"carlitos",
        response:"yeah boy",      
        image: {url:"nan"},
        appearance: {race:"white"},
        powerstats: {combat:64},
        powerstats: {durability:"high"}
     },
    ]);    
    // const [herosId,setHerosId] = useState([]) //control duplicates
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getHeros())
    }, [state, dispatch])

    const {loading, error, heroTeam} = useSelector((state) => {
        return state.herosReducer;
    })
    
    useEffect(() => {
        if(heroTeam?.length) {
            setListedTeam(heroTeam);
        }
    },[heroTeam])
    
    const errorImg = "https://img.freepik.com/vector-gratis/concepto-fallo-tecnico-landing-page_52683-13617.jpg?w=2000"; 
    if (error) return <div> THERE's an error </div>;
    
    
    
    return(
        <main>
            <h2 onClick={() => setState(state+1)}>Get a Hero</h2>
            <Link to="/team"><h3>See your team</h3></Link>
            <Link to="/login"><h3>login</h3></Link>
            <div className="team-container">
                {/* {state} */}
                {listedTeam.map( (hero)=>{
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





    // const handleData = (data) => {
    //     const character = data;
        
    //     setTeam((prevTeam)=>{ return [...prevTeam, character]}) //set Team
    //     console.log(team);
        
    //     const id = parseInt(character.id);                          //set IDs to Avoid duplicates
    //     setHerosId((prevHerosId)=>{ return [...prevHerosId, id] })
    //     console.log(herosId)
    // }