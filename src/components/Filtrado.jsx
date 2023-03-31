import axios from "axios";
import { useEffect, useState } from "react";


const Filtrado = ({ getSelectTypePokedex }) => {
  const [ selected, setSelected ] = useState({})

  useEffect( () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then( resp => setSelected(resp.data))
      .catch( err => console.error(err))
  }, [])

  return (
    <div className="container__filtrado">
      <select name="" id="" onChange={e => getSelectTypePokedex(e.target.value)}>
        <option value="https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279">All pokemons</option>
        {
          selected.results?.map((type) => (
            <option 
              value={type.url} 
              key={type.url}
              >
                {type.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default Filtrado
