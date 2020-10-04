import React, { useState, useEffect } from "react"
import style from "./main.module.css"


const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

async function fetchData() {
  const response = await fetch(POKEMON_API);
  // const JSONresponse = await response.json();
  // return JSONresponse;
  return response.json();
}


export function Pokedex(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
  
  
  useEffect(() => {
    
    setLoading(true);
    fetchData() 
      .then((apiResponse)=>{setPokemonList(Object.values(apiResponse.results));console.log(apiResponse.results)})
     
      .catch(()=>{setError("There are something wrong, please try again later.");})
      .finally(()=>{setLoading(false);})
  
  },[]);


    return(
        <div className = {style.container}>
        <h1 className={style.title}>Pokedex</h1>
        {!isLoading && pokemonList && (
          <ul>
            {pokemonList.map((pokemon)=>(
              <li className={style.list}>
                {pokemon.name}
              </li>
            ))}
  
          </ul>
        )}
        
      </div>
    );


}
export default Pokedex;