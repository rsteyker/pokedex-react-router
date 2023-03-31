import PokemonCard from "./PokemonCard";
import Filtrado from '../components/Filtrado';
import Pagination from "../components/Pagination";
import axios from "axios";
import { useState } from "react";


const GetPokemons = ({ dataPokedex, setDataPokedex}) => {

  //Estado paginado
  const [ page, setPage ] = useState(1)
  const perPage = 20
  const lastIndex = perPage * page

  
  const getSelectTypePokedex = (url) => { 
    setPage(1)
    axios
      .get(url)
      .then(resp => setDataPokedex(resp.data))
      .catch(err => console.log(err))

      //console.log(url);
    }

    let shortRoutePokemons
    let shortRouteCount

    const rutaPokedex = () => {
      if (dataPokedex?.results) {
        shortRoutePokemons = dataPokedex?.results
        shortRouteCount = dataPokedex?.count
      }else{
        shortRoutePokemons = dataPokedex.pokemon
        shortRouteCount = dataPokedex.pokemon?.length
      }
    }
    rutaPokedex();

    //Paginado
    const totalPage = Math.ceil( shortRouteCount / perPage );
    const pokemonsShow = shortRoutePokemons?.slice(lastIndex - perPage, lastIndex);
    const arrayIteracion = []
    const iteracion = () => {
      for (let i = 1; i <= totalPage; i++) {
        arrayIteracion.push(i);
      }
    }
    iteracion();

    console.log(page);

    //Pagination x 10
    let access
    const selectAccess = () => {
      if (totalPage > 10) {
        if (page > totalPage - 5) {
          access = arrayIteracion.slice(totalPage - 10, totalPage)
        } else if(page > 5){
          access = arrayIteracion.slice(page - 5, page + 5)
        } else {
          access = arrayIteracion.slice(0, 10)
        }
      } else{
        access = arrayIteracion.slice(0, totalPage)
      }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    //Ejecutamos la función
    selectAccess();

  return (
    <div className="">
        <Filtrado
        getSelectTypePokedex={ getSelectTypePokedex }
        />

        <div className="pokemon__container">
          { 
            pokemonsShow?.map((pokemon) => (
              <PokemonCard 
                url={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              />
            ))
          }
        </div>

      <div className="pagination">
        {
          access.map((num) => (
            <Pagination 
            num={num} 
            key={num}
            setPage={setPage}
            />
          ))
        }
      </div>
    </div>
  )
}

export default GetPokemons
