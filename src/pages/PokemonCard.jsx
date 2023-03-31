import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({ url }) => {
    const [ pokemon, setPokemon ] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(url)
            .then(resp => setPokemon(resp.data))
            .catch(err => console.error(err))

          }, [])
          
    //console.log(url);

  return (
    <div className='container__card-pokemon' onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
      <div className='card'>
        <h3>{pokemon.name}</h3>
        <p><strong>especies:</strong> {pokemon.species?.name} </p>
        <p><strong>type:</strong> {pokemon.types?.[0].type.name} </p>
        <p><strong>Habilidad:</strong> {pokemon.abilities?.[0].ability.name} </p>
        <p><strong>peso:</strong> {pokemon.weight} </p>
        <p><strong>altura:</strong> {pokemon.height} </p>
        <img width={'180px'} src={pokemon.sprites?.other.dream_world.front_default}/>
      </div>
    </div>
  )
}

export default PokemonCard
