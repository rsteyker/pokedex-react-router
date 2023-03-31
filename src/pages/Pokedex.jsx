import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetPokemons from "./GetPokemons";

const Pokedex = () => {
  const userName = useSelector(state => state.userName);
  const navigate = useNavigate();
  const [ dataPokedex, setDataPokedex] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    getAllPokedex();
  }, [])

  const getAllPokedex = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279`)
      .then(resp => setDataPokedex(resp.data))
      .catch(err => console.error(err))
  }


  
  return (
    <div className="container__pokedex">
      <div className="button__inicio-right">
        <h1 className="title__pokedex">Pokedex</h1>
        <button onClick={() => navigate(-1)}>Ir a inicio</button>
      </div>
      <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon </p>
      <div className="container__input-column">
        <input 
          type="text"
          value={search}
          placeholder="Buscar pokemones"
          onChange={(e => setSearch(e.target.value))}
        />
        <button 
          onClick={() => navigate(`/pokedex/${search}`)}>
            Search
        </button>
      </div>

      <GetPokemons
        dataPokedex={dataPokedex}
        setDataPokedex={setDataPokedex}
      />

    </div>
  )
}

export default Pokedex
