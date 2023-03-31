import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
  const userName = useSelector(state => state.userName);
  const navigate = useNavigate();
  const {id} = useParams();
  const [ dataPokemon, setDataPokemon ] = useState({})

  useEffect(() => {
      axios
          .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
          .then(resp => setDataPokemon(resp.data))
          .catch(err => console.error(err))
  }, [])

console.log(dataPokemon);
  return (
    <div className='container__item'>
      <div className="card">
        <h2>{dataPokemon.name}</h2>
        <h5><span>Height:</span> {dataPokemon.height}</h5>
        <h5><span>Height:</span> {dataPokemon.weight}</h5>
        <img width={'150px'} src={dataPokemon.sprites?.other.dream_world.front_default}/>
      </div>
      <button className="button__item" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Item
